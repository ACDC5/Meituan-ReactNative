import React, {Component} from 'react';
import {
    Platform,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
    Image,
    View,
    Alert
} from 'react-native';
import {DataRepository} from "./DataRepository";

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

var dataRepository = new DataRepository();
export default class HomeBottomList extends Component<Props> {


    static navigationOptions = () => ({header: null,});

    constructor(props) {
        super(props);
        this.page = 1
        this.state = {data: [], isRefresh: false, isLoadMore: false}
    }

    componentDidMount(): void {
        if (!this.state.isRefresh) {
            this.page = 1
            this._getHotList()
        }
    }

    render() {
        return (
            <FlatList style={styles.container}
                      data={this.state.data}
                //item显示的布局
                      renderItem={({item}) => this._createListItem(item)}
                    //  keyExtractor={(item, index) => item.id}
                // 添加尾布局
                      ListFooterComponent={this._createListFooter}
                // 下拉刷新相关
                      onRefresh={() => this._onRefresh()}
                      refreshing={this.state.isRefresh}
                // 加载更多
                      onEndReached={() => this._onLoadMore()}
                      onEndReachedThreshold={0.1}/>);
    }


    _getHotList() {

        dataRepository.fetchData("http://m.app.haosou.com/index/getData?type=1&page=" + this.page).then((responseJson) => {
            console.log(responseJson)
            if (this.page === 1) {
                console.log("重新加载")
                this.setState({data: responseJson.list})
            } else {
                console.log("加载更多")
                this.setState({isLoadMore: false, data: this.state.data.concat(responseJson.list)})
            }
        });
    }

    _createListItem(item) {
        return (<TouchableOpacity
            style={{
                flexDirection: 'row', padding: 10
                , borderBottomColor: '#cccccc',
                borderBottomWidth: 0.5,
                alignItems: 'center',
            }}
            activeOpacity={0.5}
            onPress={() => this._onItemClick(item)}>

            <Image source={{uri: item.logo_url}} style={styles.itemImages}/>
            <View style={{marginLeft: 10}}>

                <Text> {item.name} </Text>
                <Text> {item.single_word} </Text>
                <Text> {item.version_name} </Text>
            </View>
        </TouchableOpacity>);
    }

    _createListFooter() {
        return (<View style={styles.footerView}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>)
    }

    _onRefresh = () => {
        if (!this.state.isRefresh) {
            this.page = 1
            this._getHotList()
        }
    };

    _onLoadMore() {
        if (!this.state.isLoadMore && this.state.data.length > 0) {
            this.page = this.page + 1
            this._getHotList()
        }
    }

    _onItemClick(item) {
        Alert.alert(" name: " + item.name + " \ndes:" + item.single_word);
    }


}

const
    styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            marginTop: 10,
        },
        headView: {
            width: width,
            height: 100,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        },
        footerView: {
            width: width,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        itemImages: {width: 70, height: 70, resizeMode: 'stretch'},
    });

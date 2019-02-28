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

    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentDidMount(): void {
        this._getHotList()
    }

    render() {
        return (
            <FlatList style={styles.container}
                      data={this.state.data}
                //item显示的布局
                      renderItem={({item}) => this._createListItem(item)}
                      keyExtractor={(item, index) => item.id}/>);
    }


    _getHotList() {
        dataRepository.fetchData("http://m.app.haosou.com/index/getData?type=1&page=" + this.page)
            .then((responseJson) => {
                let data = responseJson.list;
                this.setState({data: data})
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

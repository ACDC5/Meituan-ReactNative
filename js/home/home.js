import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar, Button, ScrollView} from 'react-native';
import HomeDetail from './HomeDetail'
import HomeTopView from "./HomeTopView";
import HomeMiddleView from "./HomeMiddleView";
import HomeMiddleView2 from "./HomeMiddleView2";
import HomeBottomList from "./HomeBottomList";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class Home extends Component<Props> {

    _pressJumpdetail() {
        const {navigator} = this.props
        if (navigator) {
            navigator.push(
                {
                    name: '主页详情',
                    component: HomeDetail
                }
            )
        }

    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#ff8522'
                    barStyle="light-content"
                />
                {this.titleBar()}
                <ScrollView style={{marginBottom: 50}}>
                    <HomeTopView/>
                    <Button onPress={this._pressJumpdetail.bind(this)} title={'跳转详情'}> </Button>
                    <HomeMiddleView/>
                    <HomeMiddleView2/>
                    <HomeBottomList/>
                </ScrollView>


            </View>
        );
    }

    titleBar() {
        return <View style={{
            backgroundColor: '#ff8522',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Text style={{padding: 10, color: "#fff"}}>
                北京
            </Text>

            <TextInput placeholder="科技,财经,新闻" style={styles.topInputStyle}/>

            <Image source={require('../../res/images/icon_homepage_message.png')} style={styles.imageIcon}/>
            <Image source={require('../../res/images/icon_homepage_scan.png')} style={styles.imageIcon}/>
        </View>

    }
}

const styles = StyleSheet.create({
    topInputStyle: {
        backgroundColor: 'white',
        borderRadius: 16,
        height: 30,
        padding: 0,
        paddingLeft: 10,
        flex: 1,
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },

    hotImage: {
        width: width * 1 / 4,
        height: width * 1 / 4,
        marginRight: 5

    }
});

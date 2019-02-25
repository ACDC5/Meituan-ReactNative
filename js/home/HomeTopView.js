import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import HomeTopListView from "./HomeTopListView";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class HomeTopView extends Component <Props> {
    constructor(props) {
        super(props)
        const data = [[
            {"title": "美食", "image": require('../../res/images/ms.png')},
            {"title": "电影", "image": require('../../res/images/dy.png')},
            {"title": "酒店", "image": require('../../res/images/jd.png')},
            {"title": "休闲娱乐", "image": require('../../res/images/xxyl.png')},
            {"title": "外卖", "image": require('../../res/images/wm.png')},
            {"title": "自助餐", "image": require('../../res/images/zzc.png')},
            {"title": "KTV", "image": require('../../res/images/ktv.png')},
            {"title": "火车票机票", "image": require('../../res/images/hcpjp.png')},
            {"title": "丽人", "image": require('../../res/images/lr.png')},
            {"title": "周边游", "image": require('../../res/images/zby.png')}], [
            {"title": "足疗按摩", "image": require('../../res/images/zlam.png')},
            {"title": "购物", "image": require('../../res/images/gw.png')},
            {"title": "今日新单", "image": require('../../res/images/jrxd.png')},
            {"title": "小吃快餐", "image": require('../../res/images/xckc.png')},
            {"title": "生活服务", "image": require('../../res/images/shfw.png')},
            {"title": "甜点饮品", "image": require('../../res/images/tdyp.png')},
            {"title": "美甲", "image": require('../../res/images/mj.png')},
            {"title": "景点门票", "image": require('../../res/images/jdmp.png')},
            {"title": "旅游", "image": require('../../res/images/ly.png')},
            {"title": "全部分类", "image": require('../../res/images/qbfl.png')}]
        ];
        this.state =
            {
                data,
                currentPager: 0
            }

    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "white"}}>
                <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={(e) => {
                                // 获取滑动的偏移量
                                var offSetX = e.nativeEvent.contentOffset.x;
                                // 通过偏移量和屏幕宽度计算第几页 需要四舍五入, 计算所得是小数
                                var currentPager = Math.ceil(offSetX / width);
                                this.setState({currentPager: currentPager})
                                console.warn("索引====" + currentPager)
                            }}>
                    {this._getBannerView()}
                </ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {this._getIndicatorView()}
                </View>
            </View>
        );
    }

    _getIndicatorView() {
        var indicatorArr = []
        for (var i = 0; i < this.state.data.length; i++) {

            var styleColr = this.state.currentPager === i ? {color: 'red'} : {color: 'gray'};
            indicatorArr.push(<Text key={i} style={[{fontSize: 25,}, styleColr]}> &bull;</Text>)
        }
        return indicatorArr
    }

    _getBannerView() {
        var bannerArr = []
        for (var i = 0; i < this.state.data.length; i++) {
            bannerArr.push(<HomeTopListView key={i} dataArr={this.state.data[i]}/>)
        }
        return bannerArr
    }
}

const styles = StyleSheet.create({});

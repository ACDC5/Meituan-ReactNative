import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import MineComponent from "./MineComponent"
import MineMiddleComponent from "./MineMiddleComponent"
import MineHeadComponentfrom from "./MineHeadComponent"

type Props = {};
export default class Mine extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <View>

                    <MineHeadComponentfrom/>
                    <MineMiddleComponent/>
                    <MineComponent leftImage={require('../../res/images/draft.png')} leftTitle={"我的钱包"}
                                   rightTitle={"账户余额 : ¥1000"}/>
                    <MineComponent
                        leftImage={require('../../res/images/qbfl.png')} leftTitle={"抵用券"}
                        rightTitle={"0"}/>
                    <MineComponent leftImage={require('../../res/images/card.png')}
                                   leftTitle={"积分商城"}/>
                    <MineComponent
                        leftImage={require('../../res/images/shfw.png')} leftTitle={"今日推荐"}
                        rightImage={require('../../res/images/me_new.png')}/>
                    <MineComponent
                        leftImage={require('../../res/images/tdyp.png')} leftTitle={"我要合作"}
                        rightTitle={"轻松开店,招财进宝"}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});

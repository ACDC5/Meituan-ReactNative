import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import MoreComponent from './MoreComponent'

type Props = {};
export default class More extends Component<Props> {
    render() {
        return (
            <View>
                <View style={styles.moreTitle}>

                    <Text style={{color: "white", fontSize: 15, fontWeight: 'bold'}}> 更多</Text>
                    <Image source={require('../../res/images/icon_mine_setting.png')} style={styles.titlImage}/>
                </View>
                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <MoreComponent leftTitle={"扫一扫"} isMargin={true}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreComponent leftTitle={"省流量模式"} isSwitch={true}/>
                        <MoreComponent leftTitle={"消息提醒"}/>
                        <MoreComponent leftTitle={"邀请好友"}/>
                        <MoreComponent leftTitle={"清空缓存"} rightTitle={"1.98M"}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreComponent leftTitle="问卷调查"/>
                        <MoreComponent leftTitle="支付帮助"/>
                        <MoreComponent leftTitle="网络诊断"/>
                        <MoreComponent leftTitle="我要应聘"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreComponent leftTitle="精品应用"/>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    titlImage: {
        position: 'absolute',
        right: 10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },
    moreTitle: {
        paddingLeft: 10,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        backgroundColor: "#ff8522",
        flexDirection: "row",
    },
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

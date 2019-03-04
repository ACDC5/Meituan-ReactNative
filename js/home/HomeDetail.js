import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, DeviceEventEmitter, View, NativeModules, ToastAndroid} from 'react-native';
import HomeBottomList from "./HomeBottomList";


export default class HomeDetail extends HomeBottomList <Props> {

    _pressBack() {
        const {navigator} = this.props
        if (navigator) {
            navigator.pop()
        }

    }

    /**
     * 周期  oncreate
     */
    componentDidMount(): void {
        DeviceEventEmitter.addListener("eventname", function (msg) {
            ToastAndroid.show(msg.eventname + "msg.eventname", ToastAndroid.SHORT)
            ToastAndroid.show("NativeModules.ToastForAndroid.MESSAGE" + NativeModules.ToastForAndroid.MESSAGE, ToastAndroid.SHORT)
        })
    }

    /**
     * 调用java的方法
     * @private
     */
    _pressToJavaToast() {
        NativeModules.ToastForAndroid.show('调用成功')

    }

    /**
     * 回调方式调用java获取数据
     * @private
     */
    _pressToJavaCallBak() {
        NativeModules.ToastForAndroid.getCallback((result) => {
            ToastAndroid.show(result, ToastAndroid.SHORT)

        })

    }

    /**
     * promise 方式实现java数据额回调
     * @private
     */
    _pressToJavaPromis() {
        NativeModules.ToastForAndroid.getPromise().then(((result) => {
            ToastAndroid.show(result, ToastAndroid.SHORT)

        }))

    }

    /**
     * java 调用js
     * @private
     */
    _pressToJavaCallbackJs() {
        NativeModules.ToastForAndroid.transferJs()
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this._pressBack.bind(this)} title={"返回!"}></Button>
                <Button onPress={this._pressToJavaToast.bind(this)} title={"点击调用Java Toast显示提示信息!"}></Button>
                <Button onPress={this._pressToJavaCallBak.bind(this)} title={"点击回调方式获取数据!"}></Button>
                <Button onPress={this._pressToJavaPromis.bind(this)} title={"点击Promis方式获取数据!"}></Button>
                <Button onPress={this._pressToJavaCallbackJs.bind(this)} title={"java 调用 js "}></Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
});

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar} from 'react-native';
import HomeDetail from './HomeDetail'

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
                <Text style={styles.welcome} onPress={this._pressJumpdetail.bind(this)}>home!</Text>

            </View>
        );
    }

    titleBar() {
        return <View style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: "#ff8522",
            alignItems: 'center'
        }}>
            <Text style={{padding: 10, color: "#fff"}}>
                北京
            </Text>

            <TextInput placeholder="科技,财经,新闻" style={{
                backgroundColor: '#fff',
                borderRadius: 30,
                padding: 10,
                margin: 10,
                flex: 1,
            }}/>

            <Image source={require('../../res/images/icon_homepage_message.png')} style={styles.imageIcon}/>
            <Image source={require('../../res/images/icon_homepage_scan.png')} style={styles.imageIcon}/>
        </View>

    }
}

const styles = StyleSheet.create({

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
});

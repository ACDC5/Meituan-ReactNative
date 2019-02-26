import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Main from "../../js/main/main"

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class Launcher extends Component<Props> {
       componentDidMount(): void {

           setTimeout(() => {
               this.props.navigator.replace({
                   component:Main
               })
           }, 10)
       }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                   hidden={true}
                />
                <Image style={{
                    resizeMode: 'cover',
                    width: width,
                    height: height
                }} source={require("../../res/images/luancher.png")}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({});

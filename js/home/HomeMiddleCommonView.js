import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class HomeMiddleCommonView extends Component <Props> {

    static defaultProps = {
        title1: "",
        title2: "",
        titleColor: undefined,
        rightImage: undefined,
    }

    render() {
        return (
            <View style={styles.containerMiddle}>
                <View>
                    <Text style={[styles.rightText,{color:this.props.titleColor}]}>{this.props.title1} </Text>
                    <Text style={styles.rightText}>{this.props.title2}</Text>
                </View>

                <Image source={this.props.rightImage} style={{width: 60, height: 45}}/>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    containerMiddle: {
        width: 0.5 * width,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 0.5,
        borderRightColor: '#cccccc',
        borderRightWidth: 0.5,
    }, rightText: {
        fontSize: 10,
    },

});

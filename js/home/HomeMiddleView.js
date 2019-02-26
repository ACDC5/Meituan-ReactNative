import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import HomeMiddleCommonView from "./HomeMiddleCommonView";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class HomeMiddleView extends Component <Props> {

    constructor(props) {
        super(props)
        this.state = {

            rightData: [{
                "title": "天天特价", "subTitle": "特惠不打烊",
                img1: require('../../res/images/tttj.png'),
                rightImage: require('../../res/images/tttj.png'),
                "titleColor": "orange"
            },
                {
                    "title": "一元吃", "subTitle": "一元吃美食",
                    img1: require('../../res/images/tttj.png')
                    , rightImage: require('../../res/images/yyms.png'),
                    "titleColor": "red"
                }]

        }
    }

    render() {
        return (
            <View style={styles.containerMiddle}>
                {/*z左边*/}
                {this._getLeftView()}
                {/*右边*/}
                <View style={{}}>
                    {this._getRightView()}
                </View>

            </View>
        );
    }

    _getLeftView() {
        return <View style={{
            width: 0.5 * width,
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-around',
            borderRightColor: '#cccccc',
            borderRightWidth: 0.5,
        }}>
            <Image source={require('../../res/images/mdqg.png')} style={styles.leftImage}/>
            <Image source={require('../../res/images/yyms.png')} style={{width: 50, height: 15, marginTop: 5}}/>
            <Text style={{marginTop: 5, fontSize: 10}}>探路者烤鱼店</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10}}>¥ 9.9</Text>
                <Text style={{
                    fontSize: 7,
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: 5,
                    marginLeft: 5,
                    justifyContent: 'center',
                    paddingLeft: 5,
                    paddingRight: 5,
                    alignItems: 'center'
                }}>再减¥3</Text>
            </View>
        </View>

    }

    _getRightView() {
        var adArr = []
        for (var i = 0; i < this.state.rightData.length; i++) {
            let rightDatum = this.state.rightData[i];
            adArr.push(<HomeMiddleCommonView key={i}
                                             title1={rightDatum.title}
                                             title2={rightDatum.subTitle}
                                             titleColor={rightDatum.titleColor}
                                             rightImage={rightDatum.rightImage}/>)
        }
        return adArr
    }
}

const styles = StyleSheet.create({
    containerMiddle: {
        marginTop: 10,
        flexDirection: 'row',
    },
    leftImage: {
        width: 70,
        height: 15

    },
});

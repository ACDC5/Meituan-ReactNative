import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import HomeMiddleCommonView from "./HomeMiddleCommonView";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class HomeMiddleView2 extends Component <Props> {

    constructor(props) {
        super(props)
        this.state = {

            rightData: [{
                "title": "千万红包限时抢", "subTitle": "五折美食任你挑",
                img1: require('../../res/images/tttj.png'),
                rightImage: require('../../res/images/tttj.png'),
                "titleColor": "orange"
            },
                {
                    "title": "踏青好去处", "subTitle": "优惠好感动",
                    img1: require('../../res/images/tttj.png')
                    , rightImage: require('../../res/images/yyms.png'),
                    "titleColor": "red"
                }]

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上边*/}
                {this._getLeftView()}
                {/*下边*/}
                <View style={{}}>
                    {this._getRightView()}
                </View>

            </View>
        );
    }

    _getLeftView() {
        return <View style={styles.containerMiddle}>
            <View>
                <Text style={{color:'orange',fontSize: 13}}>最高立减25 </Text>
                <Text style={{color:'#aaaaaa',fontSize: 10}}>报名小马哥新学员专享</Text>
            </View>

            <Image source={require('../../res/images/nsj.png')} style={{width: 105, height: 42}}/>

        </View>

    }

    _getRightView() {
        return <View style={{flexDirection: 'row'}}>
            <View>
                {this.getSubView()}
            </View>
            <View>
                {this.getSubView()}
            </View>
        </View>
    }

    getSubView() {
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
    container: {
        marginTop: 10,

    },
    leftImage: {
        width: 70,
        height: 15

    },


    containerMiddle: {
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        paddingBottom:5,
        width: width,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 0.5,
    }, rightText: {
        fontSize: 10,
    },

});

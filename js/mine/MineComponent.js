import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Switch} from 'react-native';

export default class MineComponent extends Component<Props> {


    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: 'white'
            }}>
                {/*左边*/}
                {this.leftView()}

                {/*右边*/}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    {this.rightView()}
                    <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{
                        width:  8,
                        height:  13
                    }}/>

                </View>
            </View>
        );
    }

    /*左边字体*/
    leftView() {
        return <View style={styles.leftStyle}>
            <Image source={this.props.leftImage} style={{width: 20, height: 20, marginRight: 10, borderRadius: 16}}/>
            <Text style={{color: '#333333'}}>{this.props.leftTitle}</Text>
        </View>;
    }

    /*右边*/
    rightView() {
        if (this.props.rightImage == undefined) {
            return < Text style={{color: '#333333', marginRight: 10}}>{this.props.rightTitle}</Text>
        } else {
            return <Image source={this.props.rightImage} style={{width: 24, height: 13, marginRight: 10}}/>
        }
        return;
    }
}

const styles = StyleSheet.create({
    leftStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
    }


});

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Switch} from 'react-native';

export default class MoreComponent extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between',
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 0.5,
                backgroundColor: 'white'
            }}>
                {/*左边*/}
                {this.leftView()}

                {/*右边*/}
                {this.rightView()}

            </View>
        );
    }

    /*左边字体*/
    leftView() {
        if (this.props.leftTitle.length > 0) {
            return <Text style={{color: '#333333'}}>{this.props.leftTitle}</Text>
        }
        return;
    }

    /*右边*/
    rightView() {
        /*开关*/
        if (this.props.isSwitch) {
            return <Switch value={this.state.isOn} onValueChange={(isOn) => this.setState({isOn: isOn})}/>
        }
        /*文字*/
        if (this.props.rightTitle) {
            return <View style={{flexDirection: 'row'}}>
                < Text style={{color: '#333333', marginRight: 10}}>{this.props.rightTitle}</Text>
                <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{
                    width: Platform.OS === "ios" ? 30 : 10,
                    height: Platform.OS === "ios" ? 30 : 10
                }}/>
            </View>
        } else {
            return <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{
                width:  8,
                height:  13
            }}/>
        }
        return;
    }
}

const styles = StyleSheet.create({});

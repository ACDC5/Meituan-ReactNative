import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Switch} from 'react-native';
import MineComponent from "./MineComponent.js"

export default class MineMiddleComponent extends Component<Props> {


    render() {
        return (
            <View>
                <MineComponent leftImage={require('../../res/images/collect.png')} leftTitle={"我的订单"}
                               rightTitle={"全部订单"}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 90,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                    {this._orderView()}
                </View>
            </View>
        );
    }

    _orderView() {
        var iconName = [require('../../res/images/order1.png'), require('../../res/images/order2.png'), require('../../res/images/order3.png'), require('../../res/images/order4.png')];
        var titleName = ["待付款", "待使用", "待评价", "退款/售后"];
        var arrView = [];
        for (let i = 0; i < 4; i++) {
            arrView.push(<SubitemComponent key={i} iconName={iconName[i]} title={titleName[i]}/>)
        }
        return arrView
    }
}

export class SubitemComponent extends Component {

    render(): React.ReactNode {
        return (<View style={{alignItems: 'center'}}>
            <Image source={this.props.iconName} style={{width: 30, height: 20,marginBottom:10}}/>
            <Text>
                {this.props.title}
            </Text>

        </View>);
    }
}

const styles = StyleSheet.create({});

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Switch} from 'react-native';
import MineComponent from "./MineComponent.js"

export default class MineHeadComponent extends Component<Props> {


    render() {
        return (
            <View>
                {/*头像*/}
                {this._photoView()}
                {/*优惠券*/}
                <View style={{
                    backgroundColor: "#ffa888",
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding:10
                }}>
                    {this._head2()}
                </View>
            </View>
        );
    }


    _photoView() {
        return <View style={{
            backgroundColor: '#ff8522',
            flexDirection: 'row',
            alignItems: "center",
            paddingTop: 15,
            paddingBottom: 15
        }}>
            <Image source={require('../../res/images/shfw.png')} style={{width: 80, height: 80}}/>
            <Text style={{color: 'white', fontWeight: 'bold'}}> 快道科技</Text>
            <Image source={require('../../res/images/rm.png')} style={{width: 25, height: 25}}/>
            <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                   style={{width: 10, height: 15, position: 'absolute', right: 10}}/>
        </View>

    }

    _head2() {
        var iconName = ["100", "12", "50"];
        var titleName = ["美团券", "评价", "收藏"];
        var arrView = [];
        for (let i = 0; i < 3; i++) {
            arrView.push(<HeadSubitemComponent key={i} iconName={iconName[i]} title={titleName[i]}/>)
        }
        return arrView
    }
}

export class HeadSubitemComponent extends Component {

    render(): React.ReactNode {
        return (<View style={{alignItems: 'center'}}>
            <Text style={{color: 'white'}}>
                {this.props.iconName}
            </Text>
            <Text  style={{color: 'white'}}>
                {this.props.title}
            </Text>

        </View>);
    }
}

const styles = StyleSheet.create({});

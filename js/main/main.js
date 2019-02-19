import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Home from '../home/home';
import Find from '../find/find';
import Mine from '../mine/mine';
import More from '../more/more';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';

export default class Main extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="主页"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_homepage.png')}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../res/images/icon_tabbar_homepage_selected.png')}
                        style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>

                    <Navigator
                        initialRoute={{
                            name: "首页",
                            component: Home
                        }}
                        renderScene={(router, navigator) => {
                            let Component = router.component;
                            return <Component {...router.params} navigator={navigator}/>
                        }}/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_merchant_normal.png')}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../res/images/icon_tabbar_merchant_selected.png')}
                        style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="订单"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_misc.png')}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../res/images/icon_tabbar_misc_selected.png')}
                        style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Mine/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="我的"
                    renderIcon={() => <Image source={require('../../res/images/icon_tabbar_mine.png')}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../res/images/icon_tabbar_mine_selected.png')}
                        style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <More/>
                </TabNavigator.Item>


            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    iconStyle: {
        width: Platform.OS === "ios" ? 30 : 25,
        height: Platform.OS === "ios" ? 30 : 25
    }
});

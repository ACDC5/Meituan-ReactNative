/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Main from './js/main/main';
import App from './App';
import Launcher from './js/launcher/Launcher';
import {Navigator} from 'react-native-deprecated-custom-components';

import {name as appName} from './app.json';
import Home from "./js/home/home";
import React, {Component} from 'react';

export class Meituan extends Component {
    render() {
        return <Navigator
            initialRoute={{
                name: "启动页",
                component: Launcher
            }}
            renderScene={(router, navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>
            }}/>

    }
}

AppRegistry.registerComponent(appName, () => Meituan);

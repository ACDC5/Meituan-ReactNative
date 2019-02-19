import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class HomeDetail extends Component <Props> {

    _pressBack() {
        const {navigator} = this.props
        if (navigator) {
            navigator.pop()
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this._pressBack.bind(this)}>详情页!</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
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
});

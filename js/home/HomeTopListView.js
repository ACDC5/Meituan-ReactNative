import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, Image} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
export default class HomeTopListView extends Component <Props> {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.contentContainerStyle}
                renderRow={(rowData) => <View style={styles.cellStyle}>
                    <Image style={{width: 60, height: 60}}
                           source={rowData.image}/>
                    <Text>{rowData.title}</Text>
                </View>}
            />
        );
    }


}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
    },
    cellStyle: {
        paddingTop: 10,
        alignItems: 'center',
        width: width / 5,

    },

});

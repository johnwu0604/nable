/**
 * Created by JohnWu on 2017-04-01.
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native';

import Dimensions from 'Dimensions';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phone: this.props.phone,
            description: this.props.description,
            price: this.props.price,
            date: this.props.date
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.name}</Text>
                <Text style={styles.text}>{this.state.phone}</Text>
                <Text style={styles.text}>{this.state.description}</Text>
                <Text style={styles.text}>{this.state.price}</Text>
                <Text style={styles.text}>{this.state.date}</Text>
                <View style={styles.separator}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight/5,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#063e77"
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});



export default List;
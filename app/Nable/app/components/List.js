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
                    <Text style={styles.name}>{this.state.name}</Text>

                    <View style={{flexDirection: 'row', width: windowWidth, marginLeft: 12}}>
                        <Text style={styles.date}>{this.state.date}</Text>
                        <Text style={styles.description}>{this.state.description}</Text>
                        <Text style={styles.price}>{"$ "+ this.state.price}</Text>
                    </View>
                <View style={styles.separator}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        // height: windowHeight/5,
        padding: 12,
        flexDirection: 'column',
        backgroundColor: "#FFF6EF",
        // justifyContent: 'space-between',
    },
    name: {
        color: '#063e77',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 12,
        flexDirection: 'row',
        width: windowWidth

    },
    phone:{
        color: '#063e77',
        fontSize: 14,
        fontStyle: 'italic',
        marginLeft: 6,
    },
    date: {
        color: '#063e77',
        fontSize: 14,
    },
    description:{
        color: '#063e77',
        position: 'absolute',
        left: windowWidth/4,

    },
    price: {
        color: '#063e77',
        position: 'absolute',
        right: windowWidth/7,
        alignItems:'flex-end',
    },

    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#FFF6EF',
    }
});



export default List;
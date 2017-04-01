'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    TouchableOpacity,
    AlertIndicatorIOS,
    ActivityIndicatorIOS,
    AlertIOS,
    StyleSheet
} from 'react-native';


class Payments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            userId: this.props.userId
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.email}</Text>
            </View>
        );
    }

    componentWillMount() {
        fetch("http://localhost:5000/api/payment?email=nabil%40mail.mcgill.ca")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    name: responseData.name,
                    email: responseData.email
                });
            })
            .done();
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});


export default Payments;
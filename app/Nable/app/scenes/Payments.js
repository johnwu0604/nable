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
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            userId: ''
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPayments.bind(this)}
            />
        );
    }

    renderPayments(payment) {
        return (
            <View style={styles.container}>
                <Text>{payment.name}</Text>
                <Text>{payment.phone}</Text>
                <Text>{payment.description}</Text>
                <Text>{payment.price}</Text>
                <Text>{payment.date}</Text>
            </View>
        );
    }

    componentWillMount() {
        this.setState({
            userId: this.props.userId
        });
        var userId = this.props.userId;
        fetch('http://localhost:5000/api/payment?_id=' + userId )
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
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
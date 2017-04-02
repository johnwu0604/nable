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
    StyleSheet,
    Button,
    Navigator
} from 'react-native';

import List from '../components/List.js';
import Title from '../components/Title.js';
import LoginBackground from '../components/LoginBackground.js';
import Login from "./Login";

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
                <LoginBackground>
                    <View style={{position: 'absolute', right: 5, height: 100, weight: 100}}>
                        <Button style={{}}
                            onPress={() =>
                                this.props.navigator.push({
                                    name: "AddPayment"
                                })
                            }
                            title = " + "
                            color="#063e77"
                        />
                    </View>
                    <Title text="Pending $$$"></Title>
                    <ListView
                        style={{paddingTop: 11}}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderPayments.bind(this)}/>
                </LoginBackground>
    );
    }

    renderPayments(payment) {
        return (
        <List name={payment.name} phone={payment.phone} description={payment.description}
        price={payment.price} date={payment.date}></List>
        );
    }

    componentWillMount() {
        this.setState({
            userId: this.props.userId
        });
        var userId = this.props.userId;
        fetch('http://localhost:5000/api/user?_id=' + userId )
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.paymentIds)
                });
            })
            .done();
    }

}
export default Payments;
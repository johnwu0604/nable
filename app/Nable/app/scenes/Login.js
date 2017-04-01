'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet, Button
} from 'react-native';

import LoginBackground from '../components/LoginBackground.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';


class Login extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <LoginBackground>
                <Logo></Logo>
                <Input text="Email"></Input>
                <Input text="Password"></Input>
                <Button
                    onPress={() => {
                      this.props.navigator.push({
                        name: 'AddPayment',
                      });
                    }}
                    title="Login"
                    color="#063e77"
                />
                <Button
                    onPress={() => {
                      this.props.navigator.push({
                        name: 'Registration',
                      });
                    }}
                    title="Create a new account"
                    color="#063e77"
                />
            </LoginBackground>
        );
    }

};


export default Login;
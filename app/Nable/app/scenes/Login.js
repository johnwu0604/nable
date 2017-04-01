'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
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
            </LoginBackground>
        );
    }

};


export default Login;
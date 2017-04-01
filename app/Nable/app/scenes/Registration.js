/**
 * Created by JohnWu on 2017-04-01.
 */
'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button
} from 'react-native';

import Input from '../components/Input.js';
import LoginBackground from '../components/LoginBackground.js';
import Title from '../components/Title.js';
import InputPassword from '../components/InputPassword.js';

class Registration extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <LoginBackground>
                <Title text="Registration"></Title>
                <Input text="Name"></Input>
                <Input text="Email"></Input>
                <Input text="Phone Number"></Input>
                <InputPassword text="Password"></InputPassword>
                <Input text="Date"></Input>
                <Button
                    onPress={() => {
                        this.props.navigator.pop();
                    }}
                    title="Submit"
                    color="#063e77"
                />
            </LoginBackground>
        );
    }

};

export default Registration;

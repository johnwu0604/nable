/**
 * Created by JohnWu on 2017-04-01.
 */
'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import Input from '../components/Input.js';
import LoginBackground from '../components/LoginBackground.js';
import Title from '../components/Title.js';

class AddPayment extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <LoginBackground>
                <Title text="Add a payment"></Title>
                <Input text="Name"></Input>
                <Input text="Phone Number"></Input>
                <Input text="Amount"></Input>
                <Input text="Description"></Input>
                <Input text="Date"></Input>
            </LoginBackground>
        );
    }

};


export default AddPayment;
/**
 * nable.js
 *
 * main app file
 *
 * @jwu
 */

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import Payments from './scenes/Payments.js';

export default class nable extends Component {

    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._configureScene = this._configureScene.bind(this);
    }


    _renderScene(route, navigator) {
        switch (route.name) {
            case 'Payments':
                return ( <Payments
                    {...route}
                    navigator={navigator} />);
            default:
                return;
        }
    }

    _configureScene(route) {
        switch (route.name) {
            default:
                return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'Payments' }}
                configureScene={this._configureScene}
                renderScene={this._renderScene} />
        );
    }
}
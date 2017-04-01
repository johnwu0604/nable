/**
 * Created by JohnWu on 2017-04-01.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Button
} from 'react-native';

import Dimensions from 'Dimensions';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

class LoginButton extends Component {

    render() {
        return (
            <Button
                onPress={onButtonPress}
                title="Login"
                color="#063e77"
            />
        )
    }
}

const onButtonPress = () => {
    console.log( "button pressed" );
};

export default LoginButton;

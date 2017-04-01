/**
 * Created by JohnWu on 2017-04-01.
 */
/**
 * Created by JohnWu on 2017-04-01.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Button
} from 'react-native';

import Dimensions from 'Dimensions';

class AddPaymentButton extends Component {

    render() {
        return (
            <Button
                onPress={onButtonPress}
                title="Submit"
                color="#063e77"
            />
        )
    }
}

const onButtonPress = () => {
    console.log( "button pressed" );
};

export default AddPaymentButton;

/**
 * Created by JohnWu on 2017-04-01.
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

class InputRegistrationPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: this.props.text
        };
    }

    render() {
        return (
            <View style={styles.box} >
                <TextInput
                    placeholder={this.state.label}
                    secureTextEntry={true}
                    style={{height: 40, borderColor: 'gray', borderWidth: 0}}
                    onChangeText={(text) => this.props.updateRegistrationPassword({text})}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: '#063e77',
        borderWidth: 1,
        borderRadius: 10,
        height: windowHeight/12,
        marginTop: 10,
        marginLeft: windowWidth/12,
        marginRight: windowWidth/12,
    }
});

export default InputRegistrationPassword;
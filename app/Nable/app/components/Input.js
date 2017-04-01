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

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
    }

    render() {
        return (
            <View style={styles.box} >
                <TextInput style={styles.input}
                    editable = {true}
                    maxLength = {40}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        height: windowHeight/12,
        marginTop: 10,
        marginLeft: windowWidth/12,
        marginRight: windowWidth/12,
    },
    input: {
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        marginTop: windowHeight/25,
        marginBottom: windowHeight/25,
        fontSize: windowHeight/30
    }
});

export default Input;
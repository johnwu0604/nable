/**
 * Created by JohnWu on 2017-04-01.
 */
/**
 * Created by JohnWu on 2017-04-01.
 */
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

class InputUsername extends Component {

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
                    style={{height: 40, borderColor: 'gray', borderWidth: 0}}
                    onChangeText={(text) => this.props.updateUsername({text})}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(6, 62, 119, 0.5)',
        borderWidth: 1,
        borderRadius: 10,
        height: windowHeight/12,
        marginTop: 10,
        marginLeft: windowWidth/12,
        marginRight: windowWidth/12,
    }
});



export default InputUsername;
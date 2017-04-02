/**
 * Created by JohnWu on 2017-04-01.
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Alert,
    Button
} from 'react-native';

import Dimensions from 'Dimensions';

var windowWidth = Dimensions.get('window').width;

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phone: this.props.phone,
            description: this.props.description,
            price: this.props.price,
            date: this.props.date
        };
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.name}>{this.state.name}</Text>

                    <View style={{flexDirection: 'row', width: windowWidth, marginLeft: 12}}>
                        <Text style={styles.date}>{this.state.date}</Text>
                        <Text style={styles.description}>{this.state.description}</Text>
                        <Text style={styles.price}>{"$ "+ this.state.price}</Text>

                    </View>
                    <View style={{position: 'absolute', right: 4+windowWidth*0.025}}>
                        <Button
                            onPress={() =>
                                Alert.alert(this.state.description + " - $" + this.state.price,
                                    "Are you sure you want to delete this entry?",
                                    [
                                        {text: 'Delete', onPress: () => console.log('Cancel Pressed!')}, //replace with the actual function
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')}
                                    ]
                                )

                            }
                            title="Delete"
                            color="#063e77"
                        />
                    </View>
                    <View style={styles.separator}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth*0.95,
        flexDirection: 'column',
        backgroundColor: "rgba(242, 244, 254, 0.2)",
        borderColor: null,
        borderRadius: 10,
        padding: 4,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: windowWidth*0.025,

    },
    name: {
        color: '#063e77',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 12,
        flexDirection: 'row',
    },
    phone:{
        color: '#063e77',
        fontSize: 14,
        fontStyle: 'italic',
        marginLeft: 6,
    },
    date: {
        color: '#063e77',
        fontSize: 14,
    },
    description:{
        color: '#063e77',
        position: 'absolute',
        left: windowWidth/4,

    },
    price: {
        color: '#063e77',
        position: 'absolute',
        right: windowWidth/7 + 65,
        alignItems:'flex-end',
    },

    separator: {
        flex: 1,
        height: 4,
        backgroundColor: null,
    },

});



export default List;
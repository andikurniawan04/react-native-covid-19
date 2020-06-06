import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = props => {
     return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.bgColor}]}>
            <Text style={[styles.title, {color: props.color}]}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '35%',
        height: '65%',
        marginLeft: '10%',
        marginVertical: '2.5%',
        borderRadius: 200
    },
    title: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'HelveticaNeue',
        fontSize: 18
    }
});

export default Button;
import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const SkipButton = props => {
     return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Text style={styles.title}>Skip</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 7,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default SkipButton;
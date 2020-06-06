import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Icons = props => {
     return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.bgColor}]}>
            <View style={styles.iconWrapper}>
                <Icon name={props.name} size={24} color={props.color} />
            </View>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '45%',
        height: '92%',
        borderRadius: 24,
        marginVertical: '2%',
        marginRight: '5%',
    },
    iconWrapper: {
        width: '35%',
        height: '40%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginLeft: '10%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginLeft: '10%',
        marginVertical: '10%',
        fontSize: 20,
        fontFamily: 'HelveticaNeue'
    }
});

export default Icons;
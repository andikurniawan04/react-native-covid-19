import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const IconWrapper = props => {
    return (
        <View opacity={props.opacity} style={styles.iconWrapper}>
            <Icon name={props.icon} size={28} />
            <Text style={styles.title}>{props.children}</Text>
        </View>
    )
}

const Footer = () => {
     return (
        <View style={styles.container}>
            <IconWrapper icon="home">Home</IconWrapper>
            <IconWrapper opacity={0.5} icon="bar-chart">Reports</IconWrapper>
            <IconWrapper opacity={0.5} icon="heart">Health</IconWrapper>
            <IconWrapper opacity={0.5} icon="phone-call">Emergency</IconWrapper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        height: '8%',
        position: 'absolute',
        bottom: 0,
        borderRightWidth: 24,
        borderColor: '#FFF'
    },
    iconWrapper: {
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue'
    }
});

export default Footer;
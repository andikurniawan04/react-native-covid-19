import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Header} from 'react-native-elements';

const Headers = () => {
     return (
        <Header 
            containerStyle={styles.headerContainer}
            leftComponent={<Image source={require('../../assets/icons/bar.png')} />}
            centerComponent={{text: 'COVID-19', style:{...styles.headerTitle}}}
            rightComponent={<Image source={require('../../assets/icons/search.png')} style={styles.headerRight} />}
        />
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#FFF',
        borderBottomRightRadius: 100,
        height: '10%',
    },
    headerTitle: {
        fontFamily: 'HelveticaNeue',
        color: '#000',
        fontSize: 20,
    },
    headerRight: {
        width: 24,
        height: 24,
        marginHorizontal: 10
    }
});

export default Headers;
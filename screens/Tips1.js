import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import NextButton from '../components/Tips/NextButton';
import {DotBold, DotLight} from '../components/Tips/DotSlider';

const Tips1 = props => {
     return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/img/wash_hand.png')} style={styles.image} resizeMode="stretch" 
                />
            </View>
            <Text style={styles.textTitle}>Wash Your Hands</Text>
            <Text style={styles.textBody}>Clean your hands often. Use soap and water, or an alchol-based hand rub</Text>
            <NextButton onClick={() => props.navigation.navigate("Tips2")}>Next Step</NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotBold />
                <DotLight />
                <DotLight />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    imageContainer: {
        width: '50%',
        height: '35%',
        marginVertical: '5%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textTitle: {
        fontSize: 36,
        fontFamily: 'HelveticaNeue-Bold'
    },
    textBody: {
        width: '75%',
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        marginVertical: '5%',
        textAlign: 'center'
    }
});

export default Tips1;
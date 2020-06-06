import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import NextButton from '../components/Tips/NextButton';
import {DotBold, DotLight} from '../components/Tips/DotSlider';

const Tips2 = props => {
     return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/img/wear_mask.png')} style={styles.image} resizeMode="stretch" 
                />
            </View>
            <Text style={styles.textTitle}>Wear Mask</Text>
            <Text style={styles.textBody}>Cover mouth and nose with mask & no gaps between your face and the mask</Text>
            <NextButton onClick={() => props.navigation.navigate("Tips3")}>Next Step</NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotLight />
                <DotBold />
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

export default Tips2;
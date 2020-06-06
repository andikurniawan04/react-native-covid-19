import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Headers from '../components/Home/Headers';
import Button from '../components/Home/Button';
import Icons from '../components/Home/Icons';
import Footer from '../components/Home/Footer';

const Home = props => {
     return (
        <View style={styles.container}>
            <Headers />
            <View style={styles.body}>
                <Text style={styles.textBody}>Emergency</Text>
                <Text style={[styles.textBody, {fontSize: 22}]}>Have you infected COVID-19</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bgColor="#F5AD47" color="#FFF">Call Now</Button>
                    <Button bgColor="#FFF">Find Doctor</Button>
                </View>
            </View>
            <Text style={styles.textDoctor}>Doctor Suggestions</Text>
            <View style={styles.iconContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icons bgColor="#E2E2E2" name="users" color="#F5AD47">People{"\n"}Awarness</Icons>
                    <Icons bgColor="#D3EAF9" name="dumbbell" color="#47AFF5">Exersize{"\n"}Suggestion</Icons>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icons bgColor="#D5CFFF" name="utensils" color="#474EF5">Food{"\n"}Suggestion</Icons>
                    <Icons bgColor="#F9C8E7" name="pills" color="#FF6FC8">Medicine{"\n"}Suggestion</Icons>
                </View>
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderLeftColor: '#FFF',
        borderLeftWidth: 24,
        backgroundColor: '#FFF',
    },
    body: {
        width: '100%',
        height: '20%',
        backgroundColor: '#FFF0D9',
        borderWidth: 5,
        borderColor: '#FFF0D9',
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
    },
    textBody: {
        marginHorizontal: '10%',
        marginVertical: '2.5%',
        fontFamily: 'HelveticaNeue',
        color: '#0F0C08',
        fontSize: 20
    },
    textDoctor: {
        fontSize: 20,
        marginVertical: '8%',
        fontFamily: 'HelveticaNeue'
    },
    iconContainer: {
        width: '100%',
        height: '45%'
    }
});

export default Home;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Tips1 from './screens/Tips1';
import Tips2 from './screens/Tips2';
import Tips3 from './screens/Tips3';
import Home from './screens/Home';
import SkipButton from './components/Tips/SkipButton';

const Stack = createStackNavigator();

const Name = () => {
     return (
       <NavigationContainer>
           <Stack.Navigator
                initialRouteName="Tips1"
                screenOptions={{
                    ...TransitionPresets.SlideFromRightIOS
                }}
                headerMode="float"
                animation="fade"
            >
            <Stack.Screen 
                name="Tips1"
                component={Tips1}
                options= {({navigation}) => ({
                    title: 'Prevention Tips',
                    headerStyle: {backgroundColor: '#FCF6EE', elevation: 0},
                    headerRight: () => (
                        <SkipButton onClick={() => navigation.navigate('Home')} />
                    )
                })}
            />
            <Stack.Screen 
                name="Tips2"
                component={Tips2}
                options= {({navigation}) => ({
                    title: 'Prevention Tips',
                    headerStyle: {backgroundColor: '#FCF6EE', elevation: 0},
                    headerRight: () => (
                        <SkipButton onClick={() => navigation.navigate('Home')} />
                    )
                })}
            />
            <Stack.Screen 
                name="Tips3"
                component={Tips3}
                options= {({navigation}) => ({
                    title: 'Prevention Tips',
                    headerStyle: {backgroundColor: '#FCF6EE', elevation: 0},
                    headerRight: () => (
                        <SkipButton onClick={() => navigation.navigate('Home')} />
                    )
                })}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />

           </Stack.Navigator>
       </NavigationContainer>
    );
};

export default Name;
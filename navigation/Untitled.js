import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Sizak from './Sizak';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FindMembersScreen from './FindMembersScreen';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';

import ModalScreen from './ModalScreen';

// const MainNavigator = createStackNavigator(
//     {
//         Home: {screen: HomeScreen},
//         Details: {screen: DetailScreen},
//     }, 
//     {
//         initialRouteName:'Home',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: 'black',
//             },
//             headerTintColor: 'white',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     }
// );

const ContentTabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
    News: { screen: NewsScreen },
    Settings: { screen: SettingsScreen },
}, 
{
    tabBarOptions: {
        showIcon: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 16,
        },
        style: {
            alignItems:'center',
            backgroundColor:'yellow',
        },
    },
});

const LoginNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Join: { screen: RegisterScreen },
    Find: { screen: FindMembersScreen }
}, 
{
    initialRouteName: 'Login',
    headerMode: 'none'
});

// stack -> switch
const RootSwitchNavigator = createSwitchNavigator({
    RootStart: { 
        screen: Sizak 
    },
    RootLogin: {
        screen: LoginNavigator,
    },
    RootContent: {
        screen: ContentTabNavigator,
    },
    RootMyModal: {
        screen: ModalScreen,
    }
},
{
    initRouteName:'RootStart',
    headerMode: 'none',
});

const App = createAppContainer(RootSwitchNavigator);

export default App;
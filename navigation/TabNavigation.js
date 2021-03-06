import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import MoviesScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import BG_COLOR from '../constants/Color'
import TabBarIcon from '../components/TabBarIcon'
import { Platform } from 'react-native'
import React from 'react';



const TabNavigation = createBottomTabNavigator(
{
    
        Movie: {
            screen:  MoviesScreen,
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                />
              )
            }
          },
          TV: {
            screen: TVScreen,
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                />
              )
            }
          },
          Search: {
            screen: SearchScreen,
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                />
              )
            }
          }
        },   
        {
        tabBarOptions: {
            showLabel : false,
            style: {
                backgroundColor : "black"
            }
        }
    }
);


export default createAppContainer(TabNavigation);



import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './HomeTab'
import SearchTab from './SearchTab'

import { TabNavigator } from 'react-navigation'


export const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab

    },


}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})



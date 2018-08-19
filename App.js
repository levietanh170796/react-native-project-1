import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {HomeStack} from "./login/HomeStack";
//import {InsertAcount} from "./login/component/API";

export default class App extends Component{

    render(){
        return(
            <HomeStack/>
        );
    }
}














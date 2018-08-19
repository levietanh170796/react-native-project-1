import React,{Component} from 'react'
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native'
import {StackNavigator,DrawerNavigator} from 'react-navigation'

export default class Main extends Component{
    render(){
        return(
            <HomeStack/>
        );
    }
}
class MainMenu extends Component{
    render(){
        return(
            <View style={styles.View}>
                <Text>Hello</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Menu')}}>
                    <Text>Hi</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
class Menu extends Component{
    render(){
        return(
            <View style={styles.View}>
                <Text>Hi</Text>
            </View>
        );
    }
}
const HomeStack=DrawerNavigator({
    MainMenu:{
        screen:MainMenu
    },
    Menu:{
        screen:Menu
    },
    initialRouteName:'MainMenu'
})
const styles=StyleSheet.create({
    button:{
        width:30,
        height:30,

    },
    View:{
        flex:1
    }
})
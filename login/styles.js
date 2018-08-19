import React,{Component} from 'react';
import {StyleSheet} from "react-native";

export const styles=StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#455a64'
    },
    logoView: {
        flex: 4,

        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    nameOfApp: {
        color: 'white',
        fontSize: 24,
        padding: 20
    },
    loginInputView: {
        flex: 4,
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: 350,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'white',
        marginVertical: 10
    },
    input2: {
        height: 50,
        width: 350,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'white',
        marginVertical: 15
    },
    registerView: {
        flex: 2,
        alignItems: 'center'
    },
    textregister: {
        color: 'white',
        fontSize: 15
    },
    loginText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    touchableopacity: {
        backgroundColor: '#1c313a',
        height: 40,
        width: 350,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10

    },
    touchableopacity2: {
        backgroundColor: '#1c313a',
        height: 40,
        width: 350,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10

    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    buttonLoginView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    Viewss: {
        flex: 1,

    },
    ss: {
        height:50,
        width: 50,
        resizeMode: 'contain'
    },
    dendo:{
        height:80,
        width:80,
        resizeMode:'center'
    },
    button: {
        backgroundColor: '#455a64',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 30,
        shadowOpacity: 0.35,
        height:100,
        width:100
    },
    row:{
        flex: 6,
        flexDirection:'row',
        justifyContent:'center',


        marginBottom:0,
        marginTop:0
    },

    headerMain:{
        flex:1,

    },
    touch:{
        padding:15,
        alignItems:'center',
    },
    Touchable:{
        height:50,
        width:350,
        backgroundColor:'#455a64'

    },
    TouchableView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})

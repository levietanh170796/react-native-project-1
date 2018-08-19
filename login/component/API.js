import React,{Component} from 'react';
import {View, Text} from 'react-native';
const insertAPI='https://facebook.github.io/react-native/movies.json';
async function InsertAcount(params){
    try {
        let response= await fetch(insertAPI, {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(params)

        });
        let responseJson= await response.json();
        return responseJson.result;
    }catch(error){
        console.error($error);
    }
}
export {InsertAcount};
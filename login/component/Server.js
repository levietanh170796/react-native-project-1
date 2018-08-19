import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Alert  } from 'react-native';
const getAPI='http://vnas.itrc.hanu.vn:2001/law/api/v1/users';
async function getalluser() {
    try{
        let response=await fetch(getAPI)
        let responseJson=await response.json()
        return response.data;
    }catch (error) {
       console.log('Error')

    }

}
export {getalluser};
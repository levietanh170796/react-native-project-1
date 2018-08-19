import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Alert  } from 'react-native';
import {getalluser} from "./Server";

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            account: []

        }
    }

    componentDidMount(){
        getalluser()
            .then((response) => {

                this.setState({
                    isLoading: false,
                    account: response
                });

            }) .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>


                <FlatList
                    data={this.state.account}
                    renderItem={({item}) => <Text>{item.Email}, {item.Password}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

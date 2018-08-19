import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export  default class changePass extends Component{
    changePassword(){
        Alert.alert(
            'Alert Title',
            'Đổi mật khẩu thành công',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {this.props.navigation.navigate('personalInformation')}},
            ],
            { cancelable: false }
        )
    }


    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1.75,flexDirection:'row',backgroundColor:'#EF4444'}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.openDrawer()}>
                            <View style={{flex :1,padding:10}}>
                                <Image source={(require('./image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',padding:10}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={()=>{this.props.navigation.navigate('MainMenu')}}>
                            <View style={{flex:1, padding:10 }}>
                                <Image source={require('./image/Back.png')} style={{height:30,width:30}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:2,padding:10,backgroundColor:'#455a64',justifyContent:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đổi mật khẩu</Text>
                </View>
                <View style={{flex:17.6, alignItems:'center', backgroundColor:'#455a64'}}>

                    <TextInput placeholder={'Nhập mật khẩu cũ'} secureTextEntry={true} underlineColorAndroid=
                        {'transparent'} style={styles.input} />
                    <TextInput placeholder={'Nhập mật khẩu mới'} secureTextEntry={true} underlineColorAndroid=
                        {'transparent'} style={styles.input} />
                    <TextInput placeholder={'Nhập lại mật khẩu mới'} secureTextEntry={true} underlineColorAndroid=
                        {'transparent'} style={styles.input} />
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>{this.changePassword()}}>
                        <View style={styles.buttonLoginView}>
                            <Text style={styles.buttonText}>Xác nhận</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
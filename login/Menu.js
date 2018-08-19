import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export  default class Menu extends Component{
    static navigationOptions= ({navigation}) =>({
        title: 'Side Menu',
    });

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <View style={{flex:4}}>
                    <Image source={require('./image/ss.jpg')} style={{height:190,width:300}}/>
                </View>
                <View style={{flex:1, justifyContent:'center'}} >
                    <TouchableOpacity
                        onPress={() => navigate('MainMenu')}
                        style={{height:50,width:250}}>
                        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('./image/Home.jpg')} style={{height:40,width:40,marginTop:20}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{color:'black',marginTop:20}}>Trang chủ</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigate('personalInformation')}
                        style={{height:40,width:250}}>
                        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('./image/Trangcanhan.png')} style={{height:30,width:30,marginTop:20}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{color:'black',marginTop:20}}>Thông tin cá nhân</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigate('changePass')}
                        style={{height:40,width:250}}>
                        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('./image/changePass.png')} style={{height:30,width:30,marginTop:20}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{color:'black',marginTop:20}}>Đổi mật khẩu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigate('Login')}
                        style={{height:40,width:250}}>
                        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('./image/Logout.png')} style={{height:30,width:30,marginTop:20}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{color:'black',marginTop:20}}>Đăng xuất</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:6}}>

                </View>
            </View>
        );
    }
}
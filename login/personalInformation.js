import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export default class personalInformation extends Component{

    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{flex:1.7,justifyContent:'center',flexDirection:'row',backgroundColor:'#EF4444'}}>
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
                <View style={{flex:17.6}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16, color:'black'}}>
                                Họ và tên:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',padding:5}}>
                            <Text style={{fontSize:16}}>Nguyễn Chí Thanh</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16,color:'black'}}>
                                Email:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',padding:5}}>
                            <Text style={{fontSize:16}}>3anhthanh1997@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16,color:'black'}}>
                                Số điện thoại:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',padding:5}}>
                            <Text style={{fontSize:16}}>0988950215</Text>
                        </View>
                    </View>

                    <View style={{flex:6}}>

                    </View>
                </View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>{this.props.navigation.navigate('changePersonalInformation')}}>
                        <View style={styles.buttonLoginView}>
                            <Text style={styles.buttonText}>Thay đổi thông tin cá nhân</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
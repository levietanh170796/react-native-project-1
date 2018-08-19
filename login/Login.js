import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export  default class Login extends Component{
    Login(){
        Alert.alert(
            'Alert Title',
            'Đăng nhập thành công',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {this.props.navigation.navigate('MainMenu')}},
            ],
            { cancelable: false }
        )
    }
    render(){
        return(
            <View style={styles.background}>
                <View style={styles.logoView}>
                    <Image source={require('./image/Logo.jpg')} style={ styles.logo}/>
                    <Text style={styles.nameOfApp}>Luật giao thông đường bộ</Text>
                </View>
                <View style={styles.loginInputView}>
                    <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
                    <TextInput placeholder={'Tên đăng nhập'} underlineColorAndroid={'transparent'} style={styles.input}/>
                    <TextInput placeholder={'Mật khẩu'} secureTextEntry={true} underlineColorAndroid={'transparent'} style={styles.input} />
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>{this.Login()}}>
                        <View style={styles.buttonLoginView}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.textregister}  onPress={()=>{this.props.navigation.navigate('Register')}}>Đăng kí tài khoản</Text>
                </View>
            </View>
        );
    }
}

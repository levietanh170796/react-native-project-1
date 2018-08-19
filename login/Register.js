import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            newUsername:'',
            newPassword:'',
            newDisplayName:'',
            newEmail:'',
            newPhoneNumber:'',
            newReplyPassword:''
        }
    }

    Register(){
        if (this.state.newUsername.length == '' || this.state.newPassword.length == '' || this.state.newDisplayName== ''
            || this.state.newEmail==''|| this.state.newPhoneNumber=='') {
            alert("Bạn phải điền đầy đủ thông tin!");
            return;
        }
        const newAccount = {
            Username:this.state.newUsername,
            Password:this.state.newPassword,
            DislayName: this.state.newDisplayName,
            PhoneNumber:this.state.newPhoneNumber,
            Email:this.state.newEmail,
        };
        InsertAcount(newAccount).then((result) => {
            if (result === 'ok') {
                Alert.alert(

                    'Đăng kí thành công',
                    [

                        {text: 'OK', onPress: () => {this.props.navigation.navigate('Login')}},
                    ],
                    { cancelable: false }
                )
            }
            else {
                Alert.alert(

                    'Đã xảy ra lỗi',
                    [

                        {text: 'OK', onPress: () => {this.props.navigation.navigate('Login')}},
                    ],
                    { cancelable: false }
                )
            }
        });

    }
    setUser(value){
        this.setState({
            newUsername:value
        })
    }
    setPass(value){
        this.setState({
            newPassword:value
        })
    }
    setReplyPass(value){
        this.setState({
            newReplyPassword:value
        })
    }
    setDisplayName(value){
        this.setState({
            newDisplayName:value
        })
    }
    setEmail(value){
        this.setState({
            newEmail:value
        })
    }
    setPhoneNumber(value){
        this.setState({
            newPhoneNumber:value
        })
    }

    render(){
        return(
            <View style={styles.background}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',padding:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đăng kí tài khoản</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                        <TouchableOpacity style={{height:30,width:100}} onPress={() => {this.props.navigation.navigate('Login')}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:16,color:'white'}}>Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:7,alignItems:'center'}}>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Tên đăng nhập'}
                               onChangeText={(value)=>{this.setUser(value)}}/>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Mật khẩu'}
                               onChangeText={(value)=>{this.setPass(value)}} secureTextEntry={true}/>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Nhập lại mật khẩu'}
                               secureTextEntry={true} onChangeText={(value)=>{this.setReplyPass(value)}}/>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Họ và tên'}
                               onChangeText={(value)=>{this.setDisplayName(value)}}/>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Email'}
                               onChangeText={(value)=>{this.setEmail(value)}}/>
                    <TextInput style={styles.input2} underlineColorAndroid={'transparent'} placeholder={'Số điện thoại'}
                               onChangeText={(value)=>{this.setPhoneNumber(value)}}/>
                    <TouchableOpacity style={styles.touchableopacity2} onPress={()=>{this.Register()}}>
                        <View style={styles.buttonLoginView}>
                            <Text style={styles.buttonText}>Đăng kí</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

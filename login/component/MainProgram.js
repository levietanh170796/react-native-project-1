import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
//import {InsertAcount} from "./login/component/API";

export default class Main extends Component{

    render(){
        return(
            <HomeStack/>
        );
    }
}
class Login extends Component{
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
                    <Image source={require('./login/image/Logo.jpg')} style={ styles.logo}/>
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
class Register extends Component{
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
class MainMenu extends Component{

    render(){
        return(
            <View style={styles.Viewss}>
                <View style={{flex:1,flexDirection:'row', backgroundColor:'#EF4444'}}>
                    <View style={{flex:3, justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <View style={{flex :1, padding:10}}>
                                <Image source={(require('./login/image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.row}>
                    <View style={styles.touch}>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Track')}}>
                            <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                        </TouchableOpacity>
                        <Text>Ô tô tải</Text>
                    </View>
                    <View style={styles.touch}>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Car')}}>
                            <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                        </TouchableOpacity>
                        <Text>Ô tô tải</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.touch}>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Motorbike')}}>
                            <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                        </TouchableOpacity>
                        <Text>Xe gắn máy</Text>
                    </View>
                    <View style={styles.touch}>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Bike')}} >
                            <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                        </TouchableOpacity>
                        <Text>Xe đạp</Text>
                    </View>
                </View><View style={styles.row}>
                <View style={styles.touch}>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Person')}}>
                        <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                    </TouchableOpacity>
                    <Text>Người đi bộ</Text>
                </View>
                <View style={styles.touch}>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('RedLight')}}>
                        <Image source={require('./login/image/Dendo.jpg')} style={styles.dendo}/>
                    </TouchableOpacity>
                    <Text>Đèn đỏ</Text>
                </View>
            </View>

            </View>

        );
    }
}
class Track extends Component{
    render(){
        return(

            <View style={styles.headerMain}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:3, justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <View style={{flex :1, padding:10}}>
                                <Image source={(require('./login/image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40, width:100, backgroundColor:'#455a64',borderRadius: 20,

                            shadowColor: '#303838',
                            shadowOffset: { width: 0, height: 5 },
                            shadowRadius: 30,
                            shadowOpacity: 0.35,}} onPress={()=>{this.props.navigation.navigate('Login')}}>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontSize:15, color:'white'}}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.TouchableView}>
                    <TouchableOpacity style={styles.Touchable} >
                        <View style={styles.TouchableView}>
                            <Text>Den do</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
class Car extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Hello</Text>
            </View>
        );
    }
}
class Motorbike extends Component{
    render(){
        return(
            <View style={styles.headerMain}>
                <Text>Hello</Text>
            </View>
        );
    }
}
class Bike extends Component{
    render(){
        return(
            <View style={styles.headerMain}>
                <Text>Hello</Text>
            </View>
        );
    }
}
class Person extends Component{
    render(){
        return(
            <View style={styles.headerMain}>
                <Text>Hello</Text>
            </View>
        );
    }
}
class RedLight extends Component{
    render(){
        return(
            <View style={styles.headerMain}>
                <Text>Hello</Text>
            </View>
        );
    }
}
class changePersonalInformation extends Component{
    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{flex:1,justifyContent:'center',flexDirection:'row',backgroundColor:'#EF4444'}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <View style={{flex :1,padding:10}}>
                                <Image source={(require('./login/image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',padding:10}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={()=>{this.props.navigation.navigate('personalInformation')}}>
                            <View style={{flex:1, padding:10 }}>
                                <Image source={require('./login/image/Back.png')} style={{height:30,width:30}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:8}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
                                Họ và tên:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',alignItems:'center'}}>
                            <TextInput   underlineColorAndroid=
                                             {'transparent'} style={{height:40,width:250,borderTopColor:'black',borderTopWidth:1,
                                borderBottomColor:'black',borderBottomWidth:1,borderLeftColor:'black',borderLeftWidth:1,
                                borderRightColor:'black',borderRightWidth:1,padding:10,fontSize:16}} />
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
                                Email:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',alignItems:'center'}}>
                            <TextInput   underlineColorAndroid=
                                             {'transparent'} style={{height:40,width:250,borderTopColor:'black',borderTopWidth:1,
                                borderBottomColor:'black',borderBottomWidth:1,borderLeftColor:'black',borderLeftWidth:1,
                                borderRightColor:'black',borderRightWidth:1,padding:10,fontSize:16}} />
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
                                Số điện thoại:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',alignItems:'center'}}>
                            <TextInput   underlineColorAndroid=
                                             {'transparent'} style={{height:40,width:250,borderTopColor:'black',borderTopWidth:1,
                                borderBottomColor:'black',borderBottomWidth:1,borderLeftColor:'black',borderLeftWidth:1,
                                borderRightColor:'black',borderRightWidth:1,padding:10,fontSize:16}} />
                        </View>
                    </View>
                    <View style={{flex:6}}>

                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.touchableopacity} >
                        <View style={styles.buttonLoginView}>
                            <Text style={styles.buttonText}>Xác nhận</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
class personalInformation extends Component{

    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{flex:1,justifyContent:'center',flexDirection:'row',backgroundColor:'#EF4444'}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <View style={{flex :1,padding:10}}>
                                <Image source={(require('./login/image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',padding:10}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={()=>{this.props.navigation.navigate('MainMenu')}}>
                            <View style={{flex:1, padding:10 }}>
                                <Image source={require('./login/image/Back.png')} style={{height:30,width:30}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:8}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
                                Họ và tên:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',padding:5}}>
                            <Text style={{fontSize:16}}>Nguyễn Chí Thanh</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
                                Email:
                            </Text>
                        </View>
                        <View style={{flex:6, justifyContent:'center',padding:5}}>
                            <Text style={{fontSize:16}}>3anhthanh1997@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3,justifyContent:'center',padding:10}}>
                            <Text style={{fontSize:16}}>
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
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
class changePass extends Component{
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
                <View style={{flex:1,flexDirection:'row',backgroundColor:'#EF4444'}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <View style={{flex :1,padding:10}}>
                                <Image source={(require('./login/image/menuicon.png'))} style={{height:30,width:30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',padding:10}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={()=>{this.props.navigation.navigate('MainMenu')}}>
                            <View style={{flex:1, padding:10 }}>
                                <Image source={require('./login/image/Back.png')} style={{height:30,width:30}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,padding:10,backgroundColor:'#455a64',justifyContent:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Đổi mật khẩu</Text>
                </View>
                <View style={{flex:8, alignItems:'center', backgroundColor:'#455a64'}}>

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
class Menu extends Component{
    static navigationOptions= ({navigation}) =>({
        title: 'Side Menu',
    });

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <View style={{flex:4, backgroundColor:'red'}}>
                    <Image source={require('./login/image/ss.jpg')} style={{height:200,width:300}}/>
                </View>
                <View style={{flex:1, justifyContent:'center'}} >
                    <TouchableOpacity
                        onPress={() => navigate('MainMenu')}
                        style={{height:50,width:250}}>
                        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('./login/image/Home.jpg')} style={{height:40,width:40,}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text>Trang chủ</Text>
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
                                <Image source={require('./login/image/Trangcanhan.png')} style={{height:30,width:30,}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text>Thông tin cá nhân</Text>
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
                                <Image source={require('./login/image/changePass.png')} style={{height:30,width:30,}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text>Đổi mật khẩu</Text>
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
                                <Image source={require('./login/image/Logout.png')} style={{height:30,width:30,}}/>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text>Đăng xuất</Text>
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
const HomeStack=DrawerNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Đăng kí',
                headerStyle: {
                    backgroundColor: '#455a64'
                }

            }
        },
        MainMenu: {
            screen: MainMenu,
            navigationOptions: {
                header: null
            }

        },
        Track: {
            screen: Track,
            navigationOptions: {
                header: null,
            }
        },
        Car: {
            screen: Car,
            navigationOptions: {
                title: 'Ô tô con'
            }
        },
        Motorbike: {
            screen: Motorbike,
            navigationOptions: {
                title: 'Xe may'
            }
        },
        Bike: {
            screen: Bike,
            navigationOptions: {
                title: 'Xe dap'
            }
        },
        Person: {
            screen: Person,
            navigationOptions: {
                title: 'Nguoi di bo'
            }
        },
        RedLight: {
            screen: RedLight,
            navigationOptions: {
                title: 'Den do'
            }
        },
        personalInformation: {
            screen: personalInformation,
            navigationOptions: {

                title: 'Thông tin tài khoản',
                headerStyle: {
                    backgroundColor: '#455a64'
                }

            }
        },
        changePersonalInformation: {
            screen: changePersonalInformation,
            navigationOptions: {


                headerStyle: {
                    header:null,
                }

            }
        },
        changePass: {
            screen: changePass,
            navigationOptions: {
                header: null,
                title: 'Đổi mật khẩu'
            }

        },
    },
    {

        contentComponent: props => <Menu {...props} />

    });


const styles=StyleSheet.create({
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
        fontStyle: 'bold'
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
        flex: 3,
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
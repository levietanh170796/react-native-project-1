import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator,TabNavigator} from 'react-navigation';
import Menu from "./Menu";
import MainMenu from "./MainMenu";
import Register from "./Register";
import Login from "./Login";
import changePass from "./changePass";
import changePersonalInformation from "./changePersonalInformation";
import personalInformation from "./personalInformation";
import Track from './Track';
import Motorbike from './Motorbike';
import Bike from './Bike';
import Person from './Person';
import RedLight from './RedLight';
import Car from './Car';
export const HomeStack=DrawerNavigator({
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

import React,{Component} from 'react';
import{TextInput,Text,View, Image,StyleSheet,TouchableOpacity, Alert, FlatList,TouchableHighlight} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import {styles} from './styles';
export default class Track extends Component{
    render(){
        return(

            <View style={styles.headerMain}>
                <View style={{flex:1.7,flexDirection:'row', backgroundColor:'#EF4444'}}>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <TouchableOpacity style={{height:40,width:40}} onPress={() => this.props.navigation.openDrawer()}>
                            <View style={{flex :1.1, padding:10}}>
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
                <View style={{flex:1.6,backgroundColor:'#455a64',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>
                            Tìm kiếm:
                        </Text>
                    </View>
                    <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                        <TextInput  underlineColorAndroid={'transparent'} style={{fontSize:13,
                            color: 'gray',height:40,width:300, backgroundColor: 'white',borderRadius:5}}/>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'black',padding:5}} onPress={()=>this.props.navigation.navigate('MainMenu')}>MainMenu</Text>
                    <Text style={{fontSize:13}}>></Text>
                    <Text style={{fontSize:17,color:'black',padding:5}}>Xe tải</Text>
                </View>
                <View style={{flex:17}}>
                    <View style={styles.row}>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Track')}}>
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Ô tô tải</Text>
                        </View>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Car')}}>
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Ô tô con</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Motorbike')}}>
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Xe gắn máy</Text>
                        </View>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Bike')}} >
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Xe đạp</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Person')}}>
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Người đi bộ</Text>
                        </View>
                        <View style={styles.touch}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('RedLight')}}>
                                <Image source={require('./image/Dendo.jpg')} style={styles.dendo}/>
                            </TouchableOpacity>
                            <Text style={{color:'black'}}>Đèn đỏ</Text>
                        </View>
                    </View>

                </View>
            </View>

        );
    }
}
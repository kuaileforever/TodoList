/**
 * login_register
 */

import {View,Text,StyleSheet,Image,TouchableOpacity,} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {size,pixel} from '../util/util'

export default class Login_Register extends Component {
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Image/>
                <Text style={[styles.logo_text]}>To Do List</Text>
                <TouchableOpacity style={[styles.login_register]} onPress={()=>navigate('Login')}>
                    <Text style={styles.Text}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.login_register]} onPress={()=>navigate('Register_')}>
                    <Text style={styles.Text}>注册</Text>
                </TouchableOpacity>
                <Text style={[styles.forget]} onPress={()=>navigate('Forget')}>忘记密码？</Text>
                <View style={styles.otherLogin_contanier}>
                    <View style={styles.hr}></View>
                    <Text>其他登录方式</Text>
                    <View style={styles.hr}></View>
                </View>
                <View style={styles.otherLogin}>
                    <TouchableOpacity>
                        <Icon name="weixin" size={30} color="#3CB034"/>
                        <View style={styles.otherLogin_text}>
                            <Text>微信</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="qq" size={30} color="#0000FF"/>
                        <View style={styles.otherLogin_text}>
                            <Text>QQ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="weibo" size={30} color="#DA251C"/>
                        <View style={styles.otherLogin_text}>
                            <Text>微博</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    logo_text:{
        marginTop:size.width*0.4,
        fontSize:30,
        fontWeight:'500'
    },
    login_register:{
        width:size.width*0.65,
        height:size.height*0.05,
        borderWidth:1,
        borderColor:'#292929',
        borderRadius:5,
        alignItems:'center',
        marginTop:20,
        justifyContent:'center'
    },
    forget:{
        marginTop:10,
        width:size.width*0.65,
        textAlign:'right',
        color:'#00BFFF'
    },
    otherLogin_contanier:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:size.height*0.1
    },
    hr:{
        height:pixel*2,
        width:size.width*0.3,
        backgroundColor:'#0f0f0f',
    },
    otherLogin:{
        marginTop:size.height*0.05,
        width:size.width,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    otherLogin_text:{
        alignItems:'center'
    }
})


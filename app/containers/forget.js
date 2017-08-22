import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native'
import React,{Component} from 'react'
import _Button from '../components/_Button'

import Icon from 'react-native-vector-icons/FontAwesome'
import _Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import __Icon from 'react-native-vector-icons/Ionicons'
import _TextInput from '../components/_TextInput'
import {size} from '../util/util'

export default class Register_ extends Component {
    render(){
        const{navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Image/>
                <View style={styles.inputContainer}>
                    <Icon name="mobile-phone" size={25}/>
                    <_TextInput placeholder="绑定手机号码"/>
                </View>
                <TouchableOpacity style={styles.send}>
                    <Text style={styles.send_font}>发送验证码</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={25}/>
                    <_TextInput placeholder="请输入新密码"/>
                </View>
                <View style={styles.inputContainer}>
                    <__Icon name="md-lock" size={25}/>
                    <_TextInput placeholder="请确认新密码"/>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="send" size={20}/>
                    <_TextInput placeholder="请输入验证码"/>
                </View>
                <_Button text="确定" onPress={()=>navigate('Login')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:size.width*0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    send:{
        marginTop:10,
        marginLeft:size.width*0.55,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#40E0D0',
    },
    send_font:{
        color:'#40E0D0'
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})


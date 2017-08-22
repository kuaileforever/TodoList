import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import _Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import __Icon from 'react-native-vector-icons/Ionicons'
import {size} from '../util/util'

export default class Register_ extends Component {
    render(){
        const{navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Image/>
                <View style={styles.inputContainer}>
                    <Icon name="mobile-phone" size={25}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="绑定手机号码" ></TextInput>
                </View>
                <TouchableOpacity style={styles.send}>
                    <Text style={styles.send_font}>发送验证码</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={25}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="请输入新密码" ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <__Icon name="md-lock" size={25}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="请确定新密码" ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="send" size={20}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="请输入验证码" ></TextInput>
                </View>
                <TouchableOpacity style={styles.set} onPress={()=>navigate('Login')}>
                    <Text>确定</Text>
                </TouchableOpacity>
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
    },
    text_input:{
        width:size.width*0.65,
        height:size.height*0.06,
        borderWidth:1,
        borderRadius:12,
        paddingLeft:10,
        marginTop:10,
        marginLeft:15
    },
    paddingL_add:{
        paddingLeft:5
    },
    marginL_add:{
        marginLeft:21
    },
    set:{
        width:size.width*0.65,
        height:size.height*0.05,
        borderWidth:1,
        borderColor:'#292929',
        borderRadius:12,
        alignItems:'center',
        marginTop:size.height*0.08,
        justifyContent:'center',
        marginLeft:42
    }
})


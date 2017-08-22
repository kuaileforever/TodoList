import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {size,post} from '../util/util'

export default class Login extends Component {
    constructor(){
        super()
        this.username=''
        this.password=''
    }
    _login(){
        const formData = new FormData()
        formData.append('username',this.username)
        formData.append('password',this.password)
        post('http://192.168.1.233:8888/user/login',
            formData,
            ()=>{
                Alert.alert('success')
            },
            ()=>{
                Alert.alert('error')
            })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.icon_text}>
                    <Icon name="user" size={25} color="#2B2B2B"/>
                    <View style={styles.textView}>
                        <Text style={styles.font}>手机号码/邮箱地址</Text>
                    </View>
                </View>
                <TextInput underlineColorAndroid='transparent' style={styles.text_input} onChangeText={(text)=>this.username=text}></TextInput>
                <View style={styles.icon_text}>
                    <Icon name="lock" size={25} color="#2B2B2B"/>
                    <View style={styles.textView}>
                        <Text style={styles.font}>密码</Text>
                    </View>
                </View>
                <TextInput underlineColorAndroid='transparent' style={styles.text_input} secureTextEntry={true} onChange={(text)=>this.password=text}></TextInput>
                <TouchableOpacity style={styles.login} onPrss={this._login}>
                    <Text>登录</Text>
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
    icon_text:{
        flexDirection:'row',
        width:size.width*0.65,
        marginLeft:10,
        marginTop:20
    },
    text_input:{
        width:size.width*0.65,
        height:size.height*0.06,
        borderWidth:1,
        borderRadius:12,
        paddingLeft:10,
        marginTop:10
    },
    textView:{
        justifyContent:'center',
        marginLeft:10
    },
    font:{
        color:'#080808'
    },
    login:{
        width:size.width*0.65,
        height:size.height*0.05,
        borderWidth:1,
        borderColor:'#292929',
        borderRadius:12,
        alignItems:'center',
        marginTop:size.height*0.08,
        justifyContent:'center',
    },
})


import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import _Button from '../components/_Button'
import {size,post} from '../util/util'
import _TextInput from '../components/_TextInput'

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
        post('http://192.168.3.32:3000/login',
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
                <_TextInput onChangeText={(text)=>this.username=text}/>
                <View style={styles.icon_text}>
                    <Icon name="lock" size={25} color="#2B2B2B"/>
                    <View style={styles.textView}>
                        <Text style={styles.font}>密码</Text>
                    </View>
                </View>
                <_TextInput onChangeText={(text)=>this.password=text}/>
                <_Button text="登录" onPrss={this._login}/>
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
    textView:{
        justifyContent:'center',
        marginLeft:10
    },
    font:{
        color:'#080808'
    }
})


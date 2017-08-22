import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
// import _Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import __Icon from 'react-native-vector-icons/Ionicons'
import {size,post} from '../util/util'

export default class Register_ extends Component {
    constructor(){
        super()
        this.nick=''
        this.username=''
        this.password=''
        this.avatar='http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=30y30'
    }
    _create(){
        const formData = new FormData()
        formData.append('nick',this.nick)
        formData.append('username',this.username)
        formData.append('password',this.password)
        formData.append('avatar',this.avatar)
        post('http://192.168.1.233:8888/user/register',
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
                <Image/>
                <View style={styles.inputContainer}>
                    <Icon name="github-alt" size={25}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="昵称" onChangeText={(text)=>this.nick=text}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="mobile-phone" size={25}/>
                    <TextInput underlineColorAndroid="transparent" style={styles.text_input} placeholder="手机号码" onChangeText={(text)=>this.username=text}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={25} style={styles.paddingL_add}/>
                    <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={[styles.text_input,styles.marginL_add]} placeholder="请输入密码" onChangeText={
                        (text)=>this.password=text
                    }></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <__Icon name="md-lock" size={25} style={styles.paddingL_add}/>
                    <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={[styles.text_input,styles.marginL_add]} placeholder="请确认密码"></TextInput>
                </View>
                <TouchableOpacity style={styles.set} onPress={this._create.bind()}>
                    <Text>建立账号</Text>
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


import {View,StyleSheet,Image,Alert,Text,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import _Button from '../components/_Button'
// import _Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import __Icon from 'react-native-vector-icons/Ionicons'
import {size,post} from '../util/util'
import _TextInput from '../components/_TextInput'
import ImagePicker from 'react-native-image-picker'
import {ToastAndroid} from 'react-native'

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            nick:'',
            username:'',
            password:'',
            user_defined:false,
            imageUri:null,
        }
    }
    _create(){
        const params = this.state
        post('http://192.168.3.32:3000/register',
            params,
            ()=>{
            ToastAndroid.show('恭喜！注册成功',1)
        },
            ()=>{
            ToastAndroid.show('注册失败,请检测网络情况',1)
        })
    }

    cameraAction (){
        ImagePicker.showImagePicker({
            title:'请选择:',
            cancelButtonTitle:'取消',
            takePhotoButtonTitle:'拍照',
            chooseFromLibraryButtonTitle:'选择相册',
            maxWidth: 500,
            maxHeight: 500,
            quality:0.75,
            allowsEditing:true,
            noData:false,
            storageOptions: {
                skipBackup: true
            }
        },(response) =>{
            if (response.didCancel){
                return
            }
            else{
                let source = { uri: response.uri }
                this.setState({
                    user_defined:true,
                    imageUri: source
                });
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.cameraAction.bind(this)}>
                    {!this.state.user_defined ?
                        <Image source={require('../image/QQ_btn_highlighted.png')} style={styles.image}/>
                       :<Image source={this.state.imageUri} style={styles.image} resizeMode="cover" />
                    }
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Icon name="github-alt" size={25}/>
                    <_TextInput onChangeText={(text)=>this.setState({nick:text})} placeholder="昵称" />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="mobile-phone" size={25}/>
                    <_TextInput onChangeText={(text)=>this.setState({username:text})} placeholder="请输入手机号"/>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={25} style={styles.paddingL_add}/>
                    <_TextInput onChangeText={(text)=>this.setState({password:text})} placeholder="请输入密码" secureTextEntry={true}/>
                </View>
                <View style={styles.inputContainer}>
                    <__Icon name="md-lock" size={25} style={styles.paddingL_add}/>
                    <_TextInput  placeholder="请确认密码" secureTextEntry={true}/>
                </View>
                <_Button text="创建账号" onPress={this._create.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:size.width*0.08,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    paddingL_add:{
        paddingLeft:5
    },
    image:{
        width:60,
        height:60,
        borderWidth:2,
        borderRadius:30,
        borderColor:'#00C5CD'
    }

})


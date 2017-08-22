import {Text,StyleSheet,TextInput,View} from 'react-native'
import React,{Component,PropTypes} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {size,px2dp} from '../util/util'

export default class _TextInput extends Component {
    static propType = {
        placeholder: PropTypes.string,
        onChangeText:PropTypes.func,
        add:View.propTypes.style
    }
    render(){
        return(
            <TextInput underlineColorAndroid="transparent"  placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} style={[styles.text_input,this.props.add]} ></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    text_input:{
        width:size.width*0.65,
        height:size.height*0.06,
        borderWidth:px2dp(1),
        borderRadius:px2dp(12),
        paddingLeft:px2dp(10),
        marginTop:px2dp(10),
        marginLeft:px2dp(15)
    }
})


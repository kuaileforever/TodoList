import {StyleSheet,TextInput,View} from 'react-native'
import React,{Component,PropTypes} from 'react'
import {size,px3dp} from '../util/util'

export default class _TextInput extends Component {
    static propType = {
        placeholder: PropTypes.string,
        onChangeText:PropTypes.func,
        add:View.propTypes.style
    }
    render(){
        return(
            <TextInput
                underlineColorAndroid="transparent"
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                style={[styles.text_input,this.props.add]}
                secureTextEntry={this.props.secureTextEntry}
            >
            </TextInput>
        )
    }
}

const styles = StyleSheet.create({
    text_input:{
        width:size.width*0.65,
        height:size.height*0.06,
        borderWidth:px3dp(1),
        borderRadius:px3dp(12),
        paddingLeft:px3dp(10),
        marginTop:px3dp(10),
        marginLeft:px3dp(15)
    }
})


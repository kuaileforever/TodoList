import {Text,StyleSheet,TouchableOpacity,} from 'react-native'
import React,{Component,PropTypes} from 'react'
import {size,px3dp} from '../util/util'

export default class _Button extends Component {
    static propType = {
        text: PropTypes.string,
        onPress:PropTypes.func
    }
    render(){
        return(
            <TouchableOpacity style={[styles.button]} onPress={this.props.onPress}>
                <Text style={styles.Text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:size.width*0.65,
        height:px3dp(161),
        borderWidth:px3dp(1),
        borderColor:'#d7c4bb',
        backgroundColor:'#d7c4bb',
        borderRadius:px3dp(50),
        alignItems:'center',
        marginTop:px3dp(100),
        marginLeft:px3dp(30),
        justifyContent:'center'
    },
    text:{
        fontFamily:'方正兰亭超细黑简',
        fontSize:px3dp(48),
        color:'#1e1b19'
    }
})


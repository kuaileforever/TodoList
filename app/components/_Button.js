import {Text,StyleSheet,TouchableOpacity,} from 'react-native'
import React,{Component,PropTypes} from 'react'
import {size,px2dp} from '../util/util'

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
        height:size.height*0.05,
        borderWidth:px2dp(1),
        borderColor:'#292929',
        borderRadius:px2dp(5),
        alignItems:'center',
        marginTop:px2dp(20),
        marginLeft:px2dp(30),
        justifyContent:'center'
    }
})


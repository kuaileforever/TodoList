import {StackNavigator} from 'react-navigation'
import Login_Register from '../containers/login_register'
import Login from '../containers/login'
import Register from '../containers/register'
import Forget from '../containers/forget'
import {Home} from "./tabRouter"
import {navigationOptions_set} from '../components/_navigationOptions'

export const Route = StackNavigator({
    Login_Register:{
        screen:Login_Register,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:navigationOptions_set('登录')
    },
    Register:{
        screen:Register,
        navigationOptions:navigationOptions_set('注册')
    },
    Forget:{
        screen:Forget,
        navigationOptions:navigationOptions_set('忘记密码')
    },
    Home:{
        screen:Home,
    }
},{
    initialRouteName:'Home',
})

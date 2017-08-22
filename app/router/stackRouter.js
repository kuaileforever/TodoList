import {StackNavigator} from 'react-navigation'
import Login_Register from '../containers/login_register'
import Login from '../containers/login'
import Register_ from '../containers/register'
import Forget from '../containers/forget'
import {Home} from "./tabRouter"

export const Route = StackNavigator({
    Login_Register:{
        screen:Login_Register,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            headerTitle:'登录',
            headerTitleStyle:{
                alignSelf:'center',
                paddingRight:40
            },
            headerStyle:{
                backgroundColor:'#7A7A7A'
            }
        }
    },
    Register_:{
        screen:Register_,
        navigationOptions:{
            headerTitle:'注册',
            headerTitleStyle:{
                alignSelf:'center',
                paddingRight:40
            },
            headerStyle:{
                backgroundColor:'#7A7A7A'
            }
        }
    },
    Forget:{
        screen:Forget,
        navigationOptions:{
            headerTitle:'忘记密码',
            headerTitleStyle:{
                alignSelf:'center',
                paddingRight:40
            },
            headerStyle:{
                backgroundColor:'#7A7A7A'
            }
        }
    },
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:'任务',
            headerTitleStyle:{
                alignSelf:'center',
                paddingRight:40
            },
            headerStyle:{
                backgroundColor:'#7A7A7A'
            }
        }
    }
},{
    initialRouteName:'Home',
})

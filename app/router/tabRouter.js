import {TabNavigator,TabBarBottom} from 'react-navigation'
import React from 'react'
import Task from '../containers/task'
import Sign_in from '../containers/sign_in'
import Community from '../containers/community'
import Icon from 'react-native-vector-icons/FontAwesome'
export const Home = TabNavigator({
    Task:{
        screen:Task,
        navigationOptions:{
            title:'任务',
            tabBarIcon:()=>(
                <Icon name="edit" size={25}/>
            )
        }

    },
    Sign_in:{
        screen:Sign_in,
        navigationOptions:{
            title:'打卡',
            tabBarIcon:()=>(
                <Icon name="edit" size={25}/>
            )
        }

    },
    Community:{
        screen:Community,
        navigationOptions:{
            title:'社区',
            tabBarIcon:()=>(
                <Icon name="group" size={25}/>
            )
        }
    }
},{
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    lazy:true,
    // tabBarOptions:{
    //     activeTintColor:'red',
    //     activeBackgroundColor:'blue',
    //     inactiveTintColor:'yellow',
    //     inactiveBackgroundColor:'#987',
    //     showLabel:true,
    //     labelStyle:{
    //         fontSize:12
    //     }
    // }
})

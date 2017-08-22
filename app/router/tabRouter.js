import {TabNavigator} from 'react-navigation'
import React from 'react'
import Task from '../containers/task'
import Sign_in from '../containers/sign_in'
import Community from '../containers/community'
import Icon from 'react-native-vector-icons/FontAwesome'
export const Home = TabNavigator({
    Task:{
        screen:Task,
        navigationOptions:{
            tabBarLabel:'任务',
            tabBarIcon:()=>(
                <Icon name="tasks" size={25}/>
            )
        }
    },
    Sign_in:{
        screen:Sign_in,
        navigationOptions:{
            tabBarLabel:'打卡',
            tabBarIcon:()=>(
                <Icon name="edit" size={25}/>
            )
        }

    },
    Community:{
        screen:Community,
        navigationOptions:{
            tabBarLabel:'社区',
            tabBarIcon:()=>(
                <Icon name="group" size={25}/>
            )
        }
    }
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,

    }
})

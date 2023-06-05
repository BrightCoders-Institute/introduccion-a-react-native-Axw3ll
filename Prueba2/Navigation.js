import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens 
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator=createNativeStackNavigator();

function MyStack(){
    return(
     <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
    >
        <HomeStackNavigator.Screen
            name='HomeScreen'
            component={HomeScreen}
        />
        <HomeStackNavigator.Screen
            name='Stack'
            component={StackScreen}
            options={{
                // headerShown:false
            }}
        
        />
    </HomeStackNavigator.Navigator>
    )
  
}
const Tab = createBottomTabNavigator();

function Mytaps(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:'purple',
            }}
        >
            <Tab.Screen 
            name='Home' 
            component={MyStack} 
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                ),
                tabBarBadge:10,
                headerShown:false,
            }}/>
            <Tab.Screen 
            name='Settings' 
            component={SettingScreen}
            options={{
                tabBarLabel:'Settings',
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons name="account-wrench" size={24} color={color} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Mytaps/>
        </NavigationContainer>
    )
}
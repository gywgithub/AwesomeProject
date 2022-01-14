// import React,{useState} from 'react';
// import {View, Text, Image, ScrollView, TextInput, StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Welcome from './pages/Welcome';
// import Home from './pages/Home';
// import MyPage from './pages/MyPage';
// import ComponentsPage from './pages/ComponentsPage';
// import GesturePasswordPage from './components/GesturePassword';
// import MmkvPage from './components/MMKV';
// import RNFSPage from './components/FS';
// import GifPage from './components/Gif';
// import SwiperPage from './components/Swiper';
// import TeasetProIndexPage from './components/TeasetProComponents/Index';
// import TeasetProTabViewPage from './components/TeasetProComponents/TabView';
//
// // set app theme
// import {Theme} from 'teaset-pro';
// Theme.set(Theme.themes.black);
//
// const Stack = createNativeStackNavigator();
//
// const App = () => {
//   StatusBar.setHidden(true);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Welcome" component={Welcome} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="MyPage" component={MyPage} />
//         <Stack.Screen name="ComponentsPage" component={ComponentsPage} />
//         <Stack.Screen name="GesturePasswordPage" component={GesturePasswordPage} />
//         <Stack.Screen name="MmkvPage" component={MmkvPage} />
//         <Stack.Screen name="RNFSPage" component={RNFSPage} />
//         <Stack.Screen name="GifPage" component={GifPage} />
//         <Stack.Screen name="SwiperPage" component={SwiperPage} />
//         <Stack.Screen name="TeasetProIndexPage" component={TeasetProIndexPage} />
//         <Stack.Screen name="TeasetProTabViewPage" component={TeasetProTabViewPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;


import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ComponentsPage from './pages/ComponentsPage';
import AppNavigator from './navigator/AppNavigators';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import GesturePasswordPage from './components/GesturePassword';


// set app theme
import {Theme} from 'teaset-pro';
Theme.set(Theme.themes.black);

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator()

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#ffffff"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Components"
        component={ComponentsPage}
        options={{
          tabBarLabel: 'Components',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-text" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{headerShown: false}} >
        <Stack.Screen name="MyTabs" component={MyTabs}></Stack.Screen>
          <Stack.Screen name="GesturePasswordPage" component={GesturePasswordPage}></Stack.Screen>
      </Stack.Navigator>
      {/*
        <MyTabs />
        */}
    </NavigationContainer>
  );
}

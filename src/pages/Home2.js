import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyPage from './MyPage';
import ComponentsPage from './ComponentsPage';
import FirstPage from './FirstPage';
import {NavigationBar} from 'teaset-pro';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NavigationBar
        title="Settings"
      />
      <Text>Settings</Text>
    </View>
  );
}

const Home = () => {
  StatusBar.setHidden(false);
  StatusBar.setBarStyle('light-content')
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}  activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}>
      <Tab.Screen
        name="Home"
        component={FirstPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
              backgroundColor='red'
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Components"
        component={ComponentsPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={size}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    marginBottom: 4,
    marginTop: -4,
  },
});

export default Home;

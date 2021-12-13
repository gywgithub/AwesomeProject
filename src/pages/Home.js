import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyPage from './MyPage';
import ComponentsPage from './ComponentsPage';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <MaterialCommunityIcons name="rocket" size={30} color="#900" />
      <Text>1.Introduce</Text>
      <Text>2.Component</Text>
      <Text>3.Discover</Text>
      <Text>4.My</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Components"
        component={ComponentsPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="format-list-text" color={color} size={size} />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
          tabBarBadge: 3,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
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

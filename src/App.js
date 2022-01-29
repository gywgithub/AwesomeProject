import * as React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme
} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import AppNavigator from './navigator/AppNavigators';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import GesturePasswordPage from './components/GesturePassword';
import SvgPage from './components/Svg';
import ComponentsPage from './pages/ComponentsPage';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import FirstPage from './pages/FirstPage';
import MmkvPage from './components/MMKV';
import ProgressPage from './components/Progress';
import RNFSPage from './components/FS';
import GifPage from './components/Gif';
import SwiperPage from './components/Swiper';
import TeasetProIndexPage from './components/TeasetProComponents/Index';
import TeasetProTabViewPage from './components/TeasetProComponents/TabView';
import VectorIconsPage from './components/VectorIcons';
import HtmlViewPage from './components/HtmlView';
import DeviceInfoPage from './components/DeviceInfo';
// import VisionCameraPage from './components/VisionCamera';
import Video from 'react-native-video';

// set app theme
import {Theme} from 'teaset-pro';
Theme.set(Theme.themes.black);

function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#d9d9d9'}}>111!</Text>
        <Video source={{uri: "./assets/video/Law.mp4"}}
       ref={(ref) => {
       }}
       style={{width: 300,height: 300,borderWidth: 2, borderColor: 'red'}} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#d9d9d9'}}>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={FirstPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Components"
        component={ComponentsPage}
        options={{
          tabBarLabel: 'Components',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTabs" component={MyTabs}></Stack.Screen>
        <Stack.Screen
          name="GesturePasswordPage"
          component={GesturePasswordPage}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ComponentsPage" component={ComponentsPage} />
        <Stack.Screen name="MmkvPage" component={MmkvPage} />
        <Stack.Screen name="RNFSPage" component={RNFSPage} />
        <Stack.Screen name="GifPage" component={GifPage} />
        <Stack.Screen name="SwiperPage" component={SwiperPage} />
        <Stack.Screen
          name="TeasetProIndexPage"
          component={TeasetProIndexPage}
        />
        <Stack.Screen
          name="TeasetProTabViewPage"
          component={TeasetProTabViewPage}
        />
        <Stack.Screen
          name="ProgressPage"
          component={ProgressPage}
        /><Stack.Screen
          name="SvgPage"
          component={SvgPage}
        />
        <Stack.Screen
          name="VectorIconsPage"
          component={VectorIconsPage}
        />
        <Stack.Screen
          name="HtmlViewPage"
          component={HtmlViewPage}
        />
        <Stack.Screen
          name="DeviceInfoPage"
          component={DeviceInfoPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

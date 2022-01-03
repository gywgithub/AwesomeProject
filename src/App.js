import React,{useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import ComponentsPage from './pages/ComponentsPage';
import GesturePasswordPage from './components/GesturePassword';
import MmkvPage from './components/MMKV';
import RNFSPage from './components/FS';
import GifPage from './components/Gif';
import SwiperPage from './components/Swiper';

// set app theme
import {Theme} from 'teaset-pro';
Theme.set(Theme.themes.black);

const Stack = createNativeStackNavigator();

const App = () => {
  // const styleTypes = ['default', 'dark-content', 'light-content'];
  // const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  // const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
  //
  // <StatusBar barStyle={styleStatusBar} backgroundColor="#30B7FF" />
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="ComponentsPage" component={ComponentsPage} />
        <Stack.Screen name="GesturePasswordPage" component={GesturePasswordPage} />
        <Stack.Screen name="MmkvPage" component={MmkvPage} />
        <Stack.Screen name="RNFSPage" component={RNFSPage} />
        <Stack.Screen name="GifPage" component={GifPage} />
        <Stack.Screen name="SwiperPage" component={SwiperPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

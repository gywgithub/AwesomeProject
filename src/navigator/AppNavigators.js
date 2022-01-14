import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
// 堆栈 导航器
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import GesturePasswordPage from '../components/GesturePassword';


const Stack = createNativeStackNavigator()


class AppNavigators extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="GesturePasswordPage" component={GesturePasswordPage}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigators

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StackActions} from '@react-navigation/native';

// const Welcome = () => {
class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  goHome = () => {
    console.log('Go Home');
    this.props.navigation.dispatch(StackActions.push('Home'));
  };

  render() {
    return (
      <SafeAreaView style={styles.styles}>
        <View>
          <Text>Welcome</Text>
          <Button title="Go Home" onPress={this.goHome} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Welcome;

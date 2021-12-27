import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native';
import {StackActions} from '@react-navigation/native';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      timeNum: 3,
    };
  }
  async componentDidMount() {
    this.animationRedirect();
  }

  animationRedirect = () => {
    const intervalId = setInterval(() => {
      let n = this.state.timeNum - 1;
      if (n === 0) {
        clearInterval(intervalId);
        this.props.navigation.navigate({
          name: 'Home',
        });
      }
      this.setState({
        timeNum: n--,
      });
    }, 1000);
    this.setState({
      intervalId: intervalId,
    });
  };
  goHome = () => {
    console.log('Go Home');
    this.props.navigation.dispatch(StackActions.push('Home'));
  };

  render() {
    const {timeNum} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={require('../assets/images/2.jpeg')}
          style={styles.imageBackground}>
          <Text onPress={this.goHome} style={styles.goHomeText}>
            {timeNum} 跳过
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  goHomeText: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 70,
    textAlign: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#fff',
    padding: 8,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});

export default Welcome;

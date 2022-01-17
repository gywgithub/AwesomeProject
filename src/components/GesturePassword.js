import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import OkGesturePassword from 'react-native-ok-gesture-password';
import {StackActions, useRoute} from '@react-navigation/native';
import {NavigationBar} from 'teaset-pro';

export default class GesturePasswordPage extends Component {
  state = {
    point1: '#000000',
    point2: '#000000',
    point3: '#000000',
    point4: '#000000',
    point5: '#000000',
    point6: '#000000',
    point7: '#000000',
    point8: '#000000',
    point9: '#000000',
  };
  constructor() {
    super();
    this.state = {
      message: '',
      n: 4,
    };
  }

  componentDidMount = () => {};
  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  handleFinish = async password => {
    console.log(password);
    this.setState({
      message: password,
    });
    this._resetHeadPoint();
  };

  render() {
    const {message} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar
          title="手势"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <View style={{height: 70, marginTop: 130, marginBottom: 20}}>
          <View style={styles.headContent}>
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point1}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point2}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point3}]}
            />
          </View>
          <View style={styles.headContent}>
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point4}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point5}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point6}]}
            />
          </View>
          <View style={styles.headContent}>
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point7}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point8}]}
            />
            <View
              style={[styles.headCircle, {backgroundColor: this.state.point9}]}
            />
          </View>
        </View>
        <Text style={{fontSize: 16}}>{message}</Text>
        <OkGesturePassword
          style={styles.gesturePassword}
          showArrow={false}
          color={'#d9d9d9'}
          activeColor={'#d9d9d9'}
          warningColor={'red'}
          warningDuration={0}
          allowCross={false}
          onMove={p => {
            this._changeHeadPoint(p);
          }}
          onFinish={async password => {
            this.handleFinish(password);
          }}
        />
      </View>
    );
  }

  _resetHeadPoint = () => {
    this.setState({
      point1: '#000000',
      point2: '#000000',
      point3: '#000000',
      point4: '#000000',
      point5: '#000000',
      point6: '#000000',
      point7: '#000000',
      point8: '#000000',
      point9: '#000000',
    });
  };

  _changeHeadPoint = point => {
    switch (point + 1) {
      case 1:
        this.setState({
          point1: '#d9d9d9',
        });
        break;
      case 2:
        this.setState({
          point2: '#d9d9d9',
        });
        break;
      case 3:
        this.setState({
          point3: '#d9d9d9',
        });
        break;
      case 4:
        this.setState({
          point4: '#d9d9d9',
        });
        break;
      case 5:
        this.setState({
          point5: '#d9d9d9',
        });
        break;
      case 6:
        this.setState({
          point6: '#d9d9d9',
        });
        break;
      case 7:
        this.setState({
          point7: '#d9d9d9',
        });
        break;
      case 8:
        this.setState({
          point8: '#d9d9d9',
        });
        break;
      case 9:
        this.setState({
          point9: '#d9d9d9',
        });
        break;
    }
  };
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
  },
  gesturePassword: {
    // backgroundColor: 'white',
  },
  headContent: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headCircle: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    width: 15,
    height: 15,
    margin: 4,
  },
  container: {
    alignItems: 'center',
    // backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});

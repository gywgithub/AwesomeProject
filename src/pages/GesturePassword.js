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
import {Toast, NavigationBar} from 'teaset-pro';
import mmkv from '../utils/mmkv';
import globalData from '../utils/globalData';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setGesturePassword, logout, clearGesturePassword} from '../api/login';
import {getDeviceId} from 'react-native-device-info';
import {StackActions, useRoute} from '@react-navigation/native';

export default class GesturePasswordPage extends Component {
  state = {
    point1: '#FFFFFF',
    point2: '#FFFFFF',
    point3: '#FFFFFF',
    point4: '#FFFFFF',
    point5: '#FFFFFF',
    point6: '#FFFFFF',
    point7: '#FFFFFF',
    point8: '#FFFFFF',
    point9: '#FFFFFF',
  };
  constructor() {
    super();
    this.state = {
      password1: '',
      password2: '',
      message: '请绘制原手势密码',
      color: 'black',
      lastPage: '',
      n: 4,
      buttonText: '重新绘制手势',
    };
  }

  componentDidMount = () => {
  };
  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  handleFinish = async password => {
    console.log(password);
    if (password.length < 4) {
      this.setState({
        message: '最少连接4个点，请重新绘制',
        color: 'red',
      });
      this._resetHeadPoint();
      return false;
    } else {
      this.setState({
        message: '',
      });
    }
    if (this.state.password) {
      if (this.state.password1) {
        if (this.state.password1 === password) {
          Toast.message('手势密码修改成功');
          mmkv.setMMKVGesturePassword(this.state.password1);
          this.handleGoBack();
        } else {
          this.setState({
            message: '两次新手势不一致，请重新绘制',
            color: 'red',
            password1: '',
            password2: '',
          });
        }
      } else {
        this.setState({
          message: '请再次绘制新手势密码',
          color: 'black',
          password1: password,
        });
      }
      this._resetHeadPoint();
    } else {
      if (mmkv.getMMKVGesturePassword() === password) {
        this.setState({
          password: password,
          message: '请绘制新手势密码',
          color: 'black',
        });
      } else {
        Toast.message('原手势密码绘制不正确');
        this._resetHeadPoint();
        this.setState({
          password: '',
          password2: '',
          password1: '',
          message: '请绘制原手势密码',
          color: 'black',
        });
      }
      this._resetHeadPoint();
    }
  };

  resetPassword() {
    this.setState({
      password: '',
      password2: '',
      password1: '',
      message: '请绘制原手势密码',
      color: 'black',
    });
    Toast.message('手势密码已清空，请重新开始');
  }

  handleTextClick() {
    this.resetPassword();
  }

  render() {
    const {message, password1, password2, lastPage, buttonText} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar
          style={{backgroundColor: '#30B7FF'}}
          title=""
          leftView={<NavigationBar.BackButton title="手势修改" />}
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
        <Text style={{fontSize: 16, color: this.state.color}}>{message}</Text>
        <OkGesturePassword
          style={styles.gesturePassword}
          pointBackgroundColor={'white'}
          showArrow={false}
          color={'#1F67B9'}
          activeColor={'#1F67B9'}
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
        <Text style={{color: 'blue'}} onPress={() => this.handleTextClick()}>
          {buttonText}
        </Text>
      </View>
    );
  }

  _resetHeadPoint = () => {
    this.setState({
      point1: '#FFFFFF',
      point2: '#FFFFFF',
      point3: '#FFFFFF',
      point4: '#FFFFFF',
      point5: '#FFFFFF',
      point6: '#FFFFFF',
      point7: '#FFFFFF',
      point8: '#FFFFFF',
      point9: '#FFFFFF',
    });
  };

  _changeHeadPoint = point => {
    switch (point + 1) {
      case 1:
        this.setState({
          point1: '#1F67B9',
        });
        break;
      case 2:
        this.setState({
          point2: '#1F67B9',
        });
        break;
      case 3:
        this.setState({
          point3: '#1F67B9',
        });
        break;
      case 4:
        this.setState({
          point4: '#1F67B9',
        });
        break;
      case 5:
        this.setState({
          point5: '#1F67B9',
        });
        break;
      case 6:
        this.setState({
          point6: '#1F67B9',
        });
        break;
      case 7:
        this.setState({
          point7: '#1F67B9',
        });
        break;
      case 8:
        this.setState({
          point8: '#1F67B9',
        });
        break;
      case 9:
        this.setState({
          point9: '#1F67B9',
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
    backgroundColor: '#30B7FF',
  },
  gesturePassword: {
    backgroundColor: 'white',
  },
  headContent: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headCircle: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1F67B9',
    width: 15,
    height: 15,
    margin: 4,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

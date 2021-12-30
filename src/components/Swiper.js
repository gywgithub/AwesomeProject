import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import {StackActions, useRoute} from '@react-navigation/native';
import {NavigationBar} from 'teaset-pro';

class SwiperPage extends Component {
  constructor(props) {
    super(props);
  }

  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={{backgroundColor: '#30B7FF'}}
          title="Swiper"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <View style={styles.container2}>
          <Swiper>
            <View style={styles.slide}>
              <ImageBackground
                source={require('../assets/images/5.jpeg')}
                style={styles.slideImage}></ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground
                source={require('../assets/images/6.jpeg')}
                style={styles.slideImage}></ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground
                source={require('../assets/images/7.jpg')}
                style={styles.slideImage}></ImageBackground>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default SwiperPage;

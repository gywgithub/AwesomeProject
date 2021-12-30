import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';

class SwiperPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper showsButtons={false} loop={false} showsPagination={false}>
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
          <View style={styles.slide3}>
            <ImageBackground
              source={require('../assets/images/7.jpg')}
              style={styles.slideImage}></ImageBackground>
          </View>
        </Swiper>
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SwiperPage;

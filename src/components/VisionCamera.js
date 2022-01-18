// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationBar} from 'teaset-pro';
// import {useCameraDevices} from 'react-native-vision-camera'
// import { Camera, frameRateIncluded } from 'react-native-vision-camera';
//
// class VisionCameraPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'VisionCameraPage',
//     };
//   }
//   async componentDidMount() {
//
//     console.log('componentDidMount');
//   }
//
//   handleGoBack = () => {
//     console.log('go back');
//     this.props.navigation.goBack();
//   };
//
//   render() {
//     const {title} = this.state;
//     const devices = useCameraDevices()
//     const device = devices.back
//     return (
//       <View style={styles.container}>
//         <NavigationBar
//           title="VisionCameraPage"
//           leftView={
//             <NavigationBar.BackButton
//               title=""
//               onPress={this.handleGoBack}
//             />
//           }
//         />
//         <Text>{title}</Text>
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
// });
//
// export default VisionCameraPage;

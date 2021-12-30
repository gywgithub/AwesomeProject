import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {StackActions} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'react-native-ok-gesture-password',
    page: 'GesturePasswordPage',
  },
  {
    id: '2',
    title: 'react-native-mmkv',
    page: 'MmkvPage',
  },
  {
    id: '3',
    title: 'react-native-fs',
    page: 'RNFSPage',
  },
  {
    id: '4',
    title: 'react-native-progress',
  },
  {
    id: '5',
    title: 'Teaset-pro',
  },
  {
    id: '6',
    title: 'react-native-svg',
  },
  {
    id: '7',
    title: 'react-native-vector-icons',
  },
  {
    id: '9',
    title: 'react-native-swiper',
    page: 'SwiperPage',
  },
  {
    id: '10',
    title: 'react-native-htmlview',
  },
  {
    id: '11',
    title: 'react-native-device-info',
  },
  {
    id: '12',
    title: 'react-native-camera',
  },
  {
    id: '13',
    title: 'react-native-audio',
  },
  {
    id: '14',
    title: 'react-native-android-auto-update',
  },
  {
    id: '15',
    title: 'react-native-amap-geolocation',
  },
  {
    id: '16',
    title: 'image gif',
    page: 'GifPage',
    desc: 'android/app/build.gradle add config'
  },
];

// const Item = ({title}) => {
//   return (
//     <TouchableOpacity onPress={this.goPage}>
//     <View style={{width: '100%',borderColor:'#ccc',borderBottomWidth:1, padding: 16}}>
//       <Text style={{fontSize: 20}}>{title}</Text>
//     </View>
//     </TouchableOpacity>
//   );
// };

class ComponentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'ComponentsPage',
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
  }

  goPage = page => {
    if (page) {
      this.props.navigation.navigate({
        name: page,
      });
    } else {
      console.log('no page');
    }
  };

  render() {
    const Item = ({item}) => {
      return (
        <TouchableOpacity onPress={() => this.goPage(item.page)}>
          <View
            style={{
              width: '100%',
              borderColor: '#ccc',
              borderBottomWidth: 1,
              padding: 16,
            }}>
            <Text style={{fontSize: 20}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    const renderItem = ({item}) => <Item item={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ComponentsPage;

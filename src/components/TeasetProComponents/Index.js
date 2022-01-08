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
    title: 'TabView',
    page: 'TeasetProTabViewPage',
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

class TeasetProIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TeasetProIndexPage',
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

export default TeasetProIndexPage;

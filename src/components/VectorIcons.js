import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';
import Icon from 'react-native-vector-icons/FontAwesome';
import MateiralIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

class IconsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'IconsPage',
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
  }

  handleGoBack = () => {
    console.log('go back');
    this.props.navigation.goBack();
  };

  render() {
    const {title} = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar
          title="IconsPage"
          leftView={
            <NavigationBar.BackButton title="" onPress={this.handleGoBack} />
          }
        />
        <Text>{title}</Text>
        <Icon name="home" size={30} color="#5d8aa8" style={styles.icon} />
        <Icon
          name="address-card"
          size={30}
          color="#ffbf00"
          style={styles.icon}
        />

        <MateiralIcon
          name="github"
          size={30}
          color="#e32636"
          style={styles.icon}
        />
        <MateiralIcon
          name="microsoft-visual-studio-code"
          size={30}
          color="#007fff"
          style={styles.icon}
        />
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
  icon: {
    borderWidth: 1,
    borderColor: '#787878',
    padding: 20,
    margin: 10,
  },
});

export default IconsPage;

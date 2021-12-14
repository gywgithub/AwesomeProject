import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from 'teaset-pro';
import fs from '../utils/fs';

class TemplateClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TemplateClassPage',
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');

    console.log(fs.ExternalDirectoryPath); // /data/user/0/com.github_reactnative/files
    var path = fs.ExternalDirectoryPath + '/test.txt';
    let value = 'hello 123';
    fs.writeFile(path, value, 'utf8')
      .then(res => {
        console.log('111');
        // console.log(res)
      })
      .catch(err => {
        console.log('eee');
        console.log(err);
        console.error(err);
      });

    fs.readFile(path, 'utf8')
      .then(res => {
        console.log('222');
        console.log(res);
      })
      .catch(err => {
        console.log('333');
        console.error(err);
      });

    fs.unlink(path)
      .then(res => {
        console.log('delete file');
      })
      .catch(error => {
        console.log();
      });
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
          style={{backgroundColor: '#30B7FF'}}
          title=""
          leftView={
            <NavigationBar.BackButton
              title="TemplatePage"
              onPress={this.handleGoBack}
            />
          }
        />
        <Text>{title}</Text>
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
});

export default TemplateClassPage;

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

    // fs.DocumentDirectoryPath // 文件目录，存储在APP安装目录，用户无法访问
    console.log(fs.ExternalDirectoryPath); // /data/user/0/com.github_reactnative/files
    var path = fs.ExternalDirectoryPath + '/test.txt'; // 外部路径，可以在文件管理中访问
    let value = 'hello 123';
    fs.writeFile(path, value, 'utf8')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
        console.error(err);
      });

    fs.readFile(path, 'utf8')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
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
          title="FS"
          leftView={
            <NavigationBar.BackButton
              title=""
              onPress={this.handleGoBack}
            />
          }
        />
        <Text>https://github.com/itinance/react-native-fs</Text>
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

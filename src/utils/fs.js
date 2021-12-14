/**
 * Github: https://github.com/itinance/react-native-fs
 */
var RNFS = require('react-native-fs');

class FSClass {
  CachesDirectoryPath = RNFS.CachesDirectoryPath;
  ExternalCachesDirectoryPath = RNFS.ExternalCachesDirectoryPath;
  DocumentDirectoryPath = RNFS.DocumentDirectoryPath; // App private storage
  DownloadDirectoryPath = RNFS.DownloadDirectoryPath;
  TemporaryDirectoryPath = RNFS.TemporaryDirectoryPath;
  ExternalDirectoryPath = RNFS.ExternalDirectoryPath; // App public storage
  ExternalStorageDirectoryPath = RNFS.ExternalStorageDirectoryPath;

  construtor() {
    console.log(RNFS.CachesDirectoryPath);
    console.log(RNFS.ExternalCachesDirectoryPath);
    console.log(RNFS.DocumentDirectoryPath);
    console.log(RNFS.DownloadDirectoryPath);
    console.log(RNFS.TemporaryDirectoryPath);
    console.log(RNFS.ExternalDirectoryPath);
    console.log(RNFS.ExternalStorageDirectoryPath);
  }

  writeFile(path, value, encodeType) {
    return new Promise((resolve, reject) => {
      RNFS.writeFile(path, value, encodeType)
        .then(() => {
          console.log('file written');
          resolve();
        })
        .catch(err => {
          console.error(err.message);
          reject(err);
        });
    });
  }

  unlink(path) {
    return new Promise((resolve, reject) => {
      RNFS.unlink(path)
        .then(res => {
          console.log('delete');
          resolve(res);
        })
        .catch(err => {
          console.error(err.message);
          reject(err);
        });
    });
  }

  readFile(path, encodeType) {
    return new Promise((resolve, reject) => {
      RNFS.readFile(path, 'utf8')
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.error(err.message);
          reject(err);
        });
    });
  }
}

export default new FSClass();

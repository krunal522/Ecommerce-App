import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
import Navigator from './navigator/navigation';


// const fetchFont = () => {
//   Font.loadAsync({
//     'RobotoSlab-Bold': require('./Font/Roboto_Slab/static/RobotoSlab-Black.ttf'),
//     // 'RobotoSlab-light': require('./Font/Roboto_Slab/static/RobotoSlab-Light.ttf'),
//     // 'Courgette-Regular': require('./Font/Courgette-Regular.ttf')
//   });
// }

export default function App() {
 

  // const [appLoad, setAppLoad] = useState(false);

  // if (!appLoad) {
  //   return (<AppLoading
  //     startAsync={fetchFont()}
  //     onFinish={setAppLoad(true)}
  //     onError={(err) => { console.log(err) }}
  //   />
  //   )
  // }
  return (
    <Navigator />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

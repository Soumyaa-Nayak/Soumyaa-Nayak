import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('/assets/im1.png')} />
      <Text style={styles.heading}>mopedo
      </Text>
      <Text style={styles.paragraph}>
      Reliable  . Affordable .Attainable

    
       
     </Text>
  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   

  
    padding: 8,
  },
  paragraph:{
    marginLeft:60
  },
  heading: {
    margin: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    marginLeft:60,
  },
 
});

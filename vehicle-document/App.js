import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files





export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>
     Welcome Nagrndra Reddy
        
      </Text>
      <Text style={styles.paragraph}>
      Driving License                          >
       </Text>
        <Text style={styles.paragraph}>
    Registration Certificate              >
       </Text>
       <Text style={styles.paragraph}>
     Vehicle Insurance                      >
       </Text>
       
      
      
      
   
       <View style={styles.buttonContainer}>  
                    <Button  
              
                        title="Save & Skip"  
                        color="#000"  
                    />  
                </View>  
                 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  
  },
  heading:{
    position:"absolute",
    top:10,
    textAlign:"center",

  backgroundColor:'#ffcc00',
  height:100,
  width:330,
    fontWeight: 'bold',
       fontSize: 28,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
  
  
  },
   buttonContainer: {  
        marginLeft: 60 , 
        marginRight:50,
        position:"absolute",
        bottom:30,
        width:200,
        borderRadius:20,
    },  
  
});

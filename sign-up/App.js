import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files





export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>
     Registration
        
      </Text>
      <Text style={styles.paragraph}>
      first name:
       </Text>
        <Text style={styles.paragraph}>
     Last name:
       </Text>
       <Text style={styles.paragraph}>
     Email Id:
       </Text>
       <Text style={styles.paragraph}>
      DOB:
       </Text>
       <Text style={styles.paragraph}>
     Referral code:
       </Text>
      
      
      
   
       <View style={styles.buttonContainer}>  
                    <Button  
              
                        title="sign up"  
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
    position:"relative",
    top:10,
    margin: 24,
    fontSize: 18,
    borderBottomColor:"#a29696",
    borderBottomWidth:1,
  
  
  },
   buttonContainer: {  
        marginLeft: 50 , 
        marginRight:50,
        position:"relative",
        top:50,
    },  
  
});

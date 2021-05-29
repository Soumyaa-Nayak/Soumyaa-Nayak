import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';


// You can import from local files





export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>
     Welcome Nagrndra Reddy
        
      </Text>
      <Text style={styles.paragraph}>
      Vehicle Type:
       </Text>
        <Text style={styles.paragraph}>
     Vehicle Number:
       </Text>
       <Text style={styles.paragraph}>
     Vehicle Model:
       </Text>
       <Text style={styles.paragraph}>
      Vehicle Color:
       </Text>
       <Text style={styles.paragraph}>
     Driving Licence no:
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
    borderBottomColor:'black',
    borderBottomWidth:1,
  
  
  },
   buttonContainer: {  
        marginLeft: 60 , 
        marginRight:50,
        position:"absolute",
        bottom:20,
        width:200,
        borderRadius:20,
    },  
  
});

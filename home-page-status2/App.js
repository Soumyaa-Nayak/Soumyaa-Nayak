import * as React from 'react';
import { Text, View, StyleSheet, Button,Image} from 'react-native';


// You can import from local files





export default function App() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo1} source={require('/assets/download.jfif')} />
       <Text style={styles.paragraph}>
   Mr. Nagendra Reddy </Text>
   
        
     
    
     
  
     <Text style={styles.heading}>
  Thank you
   
        
      </Text>
      <Image style={styles.logo2} source={require('/assets/tick.png')} />
      <Image style={styles.logo} source={require('/assets/im1.png')} />
      <Text style={styles.paragraph1}>
           Thank you for submitting all the document.We are varifying your documents.It may take 2-3 days.We will get back to you </Text>
             <Text style={styles.paragraph2}>
            Go to Profile </Text>
     
     
     
     
   
                 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  
  },
  heading:{
    position:"absolute",
    top:200,
    textAlign:"center",


  height:100,
  width:330,
    fontWeight: 'bold',
       fontSize: 35,

  },
  logo:{
    height:80,
    width:80,
    position:"absolute",
    bottom:130,
    left:130,

    
  },
   logo1:{
    height:50,
    width:50,
    borderRadius:50,
    position:"absolute",
    top:90,
    left:150,
  },
   logo2:{
    height:50,
    width:50,
    borderRadius:50,
    position:"absolute",
    top:250,
    left:150,
  },
  paragraph:{
    position:"absolute",
    top:150,
    left:110,
  },
   paragraph1:{
    position:"absolute",
    top:300,
    left:30,
    right:30,
    textAlign:"center",
  },
  paragraph2:{
    position:"absolute",
    top:540,
    left:80,
    right:60,
    textAlign:"center",
  }
 
  
  
  
});

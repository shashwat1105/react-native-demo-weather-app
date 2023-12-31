import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    
    
    <SafeAreaView style={styles.wrapper}>
<StatusBar animated={true} style='auto' barStyle='light-content'></StatusBar>
 <View style={styles.container}>
    <Feather name='sun' size={100} color='black'/>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <View style={styles.highLowWrapper}>
      <Text style={styles.highLow}>High:8 </Text>
      <Text style={styles.highLow}>Low:6</Text>

      </View>
    </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>

      </SafeAreaView>
    
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  wrapper:{
    flex:1,
    backgroundColor: 'pink',

  },
  temp:{
    color:'black',
    fontSize:48,
  },
  feels:{
fontSize:30,
color:'black'
  },
  temp:{
    color:'black',
    fontSize:48
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
fontSize:48
  },
  message:{
fontSize:30
  }
});


import * as React from 'react';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const  [API, key ] = useState(`API`, `fd50f934c3b48ab26da1e91ad2c23eda`);
  

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.Lat}&lon=${this.state.Lon}&appid=${[API,key]}`);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ID}>Name: Abdullah Abdulmajeed
      <br />Metric: 1613003</Text>
      <Text style={styles.paragraph}>
      {text}
      </Text>
      <Card style={styles.status}>
       <em>{this.response}</em>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flexbox',
    position: 'relative',
    
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'darkblue',
    padding: 8,
  },

    ID: {
    display:'flexbox',
    position: 'relative',
    marginBottom: '450px',
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'top',
  },

  paragraph: {
    display:'flexbox',
    position: 'relative',
    margin: 24,
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  status:{
    position: 'relative',
    margin: 24,
    fontSize: 18,
    backgroundColor:'#000000',
    color:'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },

});

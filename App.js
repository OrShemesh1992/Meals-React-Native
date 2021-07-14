import { StatusBar } from 'expo-status-bar';
import React , { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

const feathFonts =()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded,setDataLoaded] = useState(false);

  
  if(!dataLoaded){
     return (
     <AppLoading 
      startAsync={feathFonts} 
      onFinish={()=>setDataLoaded(true)}
      onError={console.warn}
     />
     );
  }
  return <MealsNavigator/>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

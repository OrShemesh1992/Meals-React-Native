import React , { useState }  from 'react';
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
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoiretsScreen from '../Screens/FavoiretsScreen';
import FiltersScreen from '../Screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {} from 'react-native-paper';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS == 'ios' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS == 'ios' ? 'white' : Colors.primaryColor
};


const MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen
      },
      CategoryMeals: {
        screen: CategoryMealsScreen
      },
      MealDetail: MealDetailScreen
    },
    {  
        defaultNavigationOptions: defaultStackNavOptions
      }
);

const FavNavigotor =  createStackNavigator(
{
  Favorites: FavoiretsScreen,
  MealDetail: MealDetailScreen
},
{
  defaultNavigationOptions: defaultStackNavOptions
}
);

const tabScreenConfig = {Meals: {screen : MealsNavigator , navigationOptions: {
  tabBarIcon: tabInfo => {
    return (<Ionicons name = 'ios-restaurant' size={25} color={tabInfo.tintColor}/>);
  },
  tabBarColor: Colors.primaryColor
} } ,
Favorites: {screen :FavNavigotor,navigationOptions: {
  tabBarLabel : 'Favorites!',
  tabBarIcon: tabInfo => {
    return (<Ionicons name = 'ios-star' size={25} color={tabInfo.tintColor}/>);
  },
  tabBarColor: Colors.accentColor
}}
}

const MealsFavTabNavigotor =Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig,{
  activeTintColor: 'white',
  shifting: true
}) 
: createBottomTabNavigator(
  {
    tabScreenConfig,
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  });

  const FilterNavigator=createStackNavigator({
    Filters : FiltersScreen
  },
  {  
      // navigationOptions: {
      //   drawerLabel: 'Filters!!!'
      // },
      defaultNavigationOptions: defaultStackNavOptions
    }
  );

  const MainNavigator=createDrawerNavigator({
      MealsFavs: {screen: MealsFavTabNavigotor,navigationOptions:{
        drawerLabel: 'Meals'
      }},
      Filters:FilterNavigator
  },{
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle:{
        fontFamily: 'open-sans-bold'
      }
    }
  });
export default createAppContainer(MainNavigator);
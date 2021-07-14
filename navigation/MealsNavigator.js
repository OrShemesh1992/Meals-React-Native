

import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import FavoiretsScreen from '../Screens/FavoiretsScreen';
import FiltersScreen from '../Screens/FiltersScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
},
    {
         
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'ios' ? 'white' : Colors.primaryColor
        }
    }
);

export default createAppContainer(MealsNavigator);
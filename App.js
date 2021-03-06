import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/home';
import Product from './screens/product'
import ProductDetails from './screens/productdetails'
import Orders from './screens/orders';
import Category from './screens/category';
import NewCategory from './screens/newcategory';



export default function App(){

  const Stack = createStackNavigator();
  //screens in the app
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='screens'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Product' component={Product} options={{headerShown:false}}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
        <Stack.Screen name='Category' component={Category} options={{headerShown:false}}/>
        <Stack.Screen name='NewCategory' component={NewCategory} options={{headerShown:false}}/>
        <Stack.Screen name='Orders' component={Orders} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


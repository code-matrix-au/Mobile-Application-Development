import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';



import HomeScreen from '../screens/HomeScreen';
import MyHotels from '../screens/MyHotels';
import MyRestaurants from '../screens/MyRestaurants';
import MyTours from '../screens/MyTours';


const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Hotel" component={MyHotels}/>
        <AppStack.Screen name="Restaurant" component={MyRestaurants}/>
        <AppStack.Screen name="Tour" component={MyTours}/>
       
    </AppStack.Navigator>
)

export default AuthNavigator;
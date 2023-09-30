import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image} from 'react-native'
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { HomeStack } from './homeStack';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Tab.Screen name="Home" component={HomeStack} 
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../../assets/iconhome.png')} // Spécifiez le chemin de votre image ici.
            style={{  width: 25, height: 25 }}
          />
        ),
      }}
      />
      <Tab.Screen name="My Order" component={RegisterScreen}
      options={{
        tabBarIcon: ( ) => (
          <Image
            source={require('../../assets/myorders.png')} // Spécifiez le chemin de votre image ici.
            style={{  width: 25, height: 25 }}
          />
        ),
      }} />
      <Tab.Screen name="Save" component={WelcomeScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../../assets/save.png')} // Spécifiez le chemin de votre image ici.
            style={{ width: 25, height: 25 }}
          />
        ),
      }}
      />
      <Tab.Screen name="Chat Host" component={WelcomeScreen} 
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../../assets/chathost.png')} // Spécifiez le chemin de votre image ici.
            style={{  width: 25, height: 25 }}
          />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={WelcomeScreen}
       options={{
        tabBarIcon: () => (
          <Image
            source={require('../../assets/profile.png')} // Spécifiez le chemin de votre image ici.
            style={{  width: 25, height: 25 }}
          />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default TabBar
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


import Header from './src/componentes/Header';
import Jogo from './src/componentes/Jogo';
import Infor from './src/componentes/Infor';
import { styles } from './src/componentes/style/main';

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer >
    <Tab.Navigator initialRouteName="Jokenpo" screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
    
                  switch (route.name) {
                    case "Jokenpo":
                      iconName = "home";
                      break;
                    case "Play":
                      iconName = "game-controller";
                      break;
                    case "Infor":
                      iconName = "clipboard-outline";
                      break;
                  }
                  return <Ionicons name={iconName} size={size} color={color} />
                }
              })}
    >
      <Tab.Screen name="Jokenpo" component={Header}/>
      <Tab.Screen name="Play" component={Jogo}/>
      <Tab.Screen name="Infor" component={Infor}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}
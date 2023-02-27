import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from './screens/LoginScreen';
import CalculationScreen from './screens/CalculationScreen';
import ResultScreen from './screens/ResultScreen';
import {useState } from 'react';

import DataContext from './context/DataContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const[isZoneSelected,setIsZoneSelected]=useState(false);
  const[isSeedSelected,setIsSeedSelected]=useState(false);

  const changeZoneSelectedToTrue = () =>{
    setIsZoneSelected(true);
  };
  const changeSeedSelectedToTrue = () =>{
    setIsSeedSelected(true);
  };
  return(
    <DataContext.Provider
    value={{
      isZoneSelected:isZoneSelected,
      zoneSelectedToTrue: changeZoneSelectedToTrue,
      isSeedSelected:isSeedSelected,
      seedSelectedToTrue:changeSeedSelectedToTrue
    }}
    >
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle:{backgroundColor:Colors.primaryGreen4},
            headerTitleStyle:{
            fontSize: 30,
            },
          contentStyle:{ backgroundColor:Colors.primaryGreen1}
          }}
        >
          <Stack.Screen 
            name="LoginSc" 
            component={LoginScreen} 
            options={{
              title:'Login'
            }}
          />
          <Stack.Screen
            name="CalculateSC" 
            component={CalculationScreen} 
            options={{
              title:'Seeds Calculator'
            }}
          />
          <Stack.Screen
            name="ResultSC" 
            component={ResultScreen} 
            options={{
            title:'Results'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );  
}
import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useState,useMemo } from 'react';

import LoginScreen from './screens/LoginScreen';
import CalculationScreen from './screens/CalculationScreen';
import ResultScreen from './screens/ResultScreen';
import SignUpScreen from './screens/SignUpScreen';

//Context
import { AuthContext } from './context/AuthContext';

import { TokenProvider } from './context/ToKenProvider';

//TO-DO: Problem with passing prop "userToken" trough navigation 

//Declaration  "Authentication" Navigation Stack
const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () =>(
<AuthStack.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:Colors.primaryGreen4},
    headerTitleStyle:{
    fontSize: 30,
    },
  contentStyle:{ backgroundColor:Colors.primaryGreen1}
  }}
> 
    <AuthStack.Screen 
      name="LoginSc" 
      component={LoginScreen}
      options={{title: 'Login'}}
    />

  <AuthStack.Screen 
    name="SignUpSc" 
    component={SignUpScreen}
    options={{title: 'Sign Up'}}
  />
  
</AuthStack.Navigator>
);  

//Declaration of "Main Stack" Navigation
const MainStack = createNativeStackNavigator();
const MainStackScreens = () => (
  <MainStack.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor:Colors.primaryGreen4},
      headerTitleStyle:{
      fontSize: 30,
      },
      contentStyle:{ backgroundColor:Colors.primaryGreen1}
    }}
    
  >
    <MainStack.Screen 
      name="CalculateSC" 
      component={CalculationScreen} 
      options={{
        title:'Seeds Calculator'
      }}
      //initialParams={ userToken }
      
    />
    <MainStack.Screen 
      name="ResultSC" 
      component={ResultScreen} 
      options={{
      title:'Results'
      }}
    />
  </MainStack.Navigator>
);

// Declaration of "Root Stack" Navigation
const RootStack = createNativeStackNavigator();
const RootStackScreens = ({isAuth}) => (
  <RootStack.Navigator
    screenOptions={{headerShown:false}} //fixed Header problem!
  >
    {/* Conditional value switch Between "Stack Navigation" when User Is Log in */}
    {
      !isAuth ?(<RootStack.Screen name="Auth" component={AuthStackScreens}/>) :
      (<RootStack.Screen name="Main" component={MainStackScreens}/>) //testing
    }  
  </RootStack.Navigator>
)

export default function App() {
  
  //const [isAuth,setIsAuth]= useState(false)
  const [isAuth, setIsAuth] = useState(false)

  //CallBack function used for check if user is logged in or not
  const authContext = useMemo(() => {
    return{
      logIn: (t) =>{
        setIsAuth(t)
      },
  }
  }, []);

  //console.log(token); // testing
  
  //userToken ={isAuth}
  return(
    <AuthContext.Provider value={authContext}>
      <TokenProvider>
        <NavigationContainer>
          {/* passing props to root stack screen */}
          <RootStackScreens isAuth ={isAuth}/>
        </NavigationContainer>   
      </TokenProvider>
      
    </AuthContext.Provider> 
  );  
}
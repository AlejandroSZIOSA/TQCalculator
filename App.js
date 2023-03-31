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
const MainStackScreens = ({token}) => (
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
      token={token}
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
const RootStackScreens = ({userToken}) => (
  <RootStack.Navigator
    screenOptions={{headerShown:false}} //fixed Header problem!
  >
    {/* Conditional value switch Between "Stack Navigation" when User Is Log in */}
    {
      !userToken ?(<RootStack.Screen name="Auth" component={AuthStackScreens}/>) :
      (<RootStack.Screen token={userToken} name="Main" component={MainStackScreens}/>) //testing
    }  
  </RootStack.Navigator>
)

export default function App() {
  
  //const [isAuth,setIsAuth]= useState(false)
  const [token, setToken] = useState(null)

  //CallBack function used for check if user is logged in or not
  const authContext = useMemo(() => {
    return{
      logIn: (t) =>{
        setToken(t)
      },
  }
  }, []);
  console.log(token); // testing
  
  //userToken ={isAuth}
  return(
    <AuthContext.Provider value={authContext}>
      
        <NavigationContainer>
          {/* passing props to root stack screen */}
          <RootStackScreens userToken ={token}/>
        </NavigationContainer>   
      
    </AuthContext.Provider> 
  );  
}
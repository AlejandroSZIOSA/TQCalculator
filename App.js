import Colors from './constants/colors';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useState,useMemo } from 'react';

// SC
import LoginScreen from './screens/LoginScreen';
import CalculationScreen from './screens/CalculationScreen';
import ResultScreen from './screens/ResultScreen';
import SignUpScreen from './screens/SignUpScreen';

//CTX
import { AuthContext } from './context/AuthContext';
import { TokenProvider } from './context/ToKenProvider';

// Navigation SC
import { UserStackScreens } from './navigation/UserStackScreens'; 
import { CalculationStackScreens } from './navigation/CalculationStackScreens';

// Root Stack Navigation
const RootStack = createNativeStackNavigator();
const RootStackScreens = ({isAuth}) => (
  <RootStack.Navigator
    screenOptions={{headerShown:false}} //fixed Header problem!
  >
    {/* Conditional value switches Between "Stack Navigation" when User Is LogIn */}
    {
      !isAuth ?(<RootStack.Screen name="Auth" component={UserStackScreens}/>) :
      (<RootStack.Screen name="Main" component={CalculationStackScreens}/>) //testing
    }  
  </RootStack.Navigator>
)

// App 
export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  //CallBack function CTX used for check if user is authenticated
  const authContext = useMemo(() => {
    return{
      logIn: (isAuth) =>{
        setIsAuth(isAuth)
      },
  }
  }, []);
  return(
    <AuthContext.Provider value={authContext}>
      <TokenProvider>
        <NavigationContainer>
          {/* passing props to Root stack screen */}
          <RootStackScreens isAuth ={isAuth}/>
        </NavigationContainer>   
      </TokenProvider>
    </AuthContext.Provider> 
  );  
}
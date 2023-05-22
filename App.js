import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useState,useMemo } from 'react';
//CTX
import { AuthContext } from './context/AuthContext';
import { TokenProvider } from './context/ToKenProvider';
//Navigation stacks Screens
import { UserStackScreens } from './navigation/UserStackScreens'; 
import { CalculationStackScreens } from './navigation/CalculationStackScreens';

// Root Navigation
const RootStack = createNativeStackNavigator();
const RootStackScreens = ({isAuth}) => (
  <RootStack.Navigator
    screenOptions={{headerShown:false}} //Fixed Header problem!
  >
    {/* Conditional value switches Between "Stack Navigation" when User Is LogIn */}
    {
      !isAuth ?(<RootStack.Screen name="Auth" component={UserStackScreens}/>) :
      (<RootStack.Screen name="Main" component={CalculationStackScreens}/>) //Fixed!
    }  
  </RootStack.Navigator>
)

// App 
export default function App() {
  const [isAuth, setIsAuth] = useState(false) //Can change this to "true" if you don't want to login
  
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
          {/* Passing props to Root stack screen */}
          <RootStackScreens isAuth ={isAuth}/>
        </NavigationContainer>   
      </TokenProvider>
    </AuthContext.Provider> 
  );  
}
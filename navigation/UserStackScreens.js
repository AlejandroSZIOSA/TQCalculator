import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Colors from '../constants/colors';

const AuthStack = createNativeStackNavigator();

export const UserStackScreens = () =>(
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
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Colors from '../constants/colors';

const UserStack = createNativeStackNavigator();

export const UserStackScreens = () =>(
  <UserStack.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:Colors.primaryGreen4},
    headerTitleStyle:{
    fontSize: 30,
    },
    contentStyle:{ backgroundColor:Colors.primaryGreen1}
  }}
  > 
    <UserStack.Screen 
      name="LoginSc" 
      component={LoginScreen}
      options={{title: 'Login'}}
    />

    <UserStack.Screen 
      name="SignUpSc" 
      component={SignUpScreen}
      options={{title: 'Sign Up'}}
    />
  </UserStack.Navigator>
);  
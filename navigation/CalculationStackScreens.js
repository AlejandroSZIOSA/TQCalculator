import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CalculationScreen from '../screens/CalculationScreen';
import ResultScreen from '../screens/ResultScreen';
import Colors from '../constants/colors';

const MainStack = createNativeStackNavigator();

export const CalculationStackScreens = () => (
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
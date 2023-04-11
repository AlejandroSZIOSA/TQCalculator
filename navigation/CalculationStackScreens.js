import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CalculationScreen from '../screens/CalculationScreen';
import ResultScreen from '../screens/ResultScreen';
import Colors from '../constants/colors';

const CalculationStack = createNativeStackNavigator();

export const CalculationStackScreens = () => (
  <CalculationStack.Navigator 
  screenOptions={{
    headerStyle:{backgroundColor:Colors.primaryGreen4},
    headerTitleStyle:{
    fontSize: 30,
    },
    contentStyle:{ backgroundColor:Colors.primaryGreen1}
  }}
  >
    <CalculationStack.Screen 
      name="CalculateSC" 
      component={CalculationScreen} 
      options={{
        title:'Seeds Calculator'
      }}
    />
    <CalculationStack.Screen 
      name="ResultSC" 
      component={ResultScreen} 
      options={{
      title:'Results'
      }}
    />
  </CalculationStack.Navigator>
);
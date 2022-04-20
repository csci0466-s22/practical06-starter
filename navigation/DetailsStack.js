
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from "../screens/DetailsScreen";
import DataScreen from "../screens/DataScreen";




const Stack = createStackNavigator();

function DetailsStack(){

  return(
  <Stack.Navigator>
    <Stack.Screen name="Data" component={DataScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
  )


}




export default DetailsStack;

import { createStackNavigator } from '@react-navigation/stack';


import EditProject from '../screens/EditProject';

import MainView from '../screens/MainView';



const Stack = createStackNavigator();

function ProjectStack(){

  return(
  <Stack.Navigator  screenOptions={{headerShown:false}}>
    <Stack.Screen name='Main' component={MainView} />
    <Stack.Screen 
      name='Project Editor' 
      component={EditProject}
      options={{presentation:'modal'}}
      />
  </Stack.Navigator>
  )
}




export default ProjectStack;
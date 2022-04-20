import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {useEffect} from 'react';
import {Button} from 'react-native';

import NativeIconicIcon from '../components/NativeIconicIcon';
import ProjectContext from '../contexts/ProjectContext';
import CountingScreen from '../screens/CountingScreen';
import DetailsStack from './DetailsStack';



const Tab = createBottomTabNavigator();

function ProjectTabs({navigation, route}){
  const projectName = route.name;

  useEffect(()=>{
    navigation.setOptions({
      headerRight:()=>(
        <Button title='Edit'
        onPress={()=>{navigation.navigate('Project Editor',{name:projectName})}} />
      )
    })

  }, [projectName]);


  return(
    <ProjectContext.Provider value={projectName}>
    <Tab.Navigator  
      screenOptions={{headerShown:false}}
      >
      <Tab.Screen 
        name="Count" 
        component={CountingScreen} 
        options={{
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="checkmark-circle-outline" color={color} size={size} />
        }}
        />
      <Tab.Screen 
        name="Details Stack" 
        component={DetailsStack} 
        options={{
          tabBarLabel:'Data',
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="stats-chart" color={color} size={size} />
        }}
        />
    </Tab.Navigator>
    </ProjectContext.Provider>

  )
}

export default ProjectTabs;
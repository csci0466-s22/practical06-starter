import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ProjectStack from './navigation/ProjectStack';
import { StatusBar } from 'expo-status-bar';


export default function App() {
 
  return (

    <NavigationContainer >
      <ProjectStack  />
      <StatusBar style="auto" />
    </NavigationContainer>

  );


}


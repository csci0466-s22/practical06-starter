import {Button, Text, SafeAreaView, StyleSheet} from 'react-native';

import ProjectDrawer from '../navigation/ProjectDrawer';


function MainView({navigation}){
  const projects = [];

  if (projects.length === 0) {
    return (
    <SafeAreaView style={styles.container}>
      <Text>No Projects to work with yet</Text>
      <Button 
        onPress={()=>{navigation.navigate('Project Editor')}}
        title='Create New Project'
      />
    </SafeAreaView>)
  } else{
    return <ProjectDrawer projects={projects} />
  }
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    backgroundColor:'#fff'
  },
});

export default MainView;
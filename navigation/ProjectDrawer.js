import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import {View, Text, StyleSheet} from 'react-native';

import ProjectTabs from './ProjectTabs';


const Drawer = createDrawerNavigator();



function CustomDrawerContents(props){
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} >
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Projects</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="New project..." 
      onPress={()=>{props.navigation.navigate('Project Editor')}}
      />
    </DrawerContentScrollView>
    <View style={styles.footer} />
  
    </View>
  );

}






function ProjectDrawer({projects}){

  const drawerItems = projects.map((project)=>(
    <Drawer.Screen 
      name={project.name} 
      key={project.name} 
      component={ProjectTabs}
      options={{
        headerStyle: {
          backgroundColor:project.color}
      }}  />
));


  return ( 
    <Drawer.Navigator
    drawerContent={CustomDrawerContents}
  >
      {drawerItems}
    </Drawer.Navigator>
  );
}



const styles = StyleSheet.create({
  header:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#7297A0',
    padding:15,
    marginBottom:5
    },
  headerLabel:{
    fontSize: 14,
    fontWeight:'bold',
    color:'white'
  },
  footer:{
    backgroundColor: '#7297A0',
    padding:25,
    marginTop:5
  },
  screenHeader:{
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    padding: 10
   
  },
  screenTitle:{
    fontWeight:'bold',
    fontSize: 18
  }
});

export default ProjectDrawer;
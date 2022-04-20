import { View, Text, FlatList, Pressable, Dimensions, StyleSheet } from "react-native";

import {useProject} from '../contexts/ProjectContext';



function CountingScreen(){
  const projectName = useProject();
 const project = {
   variants:[],
   observations:[]
 };

  const keyExtractor = (item) => item;

  const ItemRenderer = ({item})=>{ 

    return(
    <Pressable 
    onPress={()=>{console.log(projectName, 'Add observation')}}
    style={({pressed})=>(
      {
        backgroundColor: pressed ? '#aaa' : 'white',
        margin: 10
      }
    )}
     >
    <View style={styles.listItem}>
      <Text style={styles.variant}>{item}</Text>
      <Text>{project.observations.reduce((acc, current)=>acc+= current.variant === item? 1 : 0, 0)}</Text>
    </View>
    </Pressable>

  )};

  return(
    <View style={styles.container}>
      <FlatList 
      data={project.variants} 
      numColumns={2}
      keyExtractor={keyExtractor} 
      renderItem={ItemRenderer}
     
      />
    </View>
  )


}

const cardSize= Dimensions.get('window').width / 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  listItem:{
    // margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#ddd',
    borderWidth:1,
    borderRadius:5,
    padding: 10,
    width: cardSize,
    height: cardSize
 
  },
  variant:{
    fontSize: 24,
    fontWeight: 'bold',

    
  },
});

export default CountingScreen;
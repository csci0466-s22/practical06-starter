import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";


import NativeIconicIcon from '../components/NativeIconicIcon';
import BarChart from "../components/BarChart";
import {useProject} from '../contexts/ProjectContext'





function DataScreen({navigation}){
  const projectName = useProject();
  const project = {
    variants:[],
    observations:[]
  };


  const counts = project.variants.map((variant)=>({
    variant:variant, 
    count: project.observations.reduce((acc, current)=>acc+= current.variant === variant? 1 : 0, 0)
  }));

  const getObservations = (variant)=>(project.observations.filter((observation)=>(observation.variant === variant)));

  const seeDetails = (variant)=>{
    navigation.navigate('Details', {observations: getObservations(variant)});
  }

  const keyExtractor = (_, index) => index.toString();

  const ItemRenderer = ({item})=>(
  <Pressable 
    onPress={()=>seeDetails(item.variant)}
    style={({pressed})=>(
      {
        backgroundColor: pressed ? '#aaa' : 'white'
      }
    )}
    >
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.variant}</Text>
      <View style={styles.itemTail}>
        <Text >{item.count}</Text>
        <NativeIconicIcon name="chevron-forward" />
      </View>
    </View>
    </Pressable>
  
  );

  return(
    <View style={styles.container}>
      <BarChart data={counts} onBarPressed={seeDetails}/>
     <FlatList 
     style={styles.list}
      data={counts}
      keyExtractor={keyExtractor}
      renderItem={ItemRenderer}
      />
    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  list:{
    width:'100%',
    paddingHorizontal: 20
  },
  item:{
    flex: 1,
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginVertical:15
  },
  itemDate:{
   width:'30%'
  },
  itemName:{
    fontWeight:'bold',
  
  },
  itemTail:{
    flexDirection:'row',
    width: '10%',
    justifyContent:'space-between'
  }
});

export default DataScreen;
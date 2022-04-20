import { View, Text, FlatList, StyleSheet } from "react-native";
import {format, parseISO} from 'date-fns';


function DetailsScreen({route}){
  const {observations} = route.params;

  const keyExtractor = (item, index) => index.toString();

  const ItemRenderer = ({item})=>(

    <View style={styles.item}>
       <Text style={styles.itemDate}>{format(parseISO(item.time), 'MMM dd, hh:mmaaaaa')}</Text>
      <Text style={styles.itemName}>{item.variant}</Text>
    </View>
  );


  return(
    <View style={styles.container}>
      <FlatList 
     style={styles.list}
      data={observations}
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
    marginVertical:15
  },
  itemDate:{
   width:'30%'
  },
  itemName:{
    fontWeight:'bold',
    marginLeft: 30
  }
});

export default DetailsScreen;
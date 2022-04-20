import {useState} from 'react';

import {SafeAreaView, View, Text, TextInput, FlatList, Pressable, Button, StyleSheet} from 'react-native';

import NativeIconicIcon from '../components/NativeIconicIcon';
import ColorPicker from '../components/ColorPicker';
import colors from '../assets/colors.json';


function EditProject({navigation}){
  const project = undefined;
  const [name, setName] = useState(project? project.name : '');
  const [variantList, setVariantList] = useState(project? project.variants: [])
  const [color, setCurrentColor] = useState(project? project.color: colors[0]);


  const title = project ? 'Edit Project' : 'Create New Project ';
  


  const save=()=>{
    if (project){
      // editing the project
      console.log('save project edits')
    }else{
      // creating new project
      console.log('save new project')
    }

    navigation.goBack();
  }


  const cancel=()=>{
    navigation.goBack();
  }

  const deleteVariant = (variant)=>{
    setVariantList(variantList.filter((item)=> item!== variant))
  }

  const VariantListItem = ({item})=>(
    <View style={styles.listItem}>
      <Text>{item}</Text>
      <Pressable 
      onPress={()=>{deleteVariant(item)}}> 
     <NativeIconicIcon name="remove-circle" size={25} color='red'/>
     </Pressable>
      </View>
  );
  


  const AddNewVariant= ()=>{
    const [newVariant, setNewVariant] = useState('');

    const addItem = ()=>{
      setVariantList([...variantList, newVariant]);
      setNewVariant('');
    }

    return (
    <View style={[styles.listItem, styles.newItem]}>
          <TextInput 
      placeholder='Add new variant'
      onChangeText={setNewVariant} 
      value={newVariant}
      onSubmitEditing={addItem}
    />
    
    <Pressable onPress={addItem}> 
     <NativeIconicIcon name="add" size={25}/>
     </Pressable>
    </View>
    )};

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttons}>
      <Button title='Cancel' onPress={cancel}/>
      <Button title='Save' 
              onPress={save} 
              disabled={name==='' ||variantList.length<1}
      />

      </View>
      <TextInput 
        style={styles.input}
        onChangeText={setName} 
        value={name}
        placeholder='Project name'/>

    <ColorPicker currentColor={color} setCurrentColor={setCurrentColor} />

    <View style={styles.variants}>
      <Text style={styles.header}>Variants</Text>

      <FlatList
      style={styles.list}
        data={variantList}
        keyExtractor={(variant)=>(variant)}
        renderItem={VariantListItem}
        ListFooterComponent={AddNewVariant}
      />
    </View>

    </SafeAreaView>
  )


}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%',
    backgroundColor:'#fff'
  },
  title: {
    fontWeight:'bold',
    fontSize:20,
    padding:20
  },
  buttons:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginBottom:20
  },
  header:{
    fontWeight:'bold',
    fontSize:18,
  },
  input:{
    width:'90%',
    marginHorizontal:20,
    borderWidth:1,
    borderColor:'white',
    borderBottomColor:'#888',
   
    padding:10,
    height:40,
  },
  variants:{
    width:'100%',
    padding:20,
  },
  newItem:{

    borderWidth:1,
    borderColor:'white',
    borderBottomColor:'#888',
  },
  list:{
    width:'100%',
    paddingHorizontal: 20,
  },
  listItem:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'100%',
    paddingVertical: 10
  }

});


export default EditProject;
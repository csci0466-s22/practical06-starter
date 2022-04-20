import SVG , { G, Circle} from 'react-native-svg';
import {View, StyleSheet} from 'react-native';
import colors from '../assets/colors.json';

function ColorPicker({currentColor, setCurrentColor}){

  const circles = colors.map((color, index)=>(
    <G key={color} transform={`translate(${index % 4 * 80}, ${Math.floor(index/4) * 50})`}>
      <Circle onPress={()=>{setCurrentColor(color)}} cx="0" cy="0" r="15" fill={color} />
      {(currentColor === color) && (<Circle cx="0" cy="0" r="20" stroke={color} />) }
    </G>
  ));


  return (
   <View style={styles.container}>
      <SVG width='290' height='100'>
       <G transform='translate(25,25)'>{circles}</G>
      </SVG>
   </View>

  )

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%',
    padding:20,
  },
});


export default ColorPicker;
import { useEffect } from 'react';
import SVG , { G, Text, Rect} from 'react-native-svg';

import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedProps} from 'react-native-reanimated';
import { useIsFocused } from "@react-navigation/native";


const AnimatedBar = Animated.createAnimatedComponent(Rect);



function GrowingBar({targetWidth, ...props}){
  const barWidth = useSharedValue(0);

  useEffect(()=>{
    barWidth.value = targetWidth
  }, [targetWidth])

  const animatedProps = useAnimatedProps(()=>({
    width: withTiming(barWidth.value, {duration:600})
  }));

  return (
    <AnimatedBar animatedProps={animatedProps} {...props} />
  )
}


function BarChart({data, onBarPressed}){
  const windowWidth = Dimensions.get('window').width;
  const maxBarLength = windowWidth * .4;
  const focused = useIsFocused();


  const maxCount = data.reduce((acc,current)=>(current.count > acc ? current.count: acc), 0);




  const bars = data.map((item, index)=>(
    <G 
      key={item.variant} 
      transform={`translate(0, ${index* 25 + 5})`}
    >
        <Rect x='0' y='0' width='100%' height='20' onPress={()=>onBarPressed(item.variant)} />
        <Text x='15' y='15' fill='black'>{item.variant}</Text>
        <GrowingBar 
          x={windowWidth/2} 
          y='0' 
          targetWidth={focused ? (item.count/maxCount) * maxBarLength : 0} 
          height='20' 
          fill='#7297A0' 
          />
     </G>
  ));



  return(
    <View style={styles.container}>
      <SVG height={25 * data.length} width='100%'>
        {bars}
 
      </SVG>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    paddingVertical:10
  },
});

export default BarChart;
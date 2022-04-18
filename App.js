import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

let count = 0
// const [count,setCount] = React.useState(0)
const up = () => {
  count++
  alert(count)
}
// const CountUp = (props) => {
//   // count++
//   // alert(count)
//   return (<>
//     <Text>{count}</Text>
//     <Button
//         title='count'
//         onPress={(e)=>{setCount((count)=>count + 1)}}
//         color='#f00'
//       />
//   </>)
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World {count}</Text>
      <StatusBar style="auto" />
      <Button
        title='count'
        onPress={up}
        color='#f00'
      />
      {/* <CountUp/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
  }
});

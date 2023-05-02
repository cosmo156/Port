import { StatusBar } from 'expo-status-bar';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'

import ComponeneteList from "./ComponenteList"

export default function ListadePedidos() {
  const navigation = useNavigation();

  const List =[
    {
        id:1,
        label:"Pedido 1",
        value:"300,00",
        date:"15-08-23",
        hora:"15",
        type:0
    },
    {
        id:2,
        label:"Pedido 2",
        value:"30,00",
        date:"15-01-23",
        hora:"15",
        type:0
    },
    {
        id:3,
        label:"Pedido 3",
        value:"50,00",
        date:"10-02-23",
        hora:"15",
        type:0
    },
    {
        id:4,
        label:"Pedido 4",
        value:"300,00",
        date:"15-08-23",
        hora:"15",
        type:0
    },
    {
        id:5,
        label:"Pedido 5",
        value:"500,00",
        date:"01-01-23",
        hora:"15",
        type:0
    },
    {
        id:6,
        label:"Pedido 6",
        value:"500,00",
        date:"01-01-23",
        hora:"15",
        type:0
    },
  ]
  
 
  return (
    <View style={styles.container}>
      <FlatList style={styles.List} data={List} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} renderItem={({item})=> <ComponeneteList data={item} />}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:50,
    backgroundColor:"#000"
  },

  List:{
    marginStart:14,
    marginEnd:14,
    width:"95%",
    marginBottom:55,


  },

});
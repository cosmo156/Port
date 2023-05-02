import { StatusBar } from 'expo-status-bar';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import Logo from '../../Icons/logo.png';
import ComponeneteList from "./componenteLista"

export default function ListaDePagamentos() {
  const navigation = useNavigation();

  const List =[
    {
        id:1,
        label:"Cliente 1",
        value:"300,00",
        date:"15-08-23",
        hora:"15",
        type:0
    },
    {
        id:2,
        label:"Cliente 2",
        value:"30,00",
        date:"15-01-23",
        hora:"15",
        type:0
    },
    {
        id:3,
        label:"Cliente 3",
        value:"50,00",
        date:"10-02-23",
        hora:"15",
        type:0
    },
    {
        id:4,
        label:"Cliente 4",
        value:"300,00",
        date:"15-08-23",
        hora:"15",
        type:0
    },
    {
        id:5,
        label:"Cliente 5",
        value:"500,00",
        date:"01-01-23",
        hora:"15",
        type:0
    },
    {
        id:6,
        label:"Cliente 6",
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
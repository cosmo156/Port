import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, BackHandler, Alert, Platform, ToastAndroid, } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import ListaDeClientes from "./ListaDeClientes"
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import Logo from '../../Icons/logo.png';

export default function Clientes() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{
        width: "100%",
        height: 130,
        backgroundColor: '#202024',
        flexDirection: 'column-reverse' /*flexDirection:'row'*/,
      }}>
        <View style={{ height: '30%', flexDirection: 'row', marginLeft: 10, marginVertical: 10, }} >
          <Image source={Logo} style={styles.Logo}></Image>
          <View style={styles.view_nome}>
            <Text style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 25 }}>Finan</Text>
            <Text style={{ color: '#91209B', fontWeight: 'bold', fontSize: 25 }}>Help</Text>
          </View>
          <TouchableOpacity onPress={() => { }}>
            <Feather name="log-out" color={"#717174"} style={{ marginLeft: '60%', marginTop: 10, }} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: '#000', width: '100%', flexDirection: 'row', justifyContent: 'space-between', height: 50, marginTop: 5 }}>
        <Text style={styles.textLegend}>Clientes</Text>
        <Text style={styles.textLegend}>0</Text>
      </View>
      <View style={{ width: "90%", height: 40, backgroundColor: '#202024', marginTop: 5, flexDirection: 'row', borderRadius:30 }}>
      <Feather name="search" color={"#717174"} style={{marginTop: 5, marginLeft:10,marginRight:10 }} size={26} />
        <TextInput placeholder="Pesquisar" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
      </View>

      <View style={{ width: '100%', height: '72.5%', marginTop:-20,  }}>


      <ListaDeClientes />
      
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Addclient')} style={styles.Bottom1}><Text style={styles.textBot1}>Adicionar cliente</Text></TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  Logo: {
    width: '14%',
    height: '100%',
    tintColor: '#91209B',

  },

  view_nome: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,

  },
  textLegend: {
    color: 'white',
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  textinput: {
    //backgroundColor:'white',
    width: "80%",
    height: "76%",
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
  },
  Bottom1: {
    width:"90%",
    height: 50,
    marginTop: -60,
    backgroundColor: '#91209B',
    borderRadius: 6,
    alignSelf: 'center',
  },
  textBot1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: "3%",
  },

});

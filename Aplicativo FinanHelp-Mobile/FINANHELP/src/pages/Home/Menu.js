
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather } from '@expo/vector-icons'
import Logo from '../../Icons/logo.png';
import Usuario from '../../Icons/user.png';

export default function Men() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 130,
          backgroundColor: '#202024',
          flexDirection: 'column-reverse' /*flexDirection:'row'*/,
        }}>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          <Image source={Logo} style={styles.Logo}></Image>
          <View style={styles.view_nome}>
            <Text
              style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 25 }}>
              Finan
            </Text>
            <Text
              style={{ color: '#91209B', fontWeight: 'bold', fontSize: 25 }}>
              Help
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Route')}>
            <Feather
              name="x-circle"
              color={'#1FA49C'}
              style={{ marginLeft: '60%', marginTop: 10 }}
              size={26}
            />
          </TouchableOpacity>

        </View>

      </View>
      <View style={{ width: '100%', height: '85%' }}>
        <View>
          <View style={{ width: "45%", height: "42%", backgroundColor: "#121214", marginTop: "10%", alignSelf: 'center', borderWidth: 1, borderColor: '#1FA49C', borderRadius: 100 }}>
            <Image source={Usuario} style={{ width: "100%", height: "100%", alignSelf: 'center', borderRadius: 100 }}></Image>
          </View>
          <Text style={styles.textName}>UsuárioName</Text>
          <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', marginTop: -5 }}>usuarioname@gmail.com</Text>
        </View>
        <View style={{ alignSelf: 'center', borderWidth: 1.5, borderColor: '#717174', width: "80%", marginTop: -85 }}></View>
        <View style={{ alignSelf: 'center', width: "80%", height: '40%', marginTop: 45, }}>
          <TouchableOpacity style={{ width: "100%", height: 30, flexDirection: 'row', marginLeft: '5%' }}>
            <Text style={{ width:120,fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Mudar senha</Text>
            <Feather name="chevron-right" color={'#C4C4CC'} style={{ marginLeft: '40%', marginTop: 10 }} size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "100%", height: 30, flexDirection: 'row', marginLeft: '5%',marginTop: 15 }}>
            <Text style={{width:120,fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Tutorial</Text>
            <Feather name="chevron-right" color={'#C4C4CC'} style={{ marginLeft: '40%', marginTop: 10 }} size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "100%", height: 30, flexDirection: 'row', marginLeft: '5%',marginTop: 15 }}>
            <Text style={{width:120, fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Feedback</Text>
            <Feather name="chevron-right" color={'#C4C4CC'} style={{ marginLeft: '40%', marginTop: 10 }} size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:140, height:31,borderColor: '#91209B',borderWidth: 1, borderRadius:30, flexDirection: 'row',justifyContent: 'center',alignItems: 'center', alignSelf:'center', marginTop:'40%' }}>
            <Text style={{width:120, fontSize: 15, color: '#91209B',}}>SAIR DA CONTA</Text>
          </TouchableOpacity>
        </View>

      </View>

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

  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 20
  },
});

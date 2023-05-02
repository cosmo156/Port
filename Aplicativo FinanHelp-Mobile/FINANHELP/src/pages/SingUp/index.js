
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import Logo from '../../Icons/logo.png';


export default function SigUp() {
  const navigation = useNavigation();
  /*
   useEffect(() => {
     const backAction = () => {
       { onPress: () => navigation.navigate('Home') }
       
       return true;
     };
 
     const backHandler = BackHandler.addEventListener(
       "hardwareBackPress",
       backAction
     );
 
     return () => backHandler.remove();
   }, []);*/
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate('SigIn');
    });
  },);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <Image source={Logo} style={styles.Logo}></Image>
        <View style={styles.view_nome}>
          <Text style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 25 }}>
            Finan
          </Text>
          <Text style={{ color: '#91209B', fontWeight: 'bold', fontSize: 25 }}>
            Help
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text_comp}>Acesse sua conta!</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          style={styles.textinput}></TextInput>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#fff"
          style={styles.textinput2}></TextInput>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          style={styles.textinput2}></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate('SigIn')}
          style={styles.Bottom1}>
          <Text style={styles.textBot1}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  header: {
    flex: 0.5,
    height:100,
    justifyContent: 'flex-end',
  },
  Logo: {
    width: "50%",
    height: "70%",
    alignSelf: 'center',
    
    tintColor:'#91209B',
    marginTop:"50%"
  },

  view_nome: {
    flexDirection: 'row',
    alignSelf: 'center',
    
  },

  text_comp: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginTop: "5%",
  },

  textinput: {
    paddingLeft: 30,
    width: '90%',
    height: 56,
    backgroundColor: '#121214',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 30,
    color: '#fff',
    fontSize: 16,
    placeholderTextColor: '#fff',
  },
  textinput2: {
    paddingLeft: 30,
    width: '90%',
    height: 56,
    backgroundColor: '#121214',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 22,
    color: '#fff',
    fontSize: 16,
    placeholderTextColor: '#fff',
  },
  Bottom1: {
    width: '90%',
    height: 56,
    marginTop: 22,
    backgroundColor: '#91209B',
    borderRadius: 6,
    alignSelf: 'center',
  },
  textBot1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
      marginTop:16,
  },
});

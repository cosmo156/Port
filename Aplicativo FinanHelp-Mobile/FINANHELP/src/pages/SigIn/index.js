import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, BackHandler, Alert, Platform, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from 'react';




import Logo from '../../Icons/logo.png'
import email from '../../Icons/o-email.png'


export const ExecuteOnlyOnAndroid = (props) => {
  const { message } = props;
  const [exitApp, setExitApp] = useState(0);
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.Logo}></Image>
        <View style={styles.view_nome}>
          <Text style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 25, }}>Finan</Text>
          <Text style={{ color: '#91209B', fontWeight: 'bold', fontSize: 25 }}>Help</Text>
        </View>
      </View>
      <View style={{flex:1,}}>
        <Text style={styles.text_comp}>Acesse sua conta!</Text>

        <TextInput placeholder="Email" placeholderTextColor="#fff" style={styles.textinput}></TextInput>
        <TextInput placeholder="Senha" placeholderTextColor="#fff" style={styles.textinput2}></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('Boasvindas')} style={styles.Bottom1}><Text style={styles.textBot1}>Entrar</Text></TouchableOpacity>
        <View style={{flex:1, justifyContent:'flex-end',}}>
          <TouchableOpacity onPress={() => navigation.navigate('SigUp')} style={styles.bottom2}><Text style={styles.textBot2}>Não possui conta? Cadastre-se!</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  );
};


export default function SigIn(props) {
  const { message = 'Pressione novamente para sair do App' } = props;
  return Platform.OS !== 'ios' ? (
    <ExecuteOnlyOnAndroid message={message} />
  ) : (
    <></>
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
    fontSize: 20, color: '#fff',
    marginTop: "5%",
  },

  textinput: {
    paddingLeft: "5%",
    width: "90%",
    height: 56,
    backgroundColor: '#121214',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 30,
    color: '#fff',
    fontSize: 16,
    placeholderTextColor: '#fff'
  },
  textinput2: {
    paddingLeft: 30,
    width:"90%",
    height: 56,
    backgroundColor: '#121214',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: "5%",
    color: '#fff',
    fontSize: 16,
    placeholderTextColor: '#fff'
  },
  Bottom1: {
   
    width:"90%",
    height: 56,
    marginTop: "10%",
    backgroundColor: '#91209B',
    borderRadius: 6,
    alignSelf: 'center',
  },
  textBot1: {
    
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent:'center',
    marginTop:16,
  },
  bottom2: {
    borderRadius: 6,
    paddingBottom: 6,
    alignSelf: "center",
    flexDirection: 'column-reverse'
  },
  textBot2: {
    color: '#91209B',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
    justifyContent: 'space-between'
  },

});
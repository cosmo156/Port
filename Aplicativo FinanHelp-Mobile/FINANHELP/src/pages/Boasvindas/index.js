import { StyleSheet, Text, View, Image, BackHandler} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native"
import Logo from '../../Icons/logo.png'
import Loding from '../../loading/lf30_editor_xdoeuyis.json'
import { useEffect } from 'react';
export default function Splash() {
 
  const navigation = useNavigation();
  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate('Route')
    }, 1000);
  },
);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Logo}></Image>
      <View style={styles.view_nome}>
        <Text style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 50, }}>Finan</Text>
        <Text style={{ color: '#91209B', fontWeight: 'bold', fontSize: 50 }}>Help</Text>
      </View>
      <View style={{ flex: 0.9 }}></View>
      <View style={styles.view_2}>
        <Text style={styles.texto1}>Seja bem vindo(a)!</Text>
        <LottieView 
        autoPlay 
        source={Loding}
        style={styles.anim}
        
        ></LottieView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Logo: {
    width: 251,
    height: 240,
    alignSelf: 'center',
    marginTop: 150,
    tintColor:'#91209B'
  },

  view_nome: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  view_2: {
    marginTop: 100,

  },
  anim: {
    height: 100,
    alignSelf: 'center',
  },

  texto1: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

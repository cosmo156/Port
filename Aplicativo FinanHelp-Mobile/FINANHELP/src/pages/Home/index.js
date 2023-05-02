import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
  Platform,
  ToastAndroid,
  Button,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import Logo from '../../Icons/logo.png';
import Lucros from '../../Icons/pig-money.png';
import Custos from '../../Icons/divide.png';
import Gastos from '../../Icons/subtract-minus-remov.png';
import Totals from '../../Icons/dollar-sign.png';

import { PieChart } from 'react-native-svg-charts';

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
      backAction
    );
    return () => backHandler.remove();
  });
  const navigation = useNavigation();








  {/*INICIO DA ANIMAÇÃO DOS GASTOS*/ }

  const fadeA = useRef(new Animated.Value(0)).current;

  let [tam, settam] = useState(0)
  let [tam1, settam1] = useState(0)

  const fadeIn = () => {
    settam(500),
    settam1(250),
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeA, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
  };

  const fadeOut = () => {

    settam(0)
    settam1(0)
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeA, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };


  {/*FIM DA ANIMAÇÃO DOS GASTOS*/ }






  let cust = parseFloat(20);// valor a ser buscado do banco de dados
  const [lucro, setlucro] = (useState(() => 10))// valor a ser buscado do banco de dados
  const [custo, setcusto] = useState(() => 20)// valor a ser buscado do banco de dados

  //const [gastos, setgastos] = useState(()=> 0) // valor a ser buscado input 

  const [gastosTotal, setgastosTotal] = useState(() => 5) // valor geral
  const [total, settotal] = useState(() => (lucro + custo + gastosTotal))

  const [data, setdata] = useState(() => [lucro, custo]) //array dos valores dos gráficos

  const [colors, setcolors] = useState(() => ['#91209B', '#1FA49C'])

  function Custo() {
    setcolors(['#91209B', '#202024']);
    settotal(custo)
    //mudar valor do centro do grafico
  }
  function Lucro() {
    setcolors(['#202024', '#1FA49C']);

    settotal(lucro)
    //mudar valor do centro do grafico
  }
  function Gasto() {
    setcolors(['#202024', '#202024']);
    //setgastosTotal((parseFloat(gastos))+(parseFloat(gastosTotal)));
    //settotal(gastosTotal); 
    //mudar valor do centro do grafico
    settotal(gastosTotal)
  }
  function Total() {
    setcolors(['#91209B', '#1FA49C']);
    settotal(lucro + custo + gastosTotal)
    //mudar valor do centro do grafico
  }

  //mudar para ['#1FA49C','#91209B']

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
      },
      key: `pie-${index}`,
    }));

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
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Feather
              name="settings"
              color={'#717174'}
              style={{ marginLeft: '60%', marginTop: 10 }}
              size={26}
            />
          </TouchableOpacity>

        </View>

      </View>

      <View style={{ backgroundColor: '#000', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.textLegend}>Vendas</Text>
        <Text style={styles.textLegend}>1</Text>
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', flexDirection: 'row', }}>
        <View style={{ height: 240, display: 'flex', backgroundColor: '#000',width: "55%", flexDirection: 'row', paddingLeft: 15, }}>
          <PieChart
            style={{ width: 185, marginTop: 10 }}
            data={pieData}
            innerRadius={60}><Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', marginTop: "55%", fontWeight: 'bold' }} >{total} R$</Text></PieChart>
        </View>
        <View style={{ height: "100%", backgroundColor: '#000', width: "55%" }}>

          <TouchableOpacity onPress={Lucro} style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
            <View style={{ width: 40, height: 40, borderWidth: 2, borderColor: '#1FA49C', borderRadius: 6 }}>
              <Image source={Lucros} style={{ tintColor: "#1FA49C", width: 25, height: 25, alignSelf: 'center', marginTop: "15%" }}></Image>
            </View>
            <Text style={styles.textLegend}>Lucro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Custo} style={{ flexDirection: 'row', marginTop: 15, marginLeft: 60 }}>
            <View style={{ width: 40, height: 40, borderWidth: 2, borderColor: '#91209B', borderRadius: 6 }}>
              <Image source={Custos} style={{ tintColor: "#91209B", width: 25, height: 25, alignSelf: 'center', marginTop: "15%" }}></Image>
            </View>
            <Text style={styles.textLegend}>Custo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={fadeIn} style={{ flexDirection: 'row', marginTop: 15, marginLeft: 60 }}>
            <View style={{ width: 40, height: 40, borderWidth: 2, borderColor: '#1FA49C', borderRadius: 6 }}>
              <Image source={Custos} style={{ tintColor: "#1FA49C", width: 25, height: 25, alignSelf: 'center', marginTop: "15%" }}></Image>
            </View>
            <Text style={styles.textLegend}>Gastos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Total} style={{ flexDirection: 'row', marginTop: 15, marginLeft: 60 }}>
            <View style={{ width: 40, height: 40, borderWidth: 2, borderColor: '#91209B', borderRadius: 6 }}>
              <Image source={Totals} style={{ tintColor: "#91209B", width: 25, height: 25, alignSelf: 'center', marginTop: "15%" }}></Image>
            </View>
            <Text style={styles.textLegend}>Total</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Animated.View width={tam} height={tam1} style={[styles.mostrar, { opacity: fadeA }]}>

        <View style={{ backgroundColor: '#202024', width: '100%', borderRadius: 20 }}>
          <TouchableOpacity onPress={fadeOut} style={{ width: '10%', borderRadius: 10, alignSelf: 'center', marginTop: 20, }}>
            <Feather name="x-circle" color={"#1FA49C"} size={36} />
          </TouchableOpacity>
          <View style={{ width: "90%", height: "20%", backgroundColor: '#121214', marginTop: 30, flexDirection: 'row', marginLeft:"5%" }}>
            <Text style={{color: 'white',fontSize: 20,alignSelf: 'center', marginLeft:10}} >Nome:</Text>
            <TextInput placeholder="Digite o nome do gasto!" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
          </View>
          <View style={{width: "90%", height: "20%", backgroundColor: '#121214', marginTop: 30, flexDirection: 'row', marginLeft:"5%" }}>
            <Text style={{color: 'white',fontSize: 20,alignSelf: 'center', marginLeft:10}} >Valor:</Text>
            <TextInput keyboardType='Numeric' placeholder="Digite o valor do gasto!" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
          </View>



        </View>

      </Animated.View>
      {/*} <Text style={styles.text}>home</Text> */}
    </View>
  );
};

export default function Home(props) {
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
    backgroundColor: '#121214',
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
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  mostrar: {
    width: '90%',
    flexDirection: 'row',
    marginTop: -240,
    borderRadius: 10
  },
  textinput: {
    paddingLeft: 10,
    width: "75%",
    height: "56%",
    
    alignSelf: 'center',
    borderRadius: 6,
    color: '#fff',
    fontSize: 16,
  },
  
});

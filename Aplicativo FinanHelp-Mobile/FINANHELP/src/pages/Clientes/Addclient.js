import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, BackHandler, Alert, Platform, ToastAndroid, Animated, } from 'react-native';
import { useNavigation } from "@react-navigation/native"


import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import Logo from '../../Icons/logo.png';

export default function Clientes() {
    const navigation = useNavigation();

    {/*INICIO DA ANIMAÇÃO DOS GASTOS*/ }

    let [anim, setanim] = useState(0)
    const fadeA = useRef(new Animated.Value(0)).current;
    let [tam, settam] = useState(0)
    let [tam1, settam1] = useState(0)

    let [anim1, setanim1] = useState(0)
    const fadeB = useRef(new Animated.Value(0)).current;
    let [tam2, settam2] = useState(0)
    let [tam3, settam3] = useState(0)

    function anima() {
        if (anim == 0) {
            settam(50),
                settam1(40),
                setanim(1),
                // Will change fadeAnim value to 1 in 5 seconds
                Animated.timing(fadeA, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }).start();
        }
        if (anim == 1) {
            settam(0)
            settam1(0)
            setanim(0)
            // Will change fadeAnim value to 0 in 3 seconds
            Animated.timing(fadeA, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }

    function anima1() {
        if (anim1 == 0) {
            settam2(50),
                settam3(40),
                setanim1(1),
                // Will change fadeAnim value to 1 in 5 seconds
                Animated.timing(fadeB, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }).start();
        }
        if (anim1 == 1) {
            settam2(0)
            settam3(0)
            setanim1(0)
            // Will change fadeAnim value to 0 in 3 seconds
            Animated.timing(fadeB, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }

    {/*FIM DA ANIMAÇÃO DOS GASTOS*/ }


    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: 130, backgroundColor: '#202024', flexDirection: 'column-reverse' /*flexDirection:'row'*/, }}>
                <View style={{ height: '30%', flexDirection: 'row', marginLeft: 10, marginVertical: 10, }} >
                    {/*<Image source={Logo} style={styles.Logo}></Image>
                    <View style={styles.view_nome}>
                        <Text style={{ color: '#1FA49C', fontWeight: 'bold', fontSize: 25 }}>Finan</Text>
                        <Text style={{ color: '#91209B', fontWeight: 'bold', fontSize: 25 }}>Help</Text>
                    </View>*/}
                    <TouchableOpacity onPress={() => { navigation.navigate(Clientes) }}>
                        <Feather name="chevron-left" color={"#717174"} style={{ marginLeft: '6%', }} size={36} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginLeft: '15%', }}>Adicionar cliente</Text>
                </View>


            </View>

            <View style={{ backgroundColor: '#000', width: '100%', height: 50, marginTop: 35, justifyContent: 'center' }}>
                <Text style={styles.textLegend}>Divida total</Text>
                <View style={{ backgroundColor: '#000', width: '100%', flexDirection: 'row', height: 50, marginTop: 5, justifyContent: 'center' }}>

                    <TouchableOpacity onPress={anima}>
                        <Feather name="plus-circle" color={"#91209B"} style={{ marginLeft: '6%', }} size={36} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', width: 100, height: 40, borderRadius: 50, backgroundColor: "#202024", marginRight: '6%', }}>
                        <Text style={{ color: "#fff", alignSelf: 'center', marginTop: '10%' }} >{"valor"}</Text>
                    </View>
                    <TouchableOpacity onPress={anima1}>
                        <Feather name="minus-circle" color={"#1FA49C"} size={36} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Animated.View width={tam} height={tam1} style={[styles.mostrar, { opacity: fadeA, marginRight: 140 }]}>
                        <TextInput keyboardType='Numeric' textAlign={'center'} placeholder="0" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
                    </Animated.View>
                    <Animated.View width={tam2} height={tam3} style={[styles.mostrar, { opacity: fadeB }]}>
                        <TextInput keyboardType='Numeric' textAlign={'center'} placeholder="0" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
                    </Animated.View>
                </View>
            </View>
            <View style={{ width: '100%', height: 80, justifyContent: 'center', marginTop: 35 }}>
                <Text style={styles.textLegend}>Status</Text>
                <View style={{ width: '100%', flexDirection: 'row', height: 40, marginTop: 10, justifyContent: 'center' }}>

                    <TouchableOpacity style={{ alignItems: 'center', width: 120, height: 40, borderRadius: 50, backgroundColor: "#202024", borderWidth: 1, borderColor: '#91209B', marginRight: 20 }} >
                        <Text style={{ color: "#91209B", alignSelf: 'center', marginTop: '8%' }} >PENDENTES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', width: 120, height: 40, borderRadius: 50, backgroundColor: "#202024", borderWidth: 1, borderColor: '#1FA49C', }} >
                        <Text style={{ color: "#1FA49C", alignSelf: 'center', marginTop: '8%' }} >CONCLUÍDOS</Text>
                    </TouchableOpacity>

                </View>

            </View>


            {/*<View style={{ width: "90%", height: 40, backgroundColor: '#202024', marginTop: 5, flexDirection: 'row', borderRadius: 30 }}>
                <Feather name="search" color={"#717174"} style={{ marginTop: 5, marginLeft: 10, marginRight: 10 }} size={26} />
                <TextInput placeholder="Pesquisar" placeholderTextColor="#7C7C8A" style={styles.textinput}></TextInput>
                </View>*/}

            <View style={{ width: '100%', height: '50%', paddingLeft: 10, paddingRight: 10, marginTop: 20 }}>


                <View style={{ alignSelf: 'center', width: "100%", height: '40%', marginTop: 10 }}>

                    <TextInput placeholder="Nome" placeholderTextColor="#7C7C8A" style={{ backgroundColor: "#202024", width: "90%", height: 50, alignSelf: 'center', borderRadius: 6, color: '#fff', fontSize: 16, paddingLeft: 10,marginTop: -20}} ></TextInput>
                    <TextInput placeholder="Contato" placeholderTextColor="#7C7C8A" style={{ backgroundColor: "#202024", width: "90%", height: 50, alignSelf: 'center', borderRadius: 6, color: '#fff', fontSize: 16, marginTop: 20 , paddingLeft: 10}} ></TextInput>
                    <TextInput placeholder="Descrição" placeholderTextColor="#7C7C8A" style={{ backgroundColor: "#202024", width: "90%", height: 50, alignSelf: 'center', borderRadius: 6, color: '#fff', fontSize: 16, marginTop: 20 , paddingLeft: 10}} ></TextInput>

                    <TouchableOpacity style={{ alignItems: 'center', width: 180, height: 40, borderRadius: 50, backgroundColor: "#1FA49C",  marginTop:30, alignSelf: 'center', }} >
                        <Text style={{ color: "#fff", alignSelf: 'center', marginTop: '5%' }} >Histórico de pedidos</Text>
                    </TouchableOpacity>



                </View>

            </View>
            <TouchableOpacity onPress={() => { navigation.navigate(Clientes) }} style={styles.Bottom1}><Text style={styles.textBot1}>Adicionar cliente</Text></TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    
    textLegend: {
        color: 'white',
        fontSize: 15,
        marginTop:-10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    textinput: {
        width: "100%",
        height: "100%",
        alignSelf: 'center',
        borderRadius: 6,
        color: '#fff',
        fontSize: 16,

    },

    Bottom1: {
        width: "90%",
        height: 50,
        marginTop: -70,
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
    mostrar: {
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: "#202024",
        alignSelf: 'center'
    },

});

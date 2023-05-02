import React from 'react'
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'

import home from '../Icons/home.png'
import clientes from '../Icons/clientes.png'
import notifica from '../Icons/notifica.png'
import Pag from '../Icons/receipt-2.png'

import Home from '../pages/Home/index'


import Clientes from '../pages/Clientes/index.js'
import Pagamento from '../pages/Pagamento/index.js'
import Pedidos from '../pages/Pedidos/index.js'

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="#717174"
      activeColor="#1FA49C"
      barStyle={{ backgroundColor: '#202024' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarLabel: false,
          tabBarIcon: ({color }) => (
            <Feather name="grid" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={Clientes}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={24} />
          ),
        }}
        />
        <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
            tabBarLabel: false,
          tabBarIcon: ({ color }) => (<Image source={Pag} style={{width:30, height:30, marginTop:-5, tintColor: color, borderWidth:1}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}





/*

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
           tabBarOptions={{
            inactiveColor:"#3e2465",
            activeTintColor: '#996DFF',
            showLabel: false,
           
         
    
    }}
        >

            <Tab.Screen name="Home"
                component={Home}
                options={{ headerShown: false }}

            />

            <Tab.Screen name="Clientes"
                component={Clientes}
                options={{ headerShown: false }}

            />
            <Tab.Screen name="Estoque"
                component={Estoque}
                options={{ headerShown: false }}

            />
            <Tab.Screen name="Lembretes"
                component={Lembretes}
                options={{ headerShown: false }}

            />


        </Tab.Navigator>

    );
}
*/
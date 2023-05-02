import { createNativeStackNavigator } from '@react-navigation/native-stack'



import SigIn from '../pages/SigIn/index.js'
import Home from '../pages/Home/index.js'
import Splash from '../pages/Splash/index.js'

import SigUp from '../pages/SingUp/index'
import Boasvindas from '../pages/Boasvindas/index'
import Route from './index.js'
import Menu from '../pages/Home/Menu'
import Addclient from '../pages/Clientes/Addclient'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash"
                component={Splash}
                options={{headerShown: false}}
            />

            <Stack.Screen name="SigIn"
                component={SigIn}
                options={{ headerShown: false, gestureEnabled:false}}
            />
            <Stack.Screen name="Boasvindas"
                component={Boasvindas}
                options={{ headerShown: false, gestureEnabled:false}}
            />

            <Stack.Screen name="SigUp"
                component={SigUp}
                options={{ headerShown: false}}
            />
            <Stack.Screen name="Route"
                component={Route}
                options={{ headerShown: false, gestureEnabled:false}}
            />
            <Stack.Screen name="Menu"
                component={Menu}
                options={{ headerShown: false, gestureEnabled:false}}
            />
            <Stack.Screen name="Addclient"
                component={Addclient}
                options={{ headerShown: false, gestureEnabled:false}}
            />

        </Stack.Navigator>

    );
}
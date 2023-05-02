import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import Pen from "../../Icons/pendente.png"
import Conc from "../../Icons/concluido.png"
import Hora from "../../Icons/Hora.png"


export default function ComponeneteList({ data }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: "center",}}>
                <Text style={{fontSize:16, color: "#E1E1E6", fontWeight:"bold"}}>{data.label}</Text>
                <View style={{flexDirection:"row"}}>
                    <Image source={Hora} style={{ width: "10%", height: "70%", alignSelf: "center", marginRight:1}}></Image>
                    <Text style={{fontSize:12, color:"#C4C4CC",}}>{data.date} ás {data.hora}h</Text>
                </View>

            </View>

            <Image source={Pen} style={{ width: "11%", height: "50%", alignSelf: "center", marginLeft: "50%" }}></Image>


        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121214',
        justifyContent: "center",
        height: 80,
        width: "100%",
        marginTop: 10,
        borderLeftColor: "#fff",
        borderLeftWidth: 7,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
    },

});
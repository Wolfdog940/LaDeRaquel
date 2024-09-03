import { FlatList, View, Text } from "react-native";
import { socialMediaIcons } from "../../assets/icons/icons";


export default function BottonView() {
    return (
        <View style={{paddingHorizontal:20,marginVertical:40,justifyContent:'center',alignItems:'center'}}>
            <FlatList
                data={socialMediaIcons}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const iconName = Object.keys(item)[0];
                    const IconComponent = (item as any)[iconName];
                    return (
                        <View style={{paddingHorizontal:20,}}>
                            {IconComponent}
                        </View>
                    );
                }}
                horizontal={true}/>
            <Text style={{color:'gray',paddingHorizontal:80,textAlign:'center',marginVertical:20}}>Derechos de autor 2024. Todos los derechos reservados</Text>
        </View>
    );
}   
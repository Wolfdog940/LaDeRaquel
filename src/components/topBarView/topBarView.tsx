
import { ScrollView, View, Text } from "react-native";
import { icons } from "../../assets/icons/icons";
import TopBar from "../topBar/topBar";
import { styles } from "./styles";

export default function TopBarView(){
    return(
        
        <View>
            <TopBar
                title='Inicio'
                icon ={icons.alert}
            />
        </View>
          
        
       
    )   
}
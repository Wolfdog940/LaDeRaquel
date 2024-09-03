import { View } from "react-native";
import TopBar from "../../components/topBar/topBar";
import { styles } from "./styles";
import { icons } from "../../assets/icons/icons";

export default function TopBarView() {
    return (
        <View style={styles.container}>
            <TopBar
                title='Inicio'
                icon={icons.alert}
            />
        </View>
    );
}   

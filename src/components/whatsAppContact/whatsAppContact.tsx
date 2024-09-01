import { View ,Text } from "react-native";
import ButtonNative from "../button/button";
import button from "../button/button";
import { styles } from "./styles";


export default function WhatsAppContact() {

    return(
        <View style={styles.container} >
            <Text style={styles.mainText} >Tienes preguntas sobre nuestro servicio</Text>
            <Text style={styles.secondaryText} >Puedes contactarnos por whashap directamente</Text>
            <View style={styles.buttonContainer}>
            <ButtonNative style={styles.button} title={"hola"} onPress={() => {}}>
                <Text style={styles.textButton} >Contacto</Text>
            </ButtonNative>
                    
            </View>
        </View>
    )
}
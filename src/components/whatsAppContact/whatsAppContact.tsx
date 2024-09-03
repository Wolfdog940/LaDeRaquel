import { View, Text, Linking, Alert, Pressable } from "react-native";
import ButtonNative from "../button/button";
import { styles } from "./styles";




export default function WhatsAppContact() {
    const openWhatsApp = () => {
       
        Linking.openURL("https://api.whatsapp.com/send?phone=+34657557672").catch((e) => {
            Alert.alert(
                "Error",
                "No fue posible abrir WhatsApp, contacta al soporte"
            );
            console.error(e);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>¿Tienes preguntas sobre nuestro servicio?</Text>
            <Text style={styles.secondaryText}>Puedes contactarnos por WhatsApp directamente</Text>
            <View style={styles.buttonContainer}>
                <ButtonNative style={styles.button} title={"Contacto"} onPress={openWhatsApp}>
                    <Text style={styles.textButton}>Contacto</Text>
                </ButtonNative>
            </View>
        </View>
    );
}
   

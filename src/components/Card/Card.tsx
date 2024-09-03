import { Text, View, ImageBackground } from "react-native";
import ButtonNative from "../button/button";
import { CardRefactProps } from "../../interfaces/cardRefactProps";
export default function Card({  obj,styles,button }: CardRefactProps) {


   
  return (
    <View style={styles.imageContainer}>
    <ImageBackground source={{ uri: obj?.imagen }} 
                      style={styles.image} 
                      imageStyle={ styles.radius}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{obj?.titulo}</Text>
        {obj?.descripcion && <Text style={styles.description}>{obj?.descripcion}</Text>}
        {button && (
          <View style={styles.buttonContainer}>
            <ButtonNative style={styles.button} title={button?.title ?? ""} onPress={button?.onPress}>
              <Text style={styles.buttonText}>{button?.title}</Text>
            </ButtonNative>
          </View>
        )}
      </View>
    </ImageBackground>
  </View>
  );
}
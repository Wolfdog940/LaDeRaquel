import { Text, View, Image } from "react-native";
import ButtonNative from "../button/button";
import { styles } from "./styles";
import { CardProps } from "../../interfaces/cardProps";

export default function Card({ mainText, description, button, obj }: CardProps) {
   
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: obj?.imagen }} style={styles.image}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{mainText}</Text>
         {description &&  <Text style={styles.description}>{description}</Text>}
          {button && <View style={styles.buttonContainer}>
            <ButtonNative style={styles.button} title={button?.title ?? ""} onPress={button?.onPress ?? (() => {})}>
              <Text style={styles.buttonText}>{button?.title}</Text>
            </ButtonNative>
          </View>}
        </View>
      </View>
  );
}
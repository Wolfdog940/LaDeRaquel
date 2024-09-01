import { Text, View, Image } from "react-native";
import ButtonNative from "../button/button";

import { CardProps } from "../../interfaces/cardProps";
import { styles } from "./styles";

export default function ServiceTratamentCard({ mainText,  obj }: CardProps) {
   
  return (
    <View style={styles.container}>
        
        
      <Image style={styles.image}source={{ uri: obj?.imagen }}/>
        <View>
          <Text style={styles.text}>{mainText}</Text>
         
         
        </View>
      </View>
  );
}
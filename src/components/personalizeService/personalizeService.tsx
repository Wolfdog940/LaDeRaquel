import { Image , Text,  View  } from "react-native";
import {  PersonalizeServiceProps } from "../../interfaces/PersonalizeServiceProps";
import ButtonNative from "../button/button";
import { styles } from "./styles";
import { ImageBackground } from "react-native";
import imageMap from "../../assets/data/imageMap";
import { useEffect } from "react";






export default function PersonalizeService({mainText,description,button,obj}:PersonalizeServiceProps ){ 


    //console.log("Image URL:",`../../assets/images/personalice-service-images/foto${numero}.jpeg` );


  //const {imagen} = obj 
  //console.log("Image URL:",imagen );

   
  


  
  const ima = obj?.imagen
  console.log(obj)

   
const num = 3

    


    
    //const image = require(url)

return (
        <>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{uri: ima}}
              //source={require(imagen)}
              style={styles.image}
            >
              <View style={styles.textContainer}>
              <Text style={styles.title}>{mainText}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.buttonContainer}>
                <ButtonNative style={styles.button} title={button.title} onPress={button.onPress}>
                  <Text style={styles.buttonText}>{button.title}</Text>
                </ButtonNative>
              </View>
            </View>
            </ImageBackground>

          </View>
        </>
      );
    };



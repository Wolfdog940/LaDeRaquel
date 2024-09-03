import { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { ServiceDataProps } from "../../interfaces/serviceDataProps";
import { fetchServiceTreatmentData } from "../../services/apiServices";
import * as Haptics from 'expo-haptics'; // Import the Haptics module
import { styles } from "./styles";
import Card from "../../components/Card/Card";


export default function serviceTratamentView(){
    const {data,error} = useFetch ({fetchConst:fetchServiceTreatmentData});
    const [servicesTratament, SetserviceTratament] = useState<ServiceDataProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: { nativeEvent: { contentOffset: any; layoutMeasurement: any; }; }) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const index = Math.floor(contentOffset.x / layoutMeasurement.width);
        if (index !== currentIndex) {
          setCurrentIndex(index);
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy
          );
        }
      };

    useEffect(() => {
        if(data){
            SetserviceTratament(data);
            console.log(servicesTratament)
        }else if(error){
            console.error("Error fetching data:", error);}
    }, [data, error]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nuestros servicios </Text>
            <FlatList
                    data={servicesTratament}
                    keyExtractor={serviceTratament => serviceTratament.imagen}
                    renderItem={({ item }) =>  {
                        item
                        return (
                            <Card 
                                obj={item} 
                                styles={styles}
                            />
                        );
                    }}
                    horizontal={true}
                    contentContainerStyle={{ padding: 0 }}
                    ItemSeparatorComponent={() => <View style={{ width: 0 }} />}
                    onScroll={handleScroll}
                    viewabilityConfig={{
                        itemVisiblePercentThreshold: 50, // Detecta si el 50% de la tarjeta está visible
                        minimumViewTime: 100, // Tiempo mínimo en milisegundos para considerar visible
                    }}
                    snapToAlignment="center"
                    decelerationRate="fast"
                   showsHorizontalScrollIndicator={false} 
                />
        </View>
    )
}
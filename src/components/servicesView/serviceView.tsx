import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch"
import { fetchServiceData } from "../../services/apiServices"
import { ServiceDataProps } from "../../interfaces/serviceDataProps";
import { FlatList, Vibration, View, Text } from "react-native";
import * as Haptics from 'expo-haptics'; // Import the Haptics module

import ServiceCard from "../serviceCard/serviceCard";
import { styles } from "./styles";

export default function ServicesView () {

    const {data,error} = useFetch ({fetchConst:fetchServiceData});
    const [servicesData, setServicesData] = useState<ServiceDataProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: { nativeEvent: { contentOffset: any; layoutMeasurement: any; }; }) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const index = Math.floor(contentOffset.x / layoutMeasurement.width);
        if (index !== currentIndex) {
          setCurrentIndex(index);
          console.log(`Current index: ${index}`); // Agrega este log para verificar el índice
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy
          ); // Vibración sutil
        }
      };


    useEffect(() => {
        if(data){
            setServicesData(data);
            console.log(servicesData)
        }else if(error){
            console.error("Error fetching data:", error);}
    }, [data, error]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nuestros Servicios </Text>
            <FlatList
                    
                    data={servicesData}
                    keyExtractor={serviceData => serviceData.nombre}
                    renderItem={({ item, index }) =>  {
                        console.log(`este es el item ${JSON.stringify(item)}`); 
                        return (
                            <ServiceCard 
                                mainText={item.nombre}
                                obj={item} 
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
};

import { useState, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { PersonalizeServiceData } from "../../interfaces/PersonalizeServiceProps";
import { fetchPersonalizeServiceData } from "../../services/apiServices";
import PersonalizeService from "../personalizeService/personalizeService";
import { Animated, Easing } from "react-native";




export default function PersonalizeServiceView() {

    const [personalizeServiceData, setPersonalizeServiceData] = useState<PersonalizeServiceData[]>([]);
    const [number , setNumber] = useState<number>(0);

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const translateAnim = useRef(new Animated.Value(0)).current;
    

    const { data, error } = useFetch({ fetchConst: fetchPersonalizeServiceData });

  
        
    useEffect(() => {
        if (data) {
            setPersonalizeServiceData(data);
            
            
        }
        else if (error) {
            console.error("Error fetching data:", error);
        }
    }, [data,error]);

  

 
    useEffect(() => {
        if (personalizeServiceData.length > 0) {
            const intervalId = setInterval(() => {
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateAnim, {
                        toValue: 100,
                        duration: 0,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateAnim, {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.bounce,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    const randomNumber = Math.floor(Math.random() * 12) + 1;
                    setNumber(randomNumber - 1);
                });
            }, 10000); // Intervalo de 5000 ms (5 segundos)
    
            // Limpieza del intervalo
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [personalizeServiceData]);
    

 
   


    return (
        <>
            <PersonalizeService mainText={personalizeServiceData[number]?.titulo}
            obj={personalizeServiceData[number]}
            description={personalizeServiceData[number]?.descripcion} button={{
                title: 'Reservar cita',
                onPress: function (): void {
                    throw new Error('Function not implemented.');
                }
            }}/>
        </>
    )
}
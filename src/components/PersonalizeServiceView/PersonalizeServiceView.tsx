
import { useState, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { PersonalizeServiceData } from "../../interfaces/PersonalizeServiceProps";
import { fetchPersonalizeServiceData } from "../../services/apiServices";
import PersonalizeService from "../personalizeService/personalizeService";
import { Animated, Easing,Text } from "react-native";




export default function PersonalizeServiceView() {

    const [personalizeServiceData, setPersonalizeServiceData] = useState<PersonalizeServiceData[]>([]);
    const [number1 , setNumber2] = useState<number>(0);
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
    

    const counter = () => {
        setNumber2((prevIndex) => (prevIndex + 1) % personalizeServiceData.length);
    };

  

 
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
                    counter();
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
            {personalizeServiceData.length > 0 && number1 >= 0 && number1 < personalizeServiceData.length ? (
            <PersonalizeService 
                mainText={personalizeServiceData[number1]?.titulo || 'Título no disponible'}
                obj={personalizeServiceData[number1]}
                description={personalizeServiceData[number1]?.descripcion || 'Descripción no disponible'} 
                button={{
                    title: 'Reservar cita',
                    onPress: function (): void {
                        console.log('Reservar cita presionado');
                        // Implementar la lógica de reserva aquí
                    }
                }}
            />
        ) : (
            <Text>Cargando...</Text> // O algún componente de carga/estado
        )}
        </>
    )
}
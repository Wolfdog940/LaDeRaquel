
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { PersonalizeServiceData } from "../../interfaces/PersonalizeServiceProps";
import { fetchPersonalizeServiceData } from "../../services/apiServices";
import { Text } from "react-native";
import { styles } from "./styles";
import Card from "../Card/card";



export default function PersonalizeServiceView() {
    const [personalizeServiceData, setPersonalizeServiceData] = useState<PersonalizeServiceData[]>([]);
    const [number1, setNumber2] = useState<number>(0);
    const { data, error } = useFetch({ fetchConst: fetchPersonalizeServiceData });

    useEffect(() => {
        if (data) {
            setPersonalizeServiceData(data);
        } else if (error) {
            console.error("Error fetching data:", error);
        }
    }, [data, error]);

    const counter = () => {
        setNumber2((prevIndex) => (prevIndex + 1) % personalizeServiceData.length);
    };

    useEffect(() => {
        if (personalizeServiceData.length > 0) {
            const intervalId = setInterval(() => {
                counter();
            }, 8000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [personalizeServiceData]);

    return (
        <>
            {personalizeServiceData.length > 0 && number1 >= 0 && number1 < personalizeServiceData.length ? (
                <Card
                    
                    obj={personalizeServiceData[number1]}
                    styles={styles}
                    button={{
                        title: 'Reservar cita',
                        onPress: function (): void {
                            console.log('Reservar cita presionado');
                        }
                    }}
                />
            ) : (
                <Text>Cargando...</Text>
            )}
        </>
    );
}
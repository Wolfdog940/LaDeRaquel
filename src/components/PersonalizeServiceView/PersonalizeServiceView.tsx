
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { PersonalizeServiceData } from "../../interfaces/PersonalizeServiceProps";
import { fetchPersonalizeServiceData } from "../../services/apiServices";
import PersonalizeService from "../personalizeService/personalizeService";





export default function PersonalizeServiceView() {

    const [personalizeServiceData, setPersonalizeServiceData] = useState<PersonalizeServiceData[]>([]);
    const [number , setNumber] = useState<number>(0);
    

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
                const randomNumber = Math.floor(Math.random() * 3)+1;
               
                    setNumber(randomNumber-1);
                
                    //console.log(personalizeServiceData[number])
                
                //console.log(`url: ${personalizeServiceData[number]?.imagen}`);
            }, 6000); // Intervalo de 5000 ms (5 segundos)
            
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
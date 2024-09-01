import { data } from "../assets/data/data";

export const fetchPersonalizeServiceData = async () => {
    try {
        const personalServizes = data.personalizeServices;
        return personalServizes;
        
    } catch (error) {
        console.error(`Este error del fetch apiServices: ${error}`);
        throw new Error('Error fetching personalize service data');
    }
};




export const fetchServiceData = async () => {
    try {
        const services = data.services;
        return services;
        
    } catch (error) {
        console.error(`Este error del fetch apiServices: ${error}`);
        throw new Error('Error fetching personalize service data');
    }
};




export const fetchServiceTreatmentData = async () => {
    try {
        const serviceTreatments = data.serviceTreatments;
        return serviceTreatments;
        
    } catch (error) {
        console.error(`Este error del fetch apiServices: ${error}`);
        throw new Error('Error fetching personalize service data');
    }
};
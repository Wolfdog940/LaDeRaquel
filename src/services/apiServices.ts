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
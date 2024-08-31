export interface PersonalizeServiceProps {
    mainText: string;
    description: string;
    
    button: {
        title: string;
        onPress: () => void;
    };
    obj: any;
}
export interface PersonalizeServiceData {
    imagen: string;
    descripcion: string;
    titulo: string;
    personalizeServices: {
        id: number;
        titulo: string;
        descripcion: string;
        imagen: string;
    };
}
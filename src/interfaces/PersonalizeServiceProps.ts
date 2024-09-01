export interface PersonalizeServiceProps {
    mainText: string; // Prop requerida
    description?: string; // Prop opcional
    button?: { // Prop opcional
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
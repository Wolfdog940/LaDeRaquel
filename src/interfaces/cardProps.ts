export interface CardProps {
    mainText: string; // Prop requerida
    description?: string; // Prop opcional
    button?: { // Prop opcional
      title: string;
      onPress: () => void;
    };
    obj: any;
}
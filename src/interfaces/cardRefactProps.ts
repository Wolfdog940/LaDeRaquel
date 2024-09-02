export interface CardRefactProps {
    obj: any;
    styles: any;
    button?: { // Prop opcional
        title: string;
        onPress: () => void;
      };
}
import { ButonProps } from "../../interfaces/butonProps";
import { Button, Pressable } from "react-native";
import { styles } from "../topBar/styles";


export default function ButtonNative ({style,children,onPress}:ButonProps) {
    return(
        <Pressable style={[style, style]} onPress={onPress}>
            {children}
        </Pressable>
    )

}
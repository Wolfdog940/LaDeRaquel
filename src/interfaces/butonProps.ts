import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ButonProps {
        title: string;
        onPress: () => void;
        style?: StyleProp<ViewStyle>;
        children?: ReactNode;
}



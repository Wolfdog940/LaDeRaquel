import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { TopBarProps } from '../../interfaces/TopBarProps';

export default function TopBar({ title, icon }: TopBarProps) {
    return (
        <View style={styles.topBarContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
                <StatusBar style="auto" />
            </View>
            <View style={styles.iconContainer}>
                {icon}
            </View>
        </View>
    );
}
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { styles } from '../../components/topBar/styles';
import TopBar from '../../components/topBar/topBar';
import { icons } from '../../assets/icons/icons';
import React from 'react';
import TopBarView from '../../components/topBarView/topBarView';
import PersonalizeService from '../../components/personalizeService/personalizeService';
import PersonalizeServiceView from '../../components/PersonalizeServiceView/PersonalizeServiceView';

export default function Home() {


    return (
    <View >
        <TopBarView/>
        <PersonalizeServiceView/>
    </View>
    
    )
}


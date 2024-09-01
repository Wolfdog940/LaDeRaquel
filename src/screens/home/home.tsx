import { View } from 'react-native';
import React from 'react';
import TopBarView from '../../components/topBarView/topBarView';
import PersonalizeServiceView from '../../components/PersonalizeServiceView/PersonalizeServiceView';
import ServicesView from '../../components/servicesView/serviceView';

export default function Home() {


    return (
    <View >
        <TopBarView/>
        <PersonalizeServiceView/>
        <ServicesView/>

    </View>
    
    )
}


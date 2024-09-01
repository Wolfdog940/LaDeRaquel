import { ScrollView, View } from 'react-native';
import React from 'react';
import TopBarView from '../../components/topBarView/topBarView';
import PersonalizeServiceView from '../../components/PersonalizeServiceView/PersonalizeServiceView';
import ServicesView from '../../components/servicesView/serviceView';
import ServiceTratamentView from '../../components/serviceTratamentView/serviceTratamentView';
import WhatsAppContact from '../../components/whatsAppContact/whatsAppContact';
import BottonView from '../../components/bottonView/bottonView';

export default function Home() {


    return (
    <ScrollView >
        <TopBarView/>
        <PersonalizeServiceView/>
        <ServicesView/>
        <ServiceTratamentView/>
        <WhatsAppContact/>
        <BottonView/>
    </ScrollView>
    
    )
}


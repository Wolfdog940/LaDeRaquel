import { ScrollView } from 'react-native';
import React from 'react';
import WhatsAppContact from '../../components/whatsAppContact/whatsAppContact';
import { TopBarView, PersonalizeServiceView, ServicesView, ServiceTratamentView } from '../../views';
import BottonView from '../../views/bottonView/bottonView';


export default function Home() {
    return (
        <>
            <TopBarView/>
            <ScrollView>
                <PersonalizeServiceView/>
                <ServicesView/>
                <ServiceTratamentView/>
                <WhatsAppContact/>
                <BottonView/>
            </ScrollView>
        </>
    );
}


import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    topBarContainer: {
        // Asegura que esté encima de otros componentes
        backgroundColor: 'red',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    scrollViewContent: {
        paddingTop: 65, // Ajusta según la altura de la TopBar
    },
});
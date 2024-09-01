import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        paddingHorizontal: 10,
    },
    mainText:{
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 100
        
    },
    secondaryText:{
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: 60
    },
    image: {
        width: 250,
        height: 125,
        borderRadius: 15, // Cambia si necesitas bordes redondeados
      },
      button: {
        backgroundColor: "#19e619",
        width: 120,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginBottom: 15,
      },
      buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        },
    textButton:{
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    }
});
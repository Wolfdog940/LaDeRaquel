import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 350,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 15,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 80,
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '90%',
    },
    button: {
        backgroundColor: "#19e619",
        width: 120,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginBottom: 15,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
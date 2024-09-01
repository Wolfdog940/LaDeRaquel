import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    topBarContainer: {
        backgroundColor: '#fff',
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        
    },
    textContainer: {
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
      },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        marginRight: 20,
        
      },
});
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
    topBarContainer: {
        backgroundColor: 'red',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    scrollViewContent: {
        paddingTop: 65,
    },
});
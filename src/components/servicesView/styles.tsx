import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 15, // Cambia si necesitas bordes redondeados
    height: 100,
    width: 200,
  },
  imageContainer: {
    borderRadius: 15, // Cambia si necesitas bordes redondeados
    margin: 1,
    padding: 8,
  },
  radius: {
    borderRadius: 15,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 75,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    height: 100,
    width: 200,
  }
});
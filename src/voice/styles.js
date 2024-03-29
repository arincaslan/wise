import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    button: {
      width: '20%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    container: {
      display: 'flex',
      flex: 1,  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    action: {
      textAlign: 'center',
      color: '#0000FF',
      marginVertical: 5,
      fontWeight: 'bold',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    stat: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
    },
  });

  export default styles;
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        viewHeader: {
            height: 130,

        },

        textHeader: {
            height: 600,
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: "center",
            marginTop: 10,
        },

        imgLogo: {
            flex: 1,
            width: 480,
            height: 670,
            alignSelf: 'center', 
            opacity: 0.5,
        },
        
        viewConteudo:{
            flex: 9,
        },

        textConteudo:{
            fontWeight: "bold",
            fontSize: 18,
        },

        imgPlay:{
            width:140,
            height: 140,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 30,
        },

        imgGame:{
            width:100,
            height: 100,
        },

        imgJogador1: {
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent:'space-evenly',
            alignSelf: 'center',
            marginBottom: 60,
        },
        imgJogador2: {
            display: 'flex', 
            flexDirection: 'row', 
            alignSelf: 'center',
        },
        imgJogador3: {
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent:'space-evenly',
            alignSelf: 'center',
            marginBottom: 30,
        },

        textResultado:{
            fontSize: 18,
            textAlign: 'center',
        },

        viewFooter:{
            height: 30,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center"
        },

        textFooter:{
            fontWeight: "bold",
            fontSize: 18
        }
    })
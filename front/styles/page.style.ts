import { StyleSheet } from "react-native";

export const pageStyle = StyleSheet.create({
    container: {
        marginTop: "10%"
    },
    pageTitle: {
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "5%",
        lineHeight:30,
        fontSize: 30,
    },

    infoDisplayPosition: {
        marginBottom: 15,
        marginLeft: 40,
        height: 80,
        width: "100%",
    },
    infoInput: {
        paddingLeft:20,
        borderRadius: 15,
        // backgroundColor:"#ffffff55",
        color: "white",
        height: "50%",
        width: "60%",
        marginLeft: "5%",
    },
    infoInput2: {
        paddingLeft:20,
        borderRadius: 15,
        backgroundColor:"#ffffff55",
        color: "white",
        height: "50%",
        width: "60%",
        marginLeft: "5%",
    },
    centeredBtn: {
        alignItems: "center",
        height:200,
        marginTop: 20,
        marginBottom:20,
    },
    cornerRightTop: {
        position: "absolute",
        right:"5%",
        marginTop: 15,
        marginBottom:20,
    }
})
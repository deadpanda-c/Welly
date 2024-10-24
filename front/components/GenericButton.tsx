import { GestureResponderEvent, ImageStyle, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface GenericButtonProps {
    text: string;
    backgroundColor?: string;
    onPress?: (event: GestureResponderEvent) => void;
    buttonStyle?: ViewStyle | TextStyle | ImageStyle;
    textColor?: string;
}

export default function GenericButton(props: GenericButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <ThemedView style={[{ backgroundColor: props.backgroundColor ?? "orange" }, style.buttonContainer, props.buttonStyle]} >
                <ThemedText style={{color: props.textColor}} type="defaultSemiBold">{props.text}</ThemedText>
            </ThemedView>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        padding: "5%",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})
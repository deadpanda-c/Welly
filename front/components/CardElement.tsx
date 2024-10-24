import { GoalProps } from "@/interfaces/interface";
import { ThemedView } from "./ThemedView";
import { StyleSheet, Text } from "react-native";

export function CardElement(props: { goal: GoalProps, backgroundColor?: string }) {
    return (
        <ThemedView style={[style.cardContainer, {backgroundColor: props.backgroundColor ?? "#D3D3D3"}]}>
            <Text style={style.title}>{props.goal.title}</Text>
        </ThemedView>
    )
}

const style = StyleSheet.create({
    cardContainer: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 20
    }
})

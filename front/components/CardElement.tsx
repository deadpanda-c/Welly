import { GoalProps } from "@/interfaces/interface";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

export function CardElement(props: { goal: GoalProps, backgroundColor?: string }) {
    return (
        <ThemedView style={[style.cardContainer, {backgroundColor: props.backgroundColor ?? "#D3D3D3"}]}>
            <ThemedText style={style.title}>{props.goal.title}</ThemedText>
        </ThemedView>
    )
}

const style = StyleSheet.create({
    cardContainer: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        borderWidth: 2,
    },
    title: {
        textAlign: "center"
    }
})

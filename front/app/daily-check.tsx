import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function DailyCheck() {
    return (
        <ThemedView style={style.container}>
            <ThemedText>Daily check</ThemedText>
        </ThemedView>
    );
}

const style = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
})
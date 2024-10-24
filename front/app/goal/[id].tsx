import GenericButton from "@/components/GenericButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { GoalProps } from "@/interfaces/interface";
import { pageStyle } from "@/styles/page.style";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function goal() {
    const { id, isMine } = useLocalSearchParams();
    const goal: GoalProps = {
        title: "Drink more water",
        description: " reiufhzifhnzlkuflkr fufeiurahialjrzhuizqbefffhbz",
        goals: ["Drink water", "Smoke a lot", "Testing sucks"],
        id: Number(id)
    }

    return (
        <ThemedView style={[style.container]}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <ThemedView style={style.body}>
                <ThemedText style={style.title}>{goal.title}</ThemedText>
                <ThemedText style={style.description}>{goal.description}</ThemedText>
                <ThemedView style={style.steps}>{goal.goals.map((elem, index) => {
                    return (
                        <ThemedText type="defaultSemiBold" key={index}>{elem}</ThemedText>
                    )
                })}</ThemedView>
                <ThemedView style={style.button}>
                    <GenericButton textColor="white" text={isMine ? "Remove" : "Add"} backgroundColor={isMine ? "red" : "green"} /></ThemedView>
            </ThemedView>
            </ScrollView>
        </ThemedView>
    )
}

const style = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    body: {
        width: "80%",
        paddingVertical: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Start items from top
        alignSelf: "center",
    },
    title: {
        fontSize: 24, // Slightly increase font size for more impact
        textAlign: "center",
        alignSelf: "center",
        marginBottom: 30, // Add more margin between the title and the next element
    },
    description: {
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        marginTop: 20,
        marginBottom: 40,
        height: 50,
        width: "60%",
    },
    steps: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 10,
        marginBottom: 20,
    },
});

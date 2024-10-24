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
        description: " reiufhzifhnzlkuflkr fufeiurahialjrzhuizqbefffhbz foihruoizfheiuzgfreugrfnoioijzoiher reiufhzifhnzlkuflkr fufeiurahialjrzhuizqbefffhbz foihruoizfheiuzgfreugrfnoioijzoiher reiufhzifhnzlkuflkr fufeiurahialjrzhuizqbefffhbz foihruoizfheiuzgfreugrfnoioijzoiher reiufhzifhnzlkuflkr fufeiurahialjrzhuizqbefffhbz foihruoizfheiuzgfreugrfnoioijzoiher ",
        goals: ["Drink water", "Smoke a lot", "Testing sucks"],
        id: Number(id)
    }

    return (
        <ThemedView style={[style.container]}>
            <ThemedView style={style.body}>
                <ThemedText style={style.title}>{goal.title}</ThemedText>
                <ThemedText style={style.description}>{goal.description}</ThemedText>
                <ThemedView style={style.steps}>{goal.goals.map((elem, index) => {
                    return (
                        <ThemedText key={index}>{elem}</ThemedText>
                    )
                })}</ThemedView>
                <ThemedView style={style.button}>
                    <GenericButton text={isMine ? "Remove" : "Add"} backgroundColor={isMine ? "red" : "green"} /></ThemedView>
            </ThemedView>
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
        justifyContent: "space-around",
    },
    body: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center"
    },
    title: {
        fontSize: 20,
        height: "10%",
        textAlign: "center",
        alignSelf: "center"
    },
    description: {
        height: "25%",
        textAlign: "center"
    },
    button: {
        height: "10%",
        width: "50%"
    },
    steps: {
        height: "40%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    }
})
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';
import FlameSvg from "@/assets/icons/flame.svg";
import { GoalProps } from '@/interfaces/interface';
import { CardElement } from '@/components/CardElement';
import GenericButton from '@/components/GenericButton';
import { router } from 'expo-router';

interface GoalsContainerProps {
    title: string;
    goals: GoalProps[];
}

function GoalsContainer(props: GoalsContainerProps) {
    return (
        <ThemedView style={style.goalsContainer}>
            <ThemedText type='defaultSemiBold' style={style.goalContainerTitle}>{props.title}</ThemedText>
            <ThemedView style={style.goals}>
                {(props.goals).map((goal, index) => (
                    <ThemedView key={index} style={style.cardContainer}>
                        <TouchableOpacity onPress={() => router.navigate(`/goal/${goal.id}`)}>
                        <CardElement goal={goal} /></TouchableOpacity>
                    </ThemedView>
                ))}
            </ThemedView>
        </ThemedView>
    );
}

export default function HomeScreen() {
    const mygoals: GoalProps[] = [{
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 1
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }, {
        description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
        goals: ["Drink water", "drink coffe"],
        title: "Drink more water",
        id: 2
    }];
    return (
        <ThemedView style={pageStyle.container}>
            <ThemedView style={style.header}>
                <ThemedText type='defaultSemiBold'>Welcome eiidn</ThemedText>
                <ThemedView style={style.streak}>
                    <FlameSvg width={"60%"} height={"50%"} />
                    <ThemedText type='defaultSemiBold'>7</ThemedText>
                </ThemedView>
            </ThemedView>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <ThemedView style={style.body}>
                    <ThemedView style={style.dailyCheck}>
                        <GenericButton text='Daily Check' onPress={() => {router.navigate("/daily-check")}} />
                    </ThemedView>
                    <GoalsContainer goals={mygoals} title={"My goals"} />
                    <GoalsContainer goals={mygoals} title={"Discover"} />
                </ThemedView>
            </ScrollView>
        </ThemedView>
    );
}

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 80,
        width: "100%"
    },
    streak: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "15%",
        height: "100%"
    },
    body: {
        width: "100%",
        paddingVertical: 20,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    goalsContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 20,
        width: "80%",
    },
    goals: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    goalContainerTitle: {
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    cardContainer: {
        width: "45%",
        marginBottom: 15,
        aspectRatio: 1,
    },
    dailyCheck: {
        height: "4%",
        width: "50%",
        marginBottom: 20
    },
});

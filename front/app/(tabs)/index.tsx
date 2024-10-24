import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';
import FlameSvg from "@/assets/icons/flame.svg";
import { CardElement } from '@/components/CardElement';
import GenericButton from '@/components/GenericButton';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';

const host = process.env.EXPO_PUBLIC_HOST;

// Interfaces
// localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GoalsContainerProps {
    title: string;
    goals: GoalProps[];
}

interface GoalProps {
    description: string;
    goals: string[];
    title: string;
    id: number;
}

function GoalsContainer(props: GoalsContainerProps) {
    return (
        <ThemedView style={style.goalsContainer}>
            <ThemedText type='defaultSemiBold' style={style.goalContainerTitle}>{props.title}</ThemedText>
            <ThemedView style={style.goals}>
                {props.goals.map((goal, index) => (
                    <ThemedView key={index} style={style.cardContainer}>
                        <TouchableOpacity onPress={() => router.navigate(`/goal/${goal.id}`)}>
                            <CardElement goal={goal} />
                        </TouchableOpacity>
                    </ThemedView>
                ))}
            </ThemedView>
        </ThemedView>
    );
}

export default function HomeScreen() {

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            return value;
          }
        } catch (e) {
          console.error(e);
        }
        return undefined;
      }

    const [mygoals, setMygoals] = useState<GoalProps[]>([]);  // Initialize with an empty array
    const [notmygoals, setNotMygoals] = useState<GoalProps[]>([]);
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch goals from the API
    const fetchGoals = async () => {
        try {
            const token = await getData();
            const response = await fetch(`http://${host}:5000/my_goals`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(res => res.json())
            .catch(error => {
                throw(error)
            })

            if (response) {
                if (response["favorites"])
                    setMygoals(response["favorites"]);
            } else {
                console.error('Erreur lors de la requête à l\'API');
            }
        } catch (error) {
            console.error('API request error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchNotGoals = async () => {
        try {
            const token = await getData();
            const response = await fetch(`http://${host}:5000/not_my_goals`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(res => res.json())
            .catch(error => {
                throw(error)
            })

            if (response) {
                if (response["not_favorites"])
                    setNotMygoals(response["not_favorites"]);
            } else {
                console.error('Erreur lors de la requête à l\'API');
            }
        } catch (error) {
            console.error('API request error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Trigger fetchGoals when the component mounts
    useEffect(() => {
        fetchGoals();
        fetchNotGoals();
    }, []);

    if (loading) {
        return (
            <ThemedView style={pageStyle.container}>
                <ThemedText>Loading...</ThemedText>
            </ThemedView>
        );
    }

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
                        <GenericButton text='Daily Check' onPress={() => { router.navigate("/daily-check") }} />
                    </ThemedView>
                    <GoalsContainer goals={mygoals} title={"My goals"} />
                    <GoalsContainer goals={notmygoals} title={"Discover"} />
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
        minHeight: 50,
        height: "4%",
        width: "50%",
        marginBottom: 20
    },
});

import { Button, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';
import FlameSvg from "@/assets/icons/flame.svg";
import { GoalProps } from '@/interfaces/interface';
import { CardElement } from '@/components/CardElement';

interface GoalsContainerProps {
  title: string;
  goals: GoalProps[];
}

function GoalsContainer(props: GoalsContainerProps) {

  return (
    <ThemedView style={style.goalsContainer}>
      <ThemedText style={style.goalContainerTitle}>{props.title}</ThemedText>
      <ThemedView style={style.goals}>
        {(props.goals).map((goal, index) => {
          return (
            <ThemedView key={index} style={style.cardContainer}><CardElement goal={goal} /></ThemedView>)
        })}
      </ThemedView>
    </ThemedView>
  )
}

export default function HomeScreen() {
  const mygoals = [{
    description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
    goals: ["Drink water", "drink coffe"],
    title: "Drink more water"
  }, {
    description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
    goals: ["Drink water", "drink coffe"],
    title: "Drink more water"
  }, {
    description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
    goals: ["Drink water", "drink coffe"],
    title: "Drink more water"
  }, {
    description: "lorem ipsuuefhzidh fdrink ore watzr to be healthy",
    goals: ["Drink water", "drink coffe"],
    title: "Drink more water"
  }]

  return (
    <ThemedView style={pageStyle.container}>
      <ThemedView style={style.header}>
        <ThemedText type='defaultSemiBold'>Welcome eiidn</ThemedText>
        <ThemedView style={style.streak}>
          <FlameSvg width={"60%"} height={"50%"} />
          <ThemedText type='defaultSemiBold'>7</ThemedText>
        </ThemedView>
      </ThemedView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} >
        <ThemedView style={style.body}>
          <ThemedView style={style.dailyCheck}><ThemedText>Daily check</ThemedText></ThemedView>
          <GoalsContainer goals={mygoals} title={"My goals"} />
          <GoalsContainer goals={mygoals} title={"Discover"} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "10%",
    width: "100%"
  },
  streak: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "15%",
    height: "100%"
  },
  flame: {
    height: 20,
    width: 20
  },
  body: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "scroll"
  },
  goalsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "50%",
    width: "90%"
  },
  goals: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "85%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  goalContainerTitle: {
    textAlign: "left"
  },
  cardContainer: {
    width: 150,
    height: 150
  },
  dailyCheck: {
    height: "10%",
    textAlign: "center"
  }
})

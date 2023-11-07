import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import DayButton from "./DayButton";
import DayTask from "../ItemList";
import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

import { useWeekDay } from "../../contexts/WeekDayContext";

const windowHeight = Dimensions.get("window").height;

export const Routine = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  const { weekDayContext, setWeekDayContext } = useWeekDay();

  const weekDays = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
  ];
  const tasks = [
    {
      id: "0",
      hour: "7:20",
      label: "Acordar",
      color: "GRAY",
      day: "Segunda-Feira",
    },
    {
      id: "1",
      hour: "7:30",
      label: "Remédio 1",
      color: "LIGHT_GREEN",
      day: "Segunda-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Café da manhã terça",
      color: "YELLOW",
      day: "Terça-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Café da manhã quarta",
      color: "YELLOW",
      day: "Quarta-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Café da manhã quarta",
      color: "YELLOW",
      day: "Quarta-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Café da manhã quinta",
      color: "YELLOW",
      day: "Quinta-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Café da manhã sexta",
      color: "YELLOW",
      day: "Sexta-Feira",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Acordar sab",
      color: "YELLOW",
      day: "Sábado",
    },
    {
      id: "2",
      hour: "7:40",
      label: "Acordar dom",
      color: "YELLOW",
      day: "Domingo",
    },
  ];

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.routine}>
      <Text style={styles.routineTitle}>Rotina diária</Text>

      <View style={styles.routineDayContainer}>
        {weekDays.map((weekDay, index) => {
          return (
            <DayButton
              key={index}
              onPress={() => {
                setWeekDayContext(weekDay);
              }}
              isActive={weekDayContext === weekDay}
              label={weekDay[0]}
            />
          );
        })}
      </View>

      <Text style={[styles.routineDayTitle]}>{weekDayContext}</Text>

      <View style={styles.list}>
        <ScrollView>
          {tasks
            .filter((task) => task.day === weekDayContext)
            .map((task, index) => {
              return <DayTask data={task} />;
            })}
        </ScrollView>
      </View>

      <View style={styles.button}>
        <Button title="Adicionar Tarefa" type="secondary">
          <Feather name="plus" size={18} color={Colors.BLUE} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  routine: {
    marginTop: 20,
    gap: 10,
    flex: 1,
  },
  routineTitle: {
    fontSize: "1.3rem",
    marginBottom: 2,
    fontFamily: "Poppins_600SemiBold",
  },
  routineDayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  routineDayTitle: {
    fontSize: "1.2rem",
    marginBottom: 2,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    marginTop: 12,
  },
  list: {
    maxHeight: windowHeight / 2,
  },
  button: {
    alignSelf: "center",
    marginTop: 10,
  },
});

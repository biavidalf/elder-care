import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Header from "./../../components/Header";
import DayButton from "../../components/WeekDay/Button";
import DayTask from "../../components/WeekDay/TaskContainer";
import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

export const Home = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_600SemiBold });
  const [selectedWeekDay, setSelectedWeekDay] = useState("segunda");

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.main}>
      <Header navigation={navigation} />

      <View style={styles.routine}>
        <Text style={styles.routineTitle}>Rotina diária</Text>

        <View style={styles.routineDayContainer}>
          <DayButton isActive={selectedWeekDay === "segunda"} label="S" />
          <DayButton isActive={selectedWeekDay === "terca"} label="T" />
          <DayButton isActive={selectedWeekDay === "quarta"} label="Q" />
          <DayButton isActive={selectedWeekDay === "quinta"} label="Q" />
          <DayButton isActive={selectedWeekDay === "sexta"} label="S" />
          <DayButton isActive={selectedWeekDay === "sabado"} label="S" />
          <DayButton isActive={selectedWeekDay === "domingo"} label="D" />
        </View>

        <Text style={[styles.routineTitle, styles.routineDayTitle]}>
          Segunda-feira
        </Text>

        <DayTask />
        <DayTask hour="7:30" label="Remédio 1" color="LIGHT_GREEN" />

        <View style={{ alignSelf: "center" }}>
          <Button title="Adicionar Tarefa" type="secondary">
            <Feather name="plus" size={18} color={Colors.BLUE} />
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  routine: {
    marginTop: 20,
    gap: 10,
    flex: 1,
  },
  routineTitle: {
    fontSize: 18,
    marginBottom: 2,
    fontFamily: "Poppins_600SemiBold",
  },
  routineDayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  routineDayTitle: {
    textAlign: "center",
    marginTop: 12,
  },
});

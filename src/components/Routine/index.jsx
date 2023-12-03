import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { TaskContainer } from "../ItemList";
import DayButton from "./DayButton";

import { useWeekDay } from "../../contexts/WeekDayContext";
import { ModalCustom } from "../Modal";
import { SelectField } from "../SelectField";
import { TextField } from "../TextField";
import { useState } from "react";
import { Button } from "../Button";
import { TimeField } from "../TimeField";

const windowHeight = Dimensions.get("window").height;

export const Routine = () => {
  const { weekDayContext, setWeekDayContext } = useWeekDay();
  const [selectedCategory, setSelectedCategory] = useState("geral");
  const [date, setDate] = useState(new Date(1598051730000));
  const [showTimepicker, setShowTimepicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowTimepicker(false);
    setDate(currentDate);
  };

  const showPicker = () => {
    setShowTimepicker(true);
  };

  const categories = [
    {
      label: "Geral",
      value: "geral",
    },
    {
      label: "Medicamento",
      value: "medicamento",
    },
    {
      label: "Alimentação",
      value: "alimentacao",
    },
    {
      label: "Atividade Física",
      value: "atividadeFisica",
    },
  ];

  const weekDays = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
  ];
  const weekDaysSelectValues = [
    {
      label: "Segunda-Feira",
      value: "Segunda-Feira",
    },
    {
      label: "Terça-Feira",
      value: "Terça-Feira",
    },
    {
      label: "Quarta-Feira",
      value: "Quarta-Feira",
    },
    {
      label: "Quinta-Feira",
      value: "Quinta-Feira",
    },
    {
      label: "Sexta-Feira",
      value: "Sexta-Feira",
    },
    {
      label: "Sábado",
      value: "Sábado",
    },
    {
      label: "Domingo",
      value: "Domingo",
    },
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
              return <TaskContainer key={index} data={task} />;
            })}
        </ScrollView>
      </View>
      <View style={styles.button}>
        <ModalCustom title="Adicionar Tarefa">
          <SelectField
            selectedValue={selectedCategory}
            setSelectedValue={setSelectedCategory}
            values={categories}
            label="Categoria"
            dialogTitle="Selecione a categoria"
          />

          <View style={{gap: 20, flexDirection: "row", width: "100%"}}>
            <View style={{flex:1}}>
              <SelectField
                selectedValue={weekDayContext}
                setSelectedValue={setWeekDayContext}
                values={weekDaysSelectValues}
                label="Dia da Semana"
                dialogTitle="Selecione o dia da semana"
              />
            </View >

            <View>
              <TimeField hour={date.getHours()} minutes={date.getMinutes()} showFuncion={showPicker} />
              {showTimepicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>
          </View>

          {/* {
            selectedCategory === "medicamento" &&
            <TextField
              type="text"
              name="medicamento"
              label="Medicamento"
              placeholder="Selecione o medicamento"
            />
          } */}
        </ModalCustom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  routine: {
    marginTop: 20,
    flex: 1,
    gap: 10,
  },
  routineTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    marginBottom: 2,
  },
  routineDayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  routineDayTitle: {
    fontSize: 19,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginTop: 12,
    marginBottom: 2,
  },
  list: {
    maxHeight: windowHeight / 2,
  },
  button: {
    marginTop: 10,
    alignSelf: "center",
  },
});

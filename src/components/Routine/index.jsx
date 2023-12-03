import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { TaskContainer } from "../ItemList";
import DayButton from "./DayButton";

import { useWeekDay } from "../../contexts/WeekDayContext";
import { ModalCustom } from "../Modal";
import { SelectField } from "../SelectField";
import { TextField } from "../TextField";
import { TimeField } from "../TimeField";

const windowHeight = Dimensions.get("window").height;

export const Routine = () => {
  const { weekDayContext, setWeekDayContext } = useWeekDay();

  const [weekDay, setWeekDay] = useState(weekDayContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDrugs, setSelectedDrugs] = useState("");
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("geral");

  const [date, setDate] = useState(new Date(1598051730000));

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
      inputs: (index) => {
        return (
          <View style={styles.mainGap} key={index}>
            <TextField name="title" label="Título" placeholder="" />
            <TextField name="observacoes" label="Observações" placeholder="" />
          </View>
        );
      },
    },
    {
      label: "Medicamento",
      value: "medicamento",
      inputs: (index) => {
        return (
          <View
            style={[
              styles.mainGap,
              { gap: 20, flexDirection: "row", width: "100%" },
            ]}
            key={index}
          >
            <View style={{ flex: 1 }}>
              <SelectField
                selectedValue={selectedDrugs}
                setSelectedValue={setSelectedDrugs}
                values={["Dipirona", "Paracetamol"]}
                label="Remédio"
              />
            </View>
            <View>
              <TextField name="quantidade" label="Quantidade" placeholder="0" />
            </View>
          </View>
        );
      },
    },
    {
      label: "Alimentação",
      value: "alimentacao",
      inputs: (index) => {
        return (
          <View style={styles.mainGap} key={index}>
            <TextField name="resumo" label="Resumo" placeholder="" />
            <TextField
              name="ingredientes"
              label="Ingredientes"
              placeholder=""
            />
          </View>
        );
      },
    },
    {
      label: "Atividade Física",
      value: "atividadeFisica",
      inputs: (index) => {
        return (
          <View style={styles.mainGap} key={index}>
            <TextField
              name="atividade"
              label="Tipo de atividade"
              placeholder=""
            />
            <TextField name="local" label="Local" placeholder="" />
          </View>
        );
      },
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
                setWeekDay(weekDay);
              }}
              isActive={weekDayContext === weekDay}
              label={weekDay[0]}
            />
          );
        })}
      </View>

      <Text style={[styles.routineDayTitle]}>{weekDayContext}</Text>

      <View style={styles.screen}>
        <ScrollView>
          {tasks
            .filter((task) => task.day === weekDayContext)
            .map((task, index) => {
              return <TaskContainer key={index} data={task} />;
            })}
        </ScrollView>
      </View>

      <ModalCustom
        title="Adicionar Tarefa"
        modalState={[isModalVisible, setIsModalVisible]}
      >
        <SelectField
          selectedValueState={[selectedCategory, setSelectedCategory]}
          values={categories}
          label="Categoria"
          dialogTitle="Selecione a categoria"
        />

        <View style={{ gap: 20, flexDirection: "row", width: "100%" }}>
          <View style={{ flex: 1 }}>
            <SelectField
              selectedValueState={[weekDay, setWeekDay]}
              values={weekDays}
              label="Dia da Semana"
              dialogTitle="Selecione o dia da semana"
            />
          </View>

          <View>
            <TimeField
              hour={date.getHours()}
              minutes={date.getMinutes()}
              showFuncion={showPicker}
            />
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

        {categories
          .filter((category) => category.value === selectedCategory)
          .map((category, index) => category.inputs(index))}
      </ModalCustom>
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
  screen: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    alignSelf: "center",
  },
  mainGap: {
    gap: 20,
  },
});

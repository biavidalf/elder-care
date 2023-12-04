import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as yup from "yup";

import { TaskContainer } from "../ItemList";
import DayButton from "./DayButton";

import { ModalCustom } from "../Modal";
import { SelectField } from "../SelectField";
import { TextField } from "../TextField";
import { TimeField } from "../TimeField";
import { useWeekDay } from "../../contexts/WeekDayContext";
import { getDrugs } from "../../utils/firebase/database/drug";
import {
  addDrugTask,
  addGeneralTask,
  addNutritionTask,
  addPhysicalActivityTask,
} from "../../utils/firebase/database/task";

const formGeneralSchema = yup
  .object()
  .shape({
    title: yup.string().required("O campo título é obrigatório."),
    comments: yup.string().required("O campo observações é obrigatório."),
  })
  .required();

const formDrugSchema = yup
  .object()
  .shape({
    quantity: yup.string().required("O campo quantidade é obrigatório."),
  })
  .required();

const formNutritionSchema = yup
  .object()
  .shape({
    resume: yup.string().required("O campo resumo é obrigatório."),
    ingredients: yup.string().required("O campo ingredientes é obrigatório."),
  })
  .required();

const formPhysicalActivitySchema = yup
  .object()
  .shape({
    activityType: yup
      .string()
      .required("O campo tipo de atividade é obrigatório."),
    location: yup.string().required("O campo local é obrigatório."),
  })
  .required();

const categoryColors = {
  geral: "GRAY",
  medicamento: "LIGHT_GREEN",
  alimentacao: "YELLOW",
  atividadeFisica: "RED_200",
};

export const Routine = () => {
  const {
    register: registerGeneral,
    setValue: setValueGeneral,
    handleSubmit: handleSubmitGeneral,
    formState: { errors: errorsGeneral },
  } = useForm({ resolver: yupResolver(formGeneralSchema) });

  const {
    register: registerDrug,
    setValue: setValueDrug,
    handleSubmit: handleSubmitDrug,
    formState: { errors: errorsDrug },
  } = useForm({ resolver: yupResolver(formDrugSchema) });

  const {
    register: registerNutrition,
    setValue: setValueNutrition,
    handleSubmit: handleSubmitNutrition,
    formState: { errors: errorsNutrition },
  } = useForm({ resolver: yupResolver(formNutritionSchema) });

  const {
    register: registerPhysicalActivity,
    setValue: setValuePhysicalActivity,
    handleSubmit: handleSubmitPhysicalActivity,
    formState: { errors: errorsPhysicalActivity },
  } = useForm({ resolver: yupResolver(formPhysicalActivitySchema) });

  const { weekDayContext, setWeekDayContext } = useWeekDay();

  const [weekDay, setWeekDay] = useState(weekDayContext);
  const [drugs, setDrugs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState("");
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("geral");

  const [date, setDate] = useState(new Date(1598051730000));

  useEffect(() => {
    (async () => {
      try {
        setDrugs(await getDrugs());
      } catch (error) {
        Alert.alert(error.message);
      }
    })();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowTimepicker(false);
    setDate(currentDate);
  };

  const showPicker = () => {
    setShowTimepicker(true);
  };

  const onSubmitGeneral = async ({ title, comments }) => {
    try {
      const id = await addGeneralTask({
        category: selectedCategory,
        color: categoryColors[selectedCategory],
        day: weekDay,
        time: date,
        label: title,
        comments,
      });

      setIsModalVisible(false);
      ["title", "comments"].forEach((field) => setValueGeneral(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSubmitDrug = async ({ quantity }) => {
    try {
      const id = await addDrugTask({
        category: selectedCategory,
        color: categoryColors[selectedCategory],
        day: weekDay,
        time: date,
        label: selectedDrug,
        quantity,
      });

      setIsModalVisible(false);
      ["quantity"].forEach((field) => setValueDrug(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSubmitNutrition = async ({ resume, ingredients }) => {
    try {
      const id = await addNutritionTask({
        category: selectedCategory,
        color: categoryColors[selectedCategory],
        day: weekDay,
        time: date,
        label: resume,
        ingredients,
      });

      setIsModalVisible(false);
      ["resume", "ingredients"].forEach((field) => setValueDrug(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSubmitPhysicalActivity = async ({ activityType, location }) => {
    try {
      const id = await addPhysicalActivityTask({
        category: selectedCategory,
        color: categoryColors[selectedCategory],
        day: weekDay,
        time: date,
        label: activityType,
        location,
      });

      setIsModalVisible(false);
      ["acivityType", "location"].forEach((field) => setValueDrug(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const categoryHandleSubmit = {
    geral: handleSubmitGeneral(onSubmitGeneral),
    medicamento: handleSubmitDrug(onSubmitDrug),
    alimentacao: handleSubmitNutrition(onSubmitNutrition),
    atividadeFisica: handleSubmitPhysicalActivity(onSubmitPhysicalActivity),
  };

  const categories = [
    {
      label: "Geral",
      value: "geral",
      inputs: (index) => {
        return (
          <View style={styles.mainGap} key={index}>
            <TextField
              name="title"
              label="Título"
              placeholder="Lavar roupas"
              error={errorsGeneral?.title}
              onChangeText={(value) => setValueGeneral("title", value)}
              {...registerGeneral("title")}
            />
            <TextField
              name="comments"
              label="Observações"
              placeholder="Não colocar as roupas brancas com as coloridas"
              error={errorsGeneral?.comments}
              onChangeText={(value) => setValueGeneral("comments", value)}
              {...registerGeneral("comments")}
            />
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
                label="Remédio"
                selectedValueState={[selectedDrug, setSelectedDrug]}
                values={
                  drugs.length
                    ? drugs.map(({ name }) => name)
                    : ["Nenhum remédio cadastrado"]
                }
              />
            </View>
            <View>
              <TextField
                name="quantidade"
                label="Quantidade"
                placeholder="0"
                inputMode="numeric"
                error={errorsDrug?.quantity}
                onChangeText={(value) => setValueDrug("quantity", value)}
                {...registerDrug("quantity")}
              />
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
            <TextField
              name="resume"
              label="Resumo"
              placeholder="Receita de salada de frutas e vegetais"
              error={errorsNutrition?.resume}
              onChangeText={(value) => setValueNutrition("resume", value)}
              {...registerNutrition("resume")}
            />
            <TextField
              name="ingredients"
              label="Ingredientes"
              placeholder="Banana, maça e salada"
              error={errorsNutrition?.ingredients}
              onChangeText={(value) => setValueNutrition("ingredients", value)}
              {...registerNutrition("ingredients")}
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
              name="activityType"
              label="Tipo de atividade"
              placeholder="Corrida"
              error={errorsPhysicalActivity?.activityType}
              onChangeText={(value) =>
                setValuePhysicalActivity("activityType", value)
              }
              {...registerPhysicalActivity("activityType")}
            />
            <TextField
              name="location"
              label="Local"
              placeholder="Beira Mar"
              error={errorsPhysicalActivity?.location}
              onChangeText={(value) =>
                setValuePhysicalActivity("location", value)
              }
              {...registerPhysicalActivity("location")}
            />
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
      id: 0,
      hour: "7:20",
      label: "Acordar",
      color: "GRAY",
      day: "Segunda-Feira",
    },
    {
      id: 1,
      hour: "7:30",
      label: "Remédio 1",
      color: "LIGHT_GREEN",
      day: "Segunda-Feira",
    },
    {
      id: 2,
      hour: "7:40",
      label: "Café da manhã terça",
      color: "YELLOW",
      day: "Terça-Feira",
    },
    {
      id: 3,
      hour: "7:40",
      label: "Café da manhã quarta",
      color: "YELLOW",
      day: "Quarta-Feira",
    },
    {
      id: 4,
      hour: "7:40",
      label: "Café da manhã quarta",
      color: "YELLOW",
      day: "Quarta-Feira",
    },
    {
      id: 5,
      hour: "7:40",
      label: "Café da manhã quinta",
      color: "YELLOW",
      day: "Quinta-Feira",
    },
    {
      id: 6,
      hour: "7:40",
      label: "Café da manhã sexta",
      color: "YELLOW",
      day: "Sexta-Feira",
    },
    {
      id: 7,
      hour: "7:40",
      label: "Acordar sab",
      color: "YELLOW",
      day: "Sábado",
    },
    {
      id: 8,
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
        onPress={categoryHandleSubmit[selectedCategory]}
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

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TaskContainer } from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { SelectField } from "../../components/SelectField";

import { Colors } from "../../utils/Colors";
import { textStyles } from "../../assets/styles/textStyles";
import { screenMainStyle } from "../../assets/styles/screenMainStyle";
import { addMeal, getMeals } from "../../utils/firebase/database/meal";
import {
  addRestriction,
  getRestrictions,
} from "../../utils/firebase/database/restriction";
import { getRestrictionLevels } from "../../utils/firebase/database/restrictionLevel";

const restrictionFormSchema = yup
  .object()
  .shape({
    label: yup.string().required("O campo nome é obrigatório."),
    suggestion: yup.string().required("O campo recomendação é obrigatório."),
  })
  .required();

const mealFormSchema = yup
  .object()
  .shape({
    label: yup.string().required("O campo nome é obrigatório."),
    ingredients: yup.string().required("O campo ingredientes é obrigatório."),
    calories: yup.string().required("O campo calorias é obrigatório."),
  })
  .required();

export const Nutrition = ({ navigation }) => {
  const {
    register: registerRestriction,
    setValue: setRestrictionValue,
    handleSubmit: handleRestrictionSubmit,
    formState: { errors: restrictionErrors },
  } = useForm({ resolver: yupResolver(restrictionFormSchema) });

  const {
    register: registerMeal,
    setValue: setMealValue,
    handleSubmit: handleMealSubmit,
    formState: { errors: mealErrors },
  } = useForm({ resolver: yupResolver(mealFormSchema) });

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [restrictionLevels, setRestrictionLevels] = useState([]);

  const [restrictions, setRestrictions] = useState([]);
  const [isLoadingRestrictionSubmit, setIsLoadingRestrictionSubmit] =
    useState(false);
  const [areRestrictionsLoading, setAreRestrictionsLoading] = useState(true);

  const [meals, setMeals] = useState([]);
  const [isLoadingMealSubmit, setIsLoadingMealSubmit] = useState(false);
  const [areMealsLoading, setAreMealsLoading] = useState(true);

  const [isRestrictionModalVisible, setIsRestrictionModalVisible] =
    useState(false);
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);

  const onSubmitRestriction = async ({ label, suggestion }) => {
    try {
      setIsLoadingRestrictionSubmit(true);

      const id = await addRestriction({
        label,
        color: selectedLevel,
        suggestion,
      });

      setRestrictions([
        ...restrictions,
        {
          id,
          label,
          color: selectedLevel,
          suggestion,
        },
      ]);

      setIsRestrictionModalVisible(false);

      // Reset field values
      ["label", "suggestion"].forEach((field) =>
        setRestrictionValue(field, "")
      );
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoadingRestrictionSubmit(false);
    }
  };

  const onSubmitMeal = async ({ label, ingredients, calories }) => {
    try {
      setIsLoadingMealSubmit(true);

      const id = await addMeal({
        label,
        ingredients,
        calories,
      });

      setMeals([...meals, { id, label, ingredients, calories }]);

      setIsMealModalVisible(false);

      // Reset field values
      ["label", "ingredients", "calories"].forEach((field) =>
        setMealValue(field, "")
      );
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoadingMealSubmit(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setRestrictions(await getRestrictions());
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setAreRestrictionsLoading(false);
      }

      try {
        setMeals(await getMeals());
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setAreMealsLoading(false);
      }

      try {
        setRestrictionLevels(await getRestrictionLevels());
      } catch (error) {
        Alert.alert(error.message);
      }
    })();
  }, []);

  return (
    <View style={screenMainStyle.main}>
      <Title>Nutrição</Title>

      <View style={styles.screen}>
        <View style={styles.screen}>
          <Text style={textStyles.subTitle}>Restrições alimentares</Text>

          {areRestrictionsLoading ? (
            <ActivityIndicator color={Colors.BLUE} />
          ) : restrictions.length ? (
            <View style={styles.screen}>
              <ScrollView>
                {restrictions.map((restriction) => {
                  return (
                    <TaskContainer data={restriction} key={restriction.id} />
                  );
                })}
              </ScrollView>
            </View>
          ) : (
            <Text style={styles.text}>Nenhuma restrição cadastrada.</Text>
          )}

          {!areRestrictionsLoading && (
            <ModalCustom
              title="Adicionar Restrição"
              isLoading={isLoadingRestrictionSubmit}
              modalState={[
                isRestrictionModalVisible,
                setIsRestrictionModalVisible,
              ]}
              onPress={handleRestrictionSubmit(onSubmitRestriction)}
            >
              <TextField
                type="text"
                name="label"
                label="Nome"
                placeholder="Alergia à amendoim"
                error={restrictionErrors?.label}
                onChangeText={(value) => setRestrictionValue("label", value)}
                {...registerRestriction("label")}
              />
              <SelectField
                label={"Nível"}
                values={restrictionLevels}
                selectedValueState={[selectedLevel, setSelectedLevel]}
              />
              <TextField
                type="text"
                name="suggestion"
                label="Recomendação"
                placeholder="Encaminhar para o hospital"
                error={restrictionErrors?.suggestion}
                onChangeText={(value) =>
                  setRestrictionValue("suggestion", value)
                }
                {...registerRestriction("suggestion")}
              />
            </ModalCustom>
          )}
        </View>

        <View style={styles.screen}>
          <Text style={textStyles.subTitle}>Refeições recomendadas</Text>

          {areMealsLoading ? (
            <ActivityIndicator color={Colors.BLUE} />
          ) : meals.length ? (
            <View style={styles.screen}>
              <ScrollView>
                {meals.map((meal) => {
                  return <TaskContainer data={meal} key={meal.id} />;
                })}
              </ScrollView>
            </View>
          ) : (
            <Text style={styles.text}>Nenhuma refeição cadastrada.</Text>
          )}

          {!areMealsLoading && (
            <ModalCustom
              title="Adicionar Refeição"
              isLoading={isLoadingMealSubmit}
              modalState={[isMealModalVisible, setIsMealModalVisible]}
              onPress={handleMealSubmit(onSubmitMeal)}
            >
              <TextField
                type="text"
                name="name"
                label="Nome"
                placeholder="Canja de frango"
                error={mealErrors?.label}
                onChangeText={(value) => setMealValue("label", value)}
                {...registerMeal("label")}
              />
              <TextField
                type="text"
                name="ingredients"
                label="Ingredientes"
                placeholder="Frango, pimentão, arroz"
                error={mealErrors?.ingredients}
                onChangeText={(value) => setMealValue("ingredients", value)}
                {...registerMeal("ingredients")}
              />
              <TextField
                type="text"
                name="calories"
                label="Calorias"
                placeholder="350"
                inputMode="numeric"
                error={mealErrors?.calories}
                onChangeText={(value) => setMealValue("calories", value)}
                {...registerMeal("calories")}
              />
            </ModalCustom>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: Colors.WHITE_200,
  },
  screen: {
    flex: 1,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
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

import { Colors } from "../../utils/Colors";
import { textStyles } from "../../assets/styles/textStyles";
import { getMeals } from "../../utils/firebase/database/meal";
import {
  addRestriction,
  getRestrictions,
} from "../../utils/firebase/database/restriction";
import { getRestrictionLevels } from "../../utils/firebase/database/restrictionLevel";
import { SelectField } from "../../components/SelectField";

const windowHeight = Dimensions.get("window").height;

const restrictionFormSchema = yup
  .object()
  .shape({
    label: yup.string().required("O campo nome é obrigatório."),
    suggestion: yup.string().required("O campo recomendação é obrigatório."),
  })
  .required();

export const Nutrition = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(restrictionFormSchema) });

  const [restrictions, setRestrictions] = useState([]);
  const [meals, setMeals] = useState([]);
  const [restrictionLevels, setRestrictionLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState();

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [areRestrictionsLoading, setAreRestrictionsLoading] = useState(true);
  const [areMealsLoading, setAreMealsLoading] = useState(true);

  const [isRestrictionModalVisible, setIsRestrictionModalVisible] =
    useState(false);
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);

  const onSubmit = async ({ label, suggestion }) => {
    try {
      setIsLoadingSubmit(true);

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
      ["label", "suggestion"].forEach((field) => setValue(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoadingSubmit(false);
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
    <View style={styles.main}>
      <Title>Nutrição</Title>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={textStyles.subTitle}>Restrições alimentares</Text>

          {areRestrictionsLoading ? (
            <ActivityIndicator color={Colors.BLUE} />
          ) : (
            <>
              {restrictions.length ? (
                <View style={styles.list}>
                  <ScrollView>
                    {restrictions.map((restriction) => {
                      return (
                        <TaskContainer
                          data={restriction}
                          key={restriction.id}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              ) : (
                <Text style={styles.text}>Nenhuma restrição cadastrada.</Text>
              )}

              <ModalCustom
                title="Adicionar Restrição"
                isLoading={isLoadingSubmit}
                modalState={[
                  isRestrictionModalVisible,
                  setIsRestrictionModalVisible,
                ]}
                onPress={handleSubmit(onSubmit)}
              >
                <TextField
                  type="text"
                  name="label"
                  label="Nome"
                  placeholder="Alergia à amendoim"
                  error={errors?.label}
                  onChangeText={(value) => setValue("label", value)}
                  {...register("label")}
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
                  error={errors?.suggestion}
                  onChangeText={(value) => setValue("suggestion", value)}
                  {...register("suggestion")}
                />
              </ModalCustom>
            </>
          )}
        </View>

        <View>
          <Text style={textStyles.subTitle}>Refeições recomendadas</Text>

          {areMealsLoading ? (
            <ActivityIndicator color={Colors.BLUE} />
          ) : (
            <>
              {meals.length ? (
                <View style={styles.list}>
                  <ScrollView>
                    {meals.map((meal) => {
                      return <TaskContainer data={meal} key={meal.id} />;
                    })}
                  </ScrollView>
                </View>
              ) : (
                <Text style={styles.text}>Nenhuma refeição cadastrada.</Text>
              )}

              <ModalCustom
                title="Adicionar Refeição"
                modalState={[isMealModalVisible, setIsMealModalVisible]}
              >
                <TextField
                  type="text"
                  name="name"
                  label="Nome"
                  placeholder="Canja de frango"
                />
                <TextField
                  type="text"
                  name="ingredients"
                  label="Ingredientes"
                  placeholder="Frango, pimentão, arroz"
                />
                <TextField
                  type="text"
                  name="calories"
                  label="Calorias"
                  placeholder="350cal"
                />
              </ModalCustom>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: Colors.WHITE_200,
  },
  scroll: {
    paddingHorizontal: 27,
  },
  list: {
    maxHeight: windowHeight / 2,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

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

import { TaskContainer } from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";

import { textStyles } from "../../assets/styles/textStyles";
import { Colors } from "../../utils/Colors";
import { getRestrictions } from "../../utils/firebase/database/restriction";

const windowHeight = Dimensions.get("window").height;

export const Nutrition = ({ navigation }) => {
  const [restrictions, setRestrictions] = useState([]);
  const [restrictionsLoading, setRestrictionsLoading] = useState(true);
  const [isRestrictionModalVisible, setIsRestrictionModalVisible] =
    useState(false);
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);

  const meals = [
    {
      id: "0",
      label: "Feijão preto com frango",
    },
    {
      id: "1",
      label: "Salada de repolho",
    },
    {
      id: "2",
      label: "Canja de frango",
    },
    {
      id: "3",
      label: "Feijão verde com purê",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        setRestrictions(await getRestrictions());
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setRestrictionsLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.main}>
      <Title>Nutrição</Title>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={textStyles.subTitle}>Restrições alimentares</Text>

          {restrictionsLoading ? (
            <ActivityIndicator color={Colors.BLUE} />
          ) : (
            <>
              <View style={styles.list}>
                <ScrollView>
                  {restrictions.map((restriction) => {
                    return (
                      <TaskContainer data={restriction} key={restriction.id} />
                    );
                  })}
                </ScrollView>
              </View>

              <ModalCustom
                title="Adicionar Restrição"
                modalState={[
                  isRestrictionModalVisible,
                  setIsRestrictionModalVisible,
                ]}
              >
                <TextField
                  type="text"
                  name="name"
                  label="Nome"
                  placeholder="Alergia à amendoim"
                />
                <TextField
                  type="text"
                  name="level"
                  label="Nível"
                  placeholder="Grave"
                />
                <TextField
                  type="text"
                  name="suggestion"
                  label="Recomendação"
                  placeholder="Encaminhar para o hospital"
                />
              </ModalCustom>
            </>
          )}
        </View>

        <View>
          <Text style={textStyles.subTitle}>Refeições recomendadas</Text>
          <View style={styles.list}>
            <ScrollView>
              {meals.map((meal) => {
                return <TaskContainer data={meal} key={meal.id} />;
              })}
            </ScrollView>
          </View>

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
});

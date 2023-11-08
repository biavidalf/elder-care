import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import Nutrition from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utilities/Colors";

const windowHeight = Dimensions.get("window").height;

export const Nutricao = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const restrictions = [
    {
      id: "0",
      label: "Intolerância à lactose",
      color: "GRAY",
    },
    {
      id: "1",
      label: "Alergia à amendoim",
      color: "LIGHT_GREEN",
    },
    {
      id: "2",
      label: "Alergia à frutos do mar",
      color: "YELLOW",
    },
    {
      id: "3",
      label: "Alergia à glúten",
      color: "GRAY",
    },
  ];

  const meals = [
    {
      id: "0",
      label: "Feijão preto com frango",
      color: "GRAY",
    },
    {
      id: "1",
      label: "Salada de repolho",
      color: "LIGHT_GREEN",
    },
    {
      id: "2",
      label: "Canja de frango",
      color: "YELLOW",
    },
    {
      id: "3",
      label: "Feijão verde com purê",
      color: "GRAY",
    },
  ];

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Nutrição</Text>
          <Text style={styles.subTitle}>Restrições alimentares</Text>

          <View style={styles.list}>
            <ScrollView>
              {restrictions.map((restriction) => {
                return <Nutrition data={restriction} key={restriction.id} />;
              })}
            </ScrollView>
          </View>

          <ModalCustom title="Adicionar Restrição">
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
        </View>

        <View>
          <Text style={styles.subTitle}>Refeições recomendadas</Text>
          <View style={styles.list}>
            <ScrollView>
              {meals.map((meal) => {
                return <Nutrition data={meal} key={meal.id} />;
              })}
            </ScrollView>
          </View>

          <ModalCustom title="Adicionar Refeição">
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
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: Colors.WHITE_200,
  },
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    marginTop: 25,
    marginBottom: 16,
  },
  list: {
    maxHeight: windowHeight / 2,
  },
});

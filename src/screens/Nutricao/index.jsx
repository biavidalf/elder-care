import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DayTask from "../../components/ItemList";
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
      hour: "",
      label: "Intolerância à lactose",
      color: "GRAY",
      day: "Segunda-Feira",
    },
    {
      id: "1",
      hour: "",
      label: "Alergia à amendoim",
      color: "LIGHT_GREEN",
      day: "Segunda-Feira",
    },
    {
      id: "2",
      hour: "",
      label: "Alergia à frutos do mar",
      color: "YELLOW",
      day: "Terça-Feira",
    },
    {
      id: "2",
      hour: "",
      label: "Alergia à glúten",
      color: "GRAY",
      day: "Quarta-Feira",
    },
  ];

  const meals = [
    {
      id: "0",
      hour: "",
      label: "Feijão preto com frango",
      color: "GRAY",
      day: "Segunda-Feira",
    },
    {
      id: "1",
      hour: "",
      label: "Salada de repolho",
      color: "LIGHT_GREEN",
      day: "Segunda-Feira",
    },
    {
      id: "2",
      hour: "",
      label: "Canja de frango",
      color: "YELLOW",
      day: "Terça-Feira",
    },
    {
      id: "2",
      hour: "",
      label: "Feijão verde com purê",
      color: "GRAY",
      day: "Quarta-Feira",
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
            {restrictions.map((restriction, index) => {
              return <DayTask data={restriction} />;
            })}
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        + Adicionar Restrição
      </TouchableOpacity>

      <View>
        <Text style={styles.subTitle}>Refeições recomendadas</Text>

        <View style={styles.list}>
          <ScrollView>
            {meals.map((meal, index) => {
              return <DayTask data={meal} />;
            })}
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        + Adicionar Refeição
      </TouchableOpacity>
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
  button: {
    backgroundColor: Colors.LIGHT_BLUE,
    textAlign: "center",
    color: Colors.BLUE,
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    marginTop: 15,
    marginBottom: 15,
    padding: 12,
    borderRadius: 117,
  },
  screen: {
    maxHeight: windowHeight / 1.8,
  },
});

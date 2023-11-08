import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import Nutrition from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utilities/Colors";

const windowHeight = Dimensions.get("window").height;

import { textStyles } from "../../assets/styles/textStyles";

export const Nutricao = ({ navigation }) => {
  const restrictions = [
    {
      id: "0",
      label: "Intolerância à lactose",
      color: "RED",
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
      color: "RED",
    },
  ];

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

  return (
    <View style={styles.main}>
      <Title>Nutrição</Title>
      
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={textStyles.subTitle}>Restrições alimentares</Text>

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
          <Text style={textStyles.subTitle}>Refeições recomendadas</Text>
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

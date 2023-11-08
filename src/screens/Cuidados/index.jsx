import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import Care from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utilities/Colors";

const windowHeight = Dimensions.get("window").height;

export const Cuidados = ({ navigation }) => {
  const cares = [
    {
      id: "0",
      label: "Detalhes fraldas",
    },
    {
      id: "1",
      label: "Tipo sabonete",
    },
    {
      id: "2",
      label: "Tecidos roupas",
    },
    {
      id: "3",
      label: "Perfumes",
    },
    {
      id: "4",
      label: "Perfumes",
    },
  ];

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={styles.title}>Cuidados</Text>
          <Text style={styles.subTitle}>Cuidados gerais</Text>

          <View style={styles.list}>
            <ScrollView>
              {cares.map((care) => {
                return <Care data={care} key={care.id} />;
              })}
            </ScrollView>
          </View>

          <ModalCustom title="Adicionar Cuidado">
            <TextField
              type="text"
              name="name"
              label="Nome"
              placeholder="Fralda"
            />
            <TextField
              type="text"
              name="level"
              label="Descrição"
              placeholder="Marca BigFral, tamanho M"
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
    paddingHorizontal: 27,
    paddingTop: 60,
    backgroundColor: Colors.WHITE_200,
  },
  scroll: {

  },
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "Poppins-Medium",
    marginTop: 15,
    marginBottom: 16,
  },
  list: {
    maxHeight: windowHeight / 2,
  },
});

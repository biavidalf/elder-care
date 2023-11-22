import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { TaskContainer } from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";

const windowHeight = Dimensions.get("window").height;

import { screenMainStyle } from "../../assets/styles/screenMainStyle";
import { textStyles } from "../../assets/styles/textStyles";

export const Precautions = ({ navigation }) => {
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
    <View style={screenMainStyle.main}>
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={textStyles.title}>Cuidados</Text>
          <Text style={textStyles.subTitle}>Cuidados gerais</Text>

          <View style={styles.list}>
            <ScrollView style={styles.scroll}>
              {cares.map((care) => {
                return <TaskContainer data={care} key={care.id} />;
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
  main: {},
  scroll: {},
  list: {
    maxHeight: windowHeight / 2,
  },
});

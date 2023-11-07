import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utilities/Colors";

export const Nutricao = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Nutrição</Text>
      <ModalCustom title={"Adicionar Restrição"}>
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@email.com"
        />
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@email.com"
        />
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@email.com"
        />
      </ModalCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    position: 'relative',
    paddingVertical: 20
  },
});

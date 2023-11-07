import React from "react";
import { StyleSheet, View } from "react-native";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";

export const Nutricao = ({ navigation }) => {
  return (
    <View style={styles.main}>
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
    padding: "3rem",
    backgroundColor: "#fff",
  },
});

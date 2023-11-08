import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { Feather } from "@expo/vector-icons";

import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import Modal from "react-native-modal";

import { Colors } from "../../utilities/Colors";
import { Button } from "../Button";

const windowHeight = Dimensions.get("window").height;

export const ModalCustom = ({ title, children }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_500Medium });
  const [isModalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.main}>
      <Button
        title={title}
        type="secondary"
        onPress={() => setModalVisible(true)}
      >
        <Feather name="plus" size={20} color={Colors.BLUE} />
      </Button>

      <Modal
        isVisible={isModalVisible}
        style={styles.modalCustom}
        deviceWidth="100%"
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>

          <ScrollView>
            <View style={styles.inputs}>{children}</View>
          </ScrollView>

          <View style={styles.buttons}>
            <Button
              title="Salvar"
              type="secondary"
              onPress={() => setModalVisible(!isModalVisible)}
            />
            <Button
              title="Cancelar"
              type="cancel"
              onPress={() => setModalVisible(!isModalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalCustom: {
    width: "full",
    margin: 0,
    justifyContent: "flex-end",
  },
  modalView: {
    width: "100%",
    gap: 16,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    padding: 30,
    bottom: 0,
    backgroundColor: Colors.WHITE_300,
  },
  modalText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    marginBottom: 15,
    textAlign: "center",
  },
  inputs: {
    maxHeight: windowHeight / 2,
    gap: 20,
  },
  buttons: {
    marginTop: 20,
  },
});

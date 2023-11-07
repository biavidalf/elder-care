import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";

import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utilities/Colors";
import { Button } from "../Button";

export const ModalCustom = ({ title, children }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_500Medium });
  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={[styles.main, modalVisible && styles.bgLowOpacity]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>
            <View style={styles.inputs}>{children}</View>
            <Button
              title="Salvar"
              type="secondary"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              title="Cancelar"
              type="cancel"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <Button
        title={title}
        type="secondary"
        onPress={() => setModalVisible(true)}
      >
        <Feather name="plus" size={20} color={Colors.BLUE} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
  },
  bgLowOpacity: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0 / 0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
  },
  modalView: {
    width: '100%',
    gap: 16,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    padding: 50,
    backgroundColor: Colors.WHITE_300,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    width: 350,
  },
  textStyle: {
    color: Colors.BLUE,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    marginBottom: 15,
    textAlign: "center",
  },
  inputs: {
    gap: 20,
  },
});

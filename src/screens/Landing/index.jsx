import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Button } from "../../components/Button";

import { Colors } from "../../utils/Colors";

export const Landing = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Elder</Text>
        <Text style={[styles.titleText, { color: Colors.BLUE }]}>Care</Text>
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/images/home-banner.png")}
      />

      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeMessagesContainer}>
          <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
          <Text style={styles.welcomeSubtitle}>
            Conecte-se ou crie uma conta para gerenciar as atividades do seu
            paciente
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            type="primary"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Criar Conta"
            type="secondary"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.WHITE,
    padding: 40,
    gap: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
  },
  image: {
    width: 256,
    height: 256,
  },
  welcomeContainer: {
    gap: 24,
  },
  welcomeMessagesContainer: {
    gap: 8,
  },
  welcomeTitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
  },
  welcomeSubtitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  buttonsContainer: {
    width: "auto",
    flexDirection: "column",
    gap: 12,
  },
});

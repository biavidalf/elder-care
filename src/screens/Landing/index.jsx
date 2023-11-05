import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

export const Landing = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
  });

  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Elder</Text>
        <Text style={[styles.titleText, { color: Colors.BLUE }]}>Care</Text>
      </View>

      <Image
        style={styles.imageSize}
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
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 40,
    backgroundColor: Colors.WHITE,
  },
  titleContainer: {
    flexDirection: "row",
  },
  imageSize: {
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
    fontFamily: "Poppins_500Medium",
  },
  welcomeSubtitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 12,
  },
});

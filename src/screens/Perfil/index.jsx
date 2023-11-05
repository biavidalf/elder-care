import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Perfil = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>Perfil</Text>
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

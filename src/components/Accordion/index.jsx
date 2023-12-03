import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../utils/Colors";
import { Pressable } from "../../components/Pressable";

import { shadowStyle } from "../../assets/styles/shadowStyle";

export function Accordion({
  drug: {
    name,
    maximumDailyDosage,
    fastingBefore,
    fastingAfter,
    treatment,
    sideEffects,
  },
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.container, shadowStyle.lightShadow]}>
      <Pressable
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.title}>{name}</Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={22}
          color={Colors.BLACK}
        />
      </Pressable>
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.textItem}>
            <Text style={styles.textItemTitle}>Dosagem diária máxima:</Text>{" "}
            {maximumDailyDosage}
          </Text>
          <Text style={styles.textItem}>
            <Text style={styles.textItemTitle}>Jejum antes (horas):</Text>{" "}
            {fastingBefore}
          </Text>
          <Text style={styles.textItem}>
            <Text style={styles.textItemTitle}>Jejum depois (horas):</Text>{" "}
            {fastingAfter}
          </Text>
          <Text style={styles.textItem}>
            <Text style={styles.textItemTitle}>Tratamento:</Text> {treatment}
          </Text>
          <Text style={styles.textItem}>
            <Text style={styles.textItemTitle}>Efeitos colaterais:</Text>{" "}
            {sideEffects}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_300,
    borderRadius: 4,
    marginHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: Colors.BLACK,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 8,
    gap: 2,
  },
  textItem: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: Colors.BLACK,
  },
  textItemTitle: {
    fontFamily: "Poppins-Medium",
  },
});

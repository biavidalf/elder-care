import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../../utils/Colors';

export function TimeField({hour, minutes, showFuncion}) {
  return (
    <Pressable style={styles.container} onPress={showFuncion}>
      <Text style={styles.label}>Hora</Text>
      <View style={styles.containerInput}>
        <Ionicons name="time-outline" size={20} />
        <Text style={styles.text}>{hour}</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>{minutes}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    gap: 8,
  },
  containerInput: {
    flexDirection: "row",
    gap: 1,
    fontFamily: "Poppins-Regular",
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    height: 50,
    paddingHorizontal: 4,
    paddingBottom: 4,
    borderBottomWidth: 1,
    alignItems: "center"
  },
  label: {
    color: Colors.BLACK,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  text: {
    fontSize: 16,
  }
});
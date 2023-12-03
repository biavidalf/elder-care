import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Colors";

export function SelectField({
  selectedValue,
  setSelectedValue,
  values,
  label,
  dialogTitle,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        <Picker
          prompt={dialogTitle}
          style={styles.input}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {values.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={value.label}
                value={value.value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    gap: 4,
  },
  label: {
    color: Colors.BLACK,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  containerInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  input: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});

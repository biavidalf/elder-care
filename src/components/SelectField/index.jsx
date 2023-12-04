import { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Colors";

export function SelectField({
  selectedValueState,
  values,
  label,
  dialogTitle,
}) {
  const [selectedValue, setSelectedValue] = selectedValueState;

  useEffect(() => {
    if (!selectedValue && values.length) {
      setSelectedValue(
        values[0] instanceof Object ? values[0].value : values[0]
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        <Picker
          mode="dropdown"
          prompt={dialogTitle}
          style={styles.input}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {values.map((value, index) => {
            return (
              <Picker.Item
                key={index}
                label={typeof value === "object" ? value.label : value}
                value={typeof value === "object" ? value.value : value}
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

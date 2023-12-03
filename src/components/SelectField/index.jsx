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
    if (values.length) {
      setSelectedValue(values[0].value);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        {selectedValue && (
          <Picker
            prompt={dialogTitle}
            style={styles.input}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
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
        )}
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

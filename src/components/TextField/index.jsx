import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../utilities/Colors";

export const TextField = ({ label, name, isEdit = true, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <Text
        htmlFor={name}
        style={[styles.label, !isEdit && { color: Colors.GRAY }]}
      >
        {label}
      </Text>
      <TextInput
        id={name}
        name={name}
        placeholderTextColor={Colors.GRAY}
        style={[styles.input, !isEdit && { borderColor: "transparent" }]}
        {...otherProps}
      />
    </View>
  );
};

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
  input: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: "Poppins-Regular",
    height: 32,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
});

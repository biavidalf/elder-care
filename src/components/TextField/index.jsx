import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../utilities/Colors";

const TextField = ({ label, name, ...props }) => {
  return (
    <View style={styles.container}>
      <Text htmlFor={name} style={styles.label}>
        {label}
      </Text>
      <TextInput id={name} name={name} style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 4,
  },
  label: {
    color: Colors.BLACK,
    fontSize: 12,
  },
  input: {
    color: Colors.BLACK,
    placeholderTextColor: Colors.GRAY,
    fontSize: 16,
    height: 32,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
});

export { TextField };

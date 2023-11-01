import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Colors } from "../../utilities/Colors";

const Button = ({ text, style, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    height: 40,
    backgroundColor: Colors.BLUE,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { Button };

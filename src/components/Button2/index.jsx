import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../utilities/Colors";

export default function Button2({ title, type, children, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[
        styles.button,
        { backgroundColor: type === "primary" ? Colors.BLUE : "#d3e0f7" },
      ]}
    >
      {children}
      <Text
        style={[
          styles.text,
          { color: type === "primary" ? "white" : Colors.BLUE },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 40,
    height: 38,
    borderRadius: 40,
    elevation: 3,
    flexDirection: 'row',
    gap: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontWeight: "500",
  },
});

import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

import { Colors } from "../../utilities/Colors";

export const Button = ({ title, type, children, ...props }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_500Medium });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: type === "primary" ? Colors.BLUE : Colors.LIGHT_BLUE,
        },
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
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    gap: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});

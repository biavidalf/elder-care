import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Colors } from "../../utilities/Colors";

export const Button = ({ title, type, children, ...props }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_500Medium });

  const containerStyle = styles[type];
  const textStyle = styles[`${type}Text`];

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[
        styles.button,
        containerStyle
      ]}
    >
      {children}
      <Text
        style={[
          styles.text,
          textStyle
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
  primary: {
    backgroundColor: Colors.BLUE,
  },
  primaryText: {
    color: Colors.WHITE,
  },
  secondary: {
    backgroundColor: Colors.LIGHT_BLUE,
  },
  secondaryText: {
    color: Colors.BLUE,
  },
  cancel: {
    backgroundColor: 'transparent',
  },
  cancelText: {
    color: Colors.RED,
    textDecorationLine: "underline"
  },
  text: {
    fontSize: "1rem",
    fontFamily: "Poppins_500Medium",
  },
});

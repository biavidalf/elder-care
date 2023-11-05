import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

import { Colors } from "../../utilities/Colors";

export const TextField = ({ label, name, ...props }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
    fontFamily: "Poppins_400Regular",
  },
  input: {
    color: Colors.BLACK,
    placeholderTextColor: Colors.GRAY,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    height: 32,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
});

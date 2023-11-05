import { StyleSheet, Text } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

import { Colors } from "../../utilities/Colors";

export const Title = ({ children, ...props }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_500Medium });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Text style={styles.title} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    alignSelf: "center",
  },
});

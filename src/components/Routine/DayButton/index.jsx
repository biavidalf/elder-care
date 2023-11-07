import { StyleSheet, Pressable, Text } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

import { Colors } from "../../../utilities/Colors";

export default function Home({ navigation, isActive, label, ...props }) {
  const [fontsLoaded, fontError] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Pressable {...props}>
      <Text
        style={[
          styles.weekDayButton,
          !isActive || styles.weekDayButtonActive,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  weekDayButton: {
    backgroundColor: Colors.WHITE_300,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: "#8696BB",
    fontFamily: "Poppins_400Regular",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.16,
    shadowRadius: 1.51,
    elevation: 2
  },
  weekDayButtonActive: {
    backgroundColor: "#2C72DA",
    color: "#F5F5F5",
    fontFamily: "Poppins_400Regular",
  },
});

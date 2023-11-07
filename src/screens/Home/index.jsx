import { StyleSheet, View } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Header from "./../../components/Header";
import { Routine } from "../../components/Routine";

export const Home = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_600SemiBold });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.main}>
      <Header navigation={navigation} />

      <Routine />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});

import { StyleSheet, View } from "react-native";

import Header from "./../../components/Header";
import { Routine } from "../../components/Routine";

export const Home = ({ navigation }) => {
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
    paddingHorizontal: 40,
    paddingTop: 80,
  },
});

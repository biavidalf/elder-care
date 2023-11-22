import { StyleSheet, View } from "react-native";

import Header from "./../../components/Header";
import { Routine } from "../../components/Routine";

import { screenMainStyle } from "../../assets/styles/screenMainStyle";

export const Home = ({ navigation }) => {
  return (
    <View style={screenMainStyle.main}>
      <Header navigation={navigation} />

      <Routine />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

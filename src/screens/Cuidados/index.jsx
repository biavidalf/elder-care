import { View, StyleSheet } from "react-native";

import { Title } from "../../components/Title";
import { Colors } from "../../utilities/Colors";

export const Cuidados = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Title>Cuidados</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.WHITE_200,
    paddingTop: 80,
    paddingHorizontal: 40,
    flex: 1,
  },
});

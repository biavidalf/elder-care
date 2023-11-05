import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../../utilities/Colors";

const Back = ({ navigation, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={() => navigation.goBack()}
      {...props}
    >
      <Feather name="chevron-left" size={26} color={Colors.BLACK} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 68,
  },
});

export { Back };

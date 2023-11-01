import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../../utilities/Colors";

const Back = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.icon} {...props}>
      <Feather name="chevron-left" size={24} color={Colors.BLACK} />
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

import { StyleSheet, Text } from "react-native";

import { Colors } from "../../../utilities/Colors";

import { Pressable } from "../../Pressable";

export default function Home({ label, isActive, navigation, ...otherProps }) {
  return (
    <Pressable {...otherProps}>
      <Text
        style={[styles.weekDayButton, !isActive || styles.weekDayButtonActive]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  weekDayButton: {
    color: "#8696BB",
    fontFamily: "Poppins-Regular",
    backgroundColor: Colors.WHITE_300,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.5,
    elevation: 2,
  },
  weekDayButtonActive: {
    color: "#F5F5F5",
    fontFamily: "Poppins-Regular",
    backgroundColor: "#2C72DA",
  },
});

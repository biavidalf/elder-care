import { StyleSheet } from "react-native";

import { Colors } from "../../utils/Colors";

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    alignSelf: "center",
    color: Colors.BLACK,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "Poppins-Medium",
    marginVertical: 15,
    color: Colors.BLACK,
  },
});
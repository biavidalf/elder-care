import { StyleSheet } from "react-native";

import { Colors } from "../../utilities/Colors";

export const shadowStyle = StyleSheet.create({
  lightShadow: {
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity:  0.5,
    shadowRadius: 1.00,
    elevation: 1.5
  },
});
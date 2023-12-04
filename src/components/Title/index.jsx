import { StyleSheet, Text } from "react-native";

import { Colors } from "../../utils/Colors";

export const Title = ({ children, ...otherProps }) => {
  return (
    <Text style={styles.title} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    alignSelf: "center",
  },
});

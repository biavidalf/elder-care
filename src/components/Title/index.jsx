import { StyleSheet, Text } from "react-native";

import { Colors } from "../../utilities/Colors";

const Title = ({ children, ...props }) => {
  return (
    <Text style={styles.title} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontWeight: 700,
    alignSelf: "center",
  },
});

export { Title };

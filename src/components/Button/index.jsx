import { StyleSheet, Text, ActivityIndicator } from "react-native";

import { Colors } from "../../utils/Colors";
import { Pressable } from "../../components/Pressable";

export const Button = ({ title, type, children, loading, ...otherProps }) => {
  const containerStyle = styles[type];
  const textStyle = styles[`${type}Text`];

  return (
    <Pressable
      activeOpacity={0.7}
      disabled={loading}
      style={[styles.button, containerStyle]}
      {...otherProps}
    >
      {children}
      <Text style={[styles.text, textStyle]}>
        {loading ? (
          <ActivityIndicator color={Colors.WHITE_200} style={styles.loading} />
        ) : (
          title
        )}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  primary: {
    backgroundColor: Colors.BLUE,
  },
  primaryText: {
    color: Colors.WHITE,
  },
  secondary: {
    backgroundColor: Colors.LIGHT_BLUE,
  },
  secondaryText: {
    color: Colors.BLUE,
  },
  cancel: {
    backgroundColor: "transparent",
  },
  cancelText: {
    color: Colors.RED,
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  loading: {
    display: "flex",
  },
});

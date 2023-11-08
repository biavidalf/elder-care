import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../utilities/Colors";
import { Pressable } from "../../components/Pressable";

export function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <Text style={styles.content}>{content}</Text>;

  return (
    <View style={styles.container}>
      <Pressable activeOpacity={0.7} style={styles.button} onPress={toggleItem}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <Feather name="chevron-up" size={22} />
        ) : (
          <Feather name="chevron-down" size={22} />
        )}
      </Pressable>
      {expanded && body}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_300,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 1.95,
      height: 1.95,
    },
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 5,
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 8,
    fontSize: 13,
  },
});

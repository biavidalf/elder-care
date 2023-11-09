import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../utilities/Colors";
import { Pressable } from "../../components/Pressable";

import { shadowStyle } from "../../assets/styles/shadowStyle";

export function Accordion({ title, data }) {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  return (
    <View style={[styles.container, shadowStyle.lightShadow]}>
      <Pressable activeOpacity={0.7} style={styles.button} onPress={toggleItem}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <Feather name="chevron-up" size={22} color={Colors.BLACK} />
        ) : (
          <Feather name="chevron-down" size={22} color={Colors.BLACK} />
        )}
      </Pressable>
      {expanded && 
        <View style={styles.content}>
           {
            Object.entries(data).map(([key, value]) => {
              return key !== 'id' && key !== 'nome' && <Text style={styles.textItem} key={key}>{value}</Text>
            })
           }
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_300,
    borderRadius: 4,
    marginHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: Colors.BLACK
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 8,
    gap: 2
  },
  textItem: {
    fontSize: 13,
    color: Colors.BLACK,
  }
});

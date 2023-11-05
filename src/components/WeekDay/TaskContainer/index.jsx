import { Pressable, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { Colors } from "../../../utilities/Colors";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

function TaskContainer({ hour = "7:20", label = "Acordar", color = "GRAY" }) {
  const [fontsLoaded, fontError] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Pressable
      style={[styles.taskContainer, { borderLeftColor: Colors[color] }]}
    >
      <Text style={styles.hourText}>{hour}</Text>
      <Text style={styles.labelText}>{label}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="more-horizontal" size={20} color={Colors.GRAY} />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: Colors.WHITE_300,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderLeftWidth: 3,
  },
  hourText: {
    color: Colors.GRAY,
    fontFamily: "Poppins_400Regular",
  },
  labelText: {
    flex: 1,
    marginHorizontal: 10,
    fontFamily: "Poppins_400Regular",
  },
  iconContainer: {
    paddingHorizontal: 4,
  },
});

export default TaskContainer;

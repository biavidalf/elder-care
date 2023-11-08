import { Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Pressable } from "../Pressable";
import { Colors } from "../../utilities/Colors";

function TaskContainer({ data }) {
  return (
    <Pressable
      style={[
        styles.taskContainer,
        data.color && {
          borderLeftWidth: 3,
          borderLeftColor: Colors[data.color],
        },
      ]}
    >
      {data.hour && <Text style={styles.hourText}>{data.hour}</Text>}
      <Text style={styles.labelText}>{data.label}</Text>
      <Pressable activeOpacity={0.7} style={styles.iconContainer}>
        <Feather name="more-horizontal" size={20} color={Colors.GRAY} />
      </Pressable>
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
    paddingVertical: 10,
    marginBottom: 10,
  },
  hourText: {
    color: Colors.GRAY,
    fontFamily: "Poppins-Regular",
  },
  labelText: {
    flex: 1,
    marginHorizontal: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  iconContainer: {
    paddingHorizontal: 4,
  },
});

export default TaskContainer;

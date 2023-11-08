import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Pressable } from "../Pressable";
import { ProfilePicture } from "../Icons";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Perfil");
          }}
        >
          <ProfilePicture size={40} />
        </Pressable>

        <View style={styles.profile}>
          <Text style={styles.profileSubtitle}>Olá,</Text>
          <Text style={styles.profileTitle}>Beatriz Vidal</Text>
        </View>
      </View>

      <Pressable activeOpacity={0.7}>
        <Feather name="bell" size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
  },
  profile: {
    marginLeft: 8,
    justifyContent: "center",
  },
  profileSubtitle: {
    color: "#8696BB",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Poppins-Medium",
  },
  profileTitle: {
    color: "#2C72DA",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "Poppins-Medium",
  },
});

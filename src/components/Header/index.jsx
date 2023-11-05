import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Header({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Perfil");
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./../../assets/images/profile-pic.svg")}
          />
        </Pressable>

        <View style={styles.profile}>
          <Text style={styles.profileSubtitle}>Olá,</Text>
          <Text style={styles.profileTitle}>Beatriz Vidal</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Feather name="bell" size={22} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profile: {
    marginLeft: 8,
    justifyContent: "center",
  },
  profileSubtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: "#8696BB",
    fontFamily: "Poppins_500Medium",
  },
  profileTitle: {
    color: "#2C72DA",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "Poppins_500Medium",
  },
});

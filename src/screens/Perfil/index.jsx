import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

export const Perfil = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({ Poppins_600SemiBold });
  const [editMode, setEditMode] = React.useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <View style={styles.rowBetween}>
          <Pressable onPress={() => {navigation.navigate("Home")}}>
            <Feather name="chevron-left" size={28} color={Colors.BLACK} />
          </Pressable>
          <Feather name="settings" size={24} color={Colors.BLACK} />
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.editIcon}>
            <Feather name="edit" size={23} color={Colors.WHITE_300} />
          </View>

          <Image
            style={styles.profilePic}
            source={require("../../assets/images/profile-pic.svg")}
          />
          <Title>Beatriz Vidal</Title>
        </View>

        <Pressable
          style={styles.rightScreen}
          onPress={() => {
            setEditMode(!editMode);
          }}
        >
          <Text
            style={[styles.actionText, editMode ? styles.cancel : styles.edit]}
          >
            {editMode ? "Cancelar" : "Editar"}
          </Text>
        </Pressable>

        <View style={styles.inputs}>
          <TextField
            label="Nome"
            name="nome"
            value="Beatriz"
            isEdit={editMode}
          />
          <TextField
            label="Sobrenome"
            name="sobrenome"
            value="Vidal"
            isEdit={editMode}
          />
          <TextField
            label="Telefone"
            name="telefone"
            value="(85) 96516-1531"
            isEdit={editMode}
          />
          <TextField
            label="E-mail"
            name="email"
            value="beatriz@gmail.com"
            isEdit={editMode}
          />
        </View>

        {
        editMode && 
        <View style={styles.buttonContainer}>
          <Button type="primary" title="Salvar" onPress={() => {setEditMode(false)}} />
        </View>
        }
      </View>

      <View style={[styles.rowBetween, styles.footer]}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/elder-care.svg")}
        />

        <Pressable onPress={() => {navigation.navigate('Landing')}} style={styles.logout}>
          <Text style={[styles.actionText, styles.cancel]}>Sair da conta</Text>
          <Feather name="log-out" size={18} color={Colors.RED} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  rightScreen: {
    alignSelf: "end",
  },
  actionText: {
    fontFamily: "Poppins_600SemiBold",
  },
  edit: {
    color: Colors.BLUE,
  },
  cancel: {
    color: Colors.RED,
  },
  imageContainer: {
    alignItems: "center",
    gap: 10,
    position: "relative",
  },
  editIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 9999,
    backgroundColor: Colors.GRAY,
    padding: 8,
    zIndex: 10,
  },
  profilePic: {
    width: 135,
    height: 135,
  },
  inputs: {
    width: "100%",
    gap: 12,
  },
  rowBetween: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    marginTop: 30,
  },
  logo: {
    width: 113,
    height: 19,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  buttonContainer: {
    width: '85%',
    marginTop: 20
  }
});

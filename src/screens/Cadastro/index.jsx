import { StyleSheet, View } from "react-native";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

export const Cadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Back navigation={navigation} style={styles.back} />

      <Title>Criar Conta</Title>

      <View style={styles.inputs}>
        <TextField
          type="text"
          name="first_name"
          label="Nome"
          placeholder="John"
        />

        <TextField
          type="text"
          name="last_name"
          label="Sobrenome"
          placeholder="Doe"
        />

        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@email.com"
        />

        <TextField
          type="password"
          name="password"
          label="Senha"
          placeholder="********"
          secureTextEntry={true}
        />
      </View>

      <Button
        title="Criar"
        type="primary"
        onPress={() => {
          navigation.navigate("Tab");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingTop: 80,
    paddingHorizontal: 40,
    flex: 1,
  },
  inputs: {
    width: "auto",
    marginTop: 32,
    marginBottom: 24,
    gap: 16,
  },
  back: {
    position: "absolute",
    top: 80,
    left: 40,
  },
});

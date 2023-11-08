import { StyleSheet, View } from "react-native";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import { Colors } from "../../utilities/Colors";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Back
        navigation={navigation}
        style={{ position: "absolute", paddingTop: 80, paddingLeft: 40 }}
      />

      <Title>Login</Title>

      <View style={styles.inputs}>
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
        title="Login"
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
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  inputs: {
    width: "auto",
    marginTop: 32,
    marginBottom: 24,
    gap: 16,
  },
});

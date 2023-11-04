import { StyleSheet, View } from "react-native";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <Back />
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
        text="Login" 
        onPress={() => {
          navigation.navigate('Home');
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 64,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 16,
  },
  inputs: {
    width: "100%",
    display: "flex",
    marginTop: 32,
    marginBottom: 24,
    gap: 16,
  },
});

export default Login;

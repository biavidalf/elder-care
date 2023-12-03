import { StyleSheet, View, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import { Colors } from "../../utils/Colors";
import { authenticateUser } from "../../utils/firebase/auth";
import { useState } from "react";

const formSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("O campo e-mail é obrigatório.")
      .email("Digite um e-mail válido."),
    password: yup.string().required("O campo senha é obrigatório."),
  })
  .required();

export const Login = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoadingSubmit(true);

      await authenticateUser(email, password);

      navigation.navigate("Tab");

      // Reset field values
      ["email", "password"].forEach((field) => setValue(field, ""));
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  return (
    <View style={styles.container}>
      <Back navigation={navigation} style={styles.back} />

      <Title>Login</Title>

      <View style={styles.inputs}>
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@email.com"
          error={errors?.email}
          onChangeText={(value) => setValue("email", value)}
          {...register("email")}
        />
        <TextField
          type="password"
          name="password"
          label="Senha"
          placeholder="********"
          secureTextEntry={true}
          error={errors?.password}
          onChangeText={(value) => setValue("password", value)}
          {...register("password")}
        />
      </View>
      <Button
        title="Login"
        type="primary"
        isLoading={isLoadingSubmit}
        onPress={handleSubmit(onSubmit)}
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
  back: {
    position: "absolute",
    top: 80,
    left: 40,
  },
});

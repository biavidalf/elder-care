import { useForm } from "react-hook-form";
import { Alert, StyleSheet, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import { Colors } from "../../utils/Colors";
import { createUser } from "../../utils/firebase/auth";

const formSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("O campo nome é obrigatório."),
    lastName: yup.string().required("O campo sobrenome é obrigatório."),
    email: yup
      .string()
      .required("O campo e-mail é obrigatório.")
      .email("Digite um e-mail válido."),
    password: yup
      .string()
      .required("O campo senha é obrigatório.")
      .min(8, "A senha deve possuir pelo menos 8 caracteres."),
  })
  .required();

export const SignUp = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async ({ firstName, lastName, email, password }) => {
    try {
      await createUser(firstName, lastName, email, password);

      navigation.navigate("Tab");

      // Reset field values
      ["firstName", "lastName", "email", "password"].forEach((field) => {
        setValue(field, "");
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Back navigation={navigation} style={styles.back} />

      <Title>Criar Conta</Title>

      <View style={styles.inputs}>
        <TextField
          type="text"
          name="firstName"
          label="Nome"
          placeholder="John"
          error={errors?.firstName}
          onChangeText={(value) => setValue("firstName", value)}
          {...register("firstName")}
        />

        <TextField
          type="text"
          name="lastName"
          label="Sobrenome"
          placeholder="Doe"
          error={errors?.lastName}
          onChangeText={(value) => setValue("lastName", value)}
          {...register("lastName")}
        />

        <TextField
          type="email"
          name="email"
          label="E-mail"
          error={errors?.email}
          placeholder="example@email.com"
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

      <Button title="Criar" type="primary" onPress={handleSubmit(onSubmit)} />
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

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TaskContainer } from "../../components/ItemList";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";

import {
  addPrecaution,
  getPrecautions,
} from "../../utils/firebase/database/precautions";

import { screenMainStyle } from "../../assets/styles/screenMainStyle";
import { textStyles } from "../../assets/styles/textStyles";
import { Colors } from "../../utils/Colors";

const formSchema = yup
  .object()
  .shape({
    label: yup.string().required("O campo nome é obrigatório."),
    description: yup.string().required("O campo descrição é obrigatório."),
  })
  .required();

export const Precautions = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [precautions, setPrecautions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPrecautions(await getPrecautions());
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const onSubmit = async ({ label, description }) => {
    try {
      setIsLoadingSubmit(true);

      const id = await addPrecaution({ label, description });

      setPrecautions([...precautions, { id, label, description }]);
      setIsModalVisible(false);

      // Reset field values
      ["label", "description"].forEach((field) => {
        setValue(field, "");
      });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  return (
    <View style={screenMainStyle.main}>
      <View style={styles.screen}>
        <Text style={textStyles.title}>Cuidados</Text>
        <Text style={textStyles.subTitle}>Cuidados gerais</Text>

        {isLoading ? (
          <ActivityIndicator color={Colors.BLUE} />
        ) : precautions.length ? (
          <View style={styles.screen}>
            <ScrollView>
              {precautions.map((precaution) => {
                return <TaskContainer key={precaution.id} data={precaution} />;
              })}
            </ScrollView>
          </View>
        ) : (
          <Text style={styles.text}>Nenhum cuidado cadastrado.</Text>
        )}
      </View>

      {!isLoading && (
        <ModalCustom
          title="Adicionar Cuidado"
          isLoading={isLoadingSubmit}
          modalState={[isModalVisible, setIsModalVisible]}
          onPress={handleSubmit(onSubmit)}
        >
          <TextField
            type="text"
            name="label"
            label="Nome"
            placeholder="Fralda"
            error={errors?.label}
            onChangeText={(value) => setValue("label", value)}
            {...register("label")}
          />
          <TextField
            type="text"
            name="description"
            label="Descrição"
            placeholder="Marca BigFral, tamanho M"
            error={errors?.description}
            onChangeText={(value) => setValue("description", value)}
            {...register("description")}
          />
        </ModalCustom>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  screen: {
    flex: 1,
  },
});

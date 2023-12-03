import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Accordion } from "../../components/Accordion";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utils/Colors";

import { textStyles } from "../../assets/styles/textStyles";
import { screenMainStyle } from "../../assets/styles/screenMainStyle";
import { addDrug, getDrugs } from "../../utils/firebase/database/drug";

const windowHeight = Dimensions.get("window").height;

const formSchema = yup
  .object()
  .shape({
    name: yup.string().required("O campo nome é obrigatório."),
    dosage: yup.number().required("A dosagem diária máxima é obrigatória."),
    fastingBefore: yup.number(),
    fastingAfter: yup.number(),
    treatment: yup.string().required("O campo tratamento é obrigatório."),
    sideEffects: yup
      .string()
      .required("O campo efeitos colaterais é obrigatório."),
  })
  .required();

export const Drugs = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [drugs, setDrugs] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async ({
    name,
    dosage,
    fastingBefore,
    fastingAfter,
    treatment,
    sideEffects,
  }) => {
    try {
      console.log("TESTE");
      // await addDrug(
      //   name,
      //   dosage,
      //   fastingBefore,
      //   fastingAfter,
      //   treatment,
      //   sideEffects
      // )[
      //   // Reset field values
      //   ("name",
      //   "dosage",
      //   "fastingBefore",
      //   "fastingAfter",
      //   "treatment",
      //   "sideEffects")
      // ].forEach((field) => {
      //   setValue(field, "");
      // });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setDrugs(await getDrugs());
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={screenMainStyle.main}>
      <View>
        <Text style={textStyles.title}>Medicamentos</Text>
        {loading ? (
          <ActivityIndicator
            color={Colors.BLUE}
            size="large"
            style={styles.loading}
          />
        ) : (
          <>
            <Text style={textStyles.subTitle}>Sua lista de medicamentos</Text>
            <View style={styles.screen}>
              <ScrollView>
                {drugs.length > 0 ? (
                  drugs.map((drug) => <Accordion key={drug.id} drug={drug} />)
                ) : (
                  <Text style={styles.text}>
                    Nenhum medicamento cadastrado.
                  </Text>
                )}
              </ScrollView>
            </View>
          </>
        )}
      </View>

      {!loading && (
        <ModalCustom title="Adicionar Remédio" onPress={handleSubmit(onSubmit)}>
          <TextField
            name="name"
            label="Nome"
            placeholder="Glicazida"
            error={errors?.name}
            onChangeText={(value) => setValue("name", value)}
            {...register("name")}
          />
          <TextField
            name="dosage"
            label="Dosagem diária Máxima"
            placeholder="2"
            keyboardType="numeric"
            error={errors?.dosage}
            onChangeText={(value) => setValue("dosage", value)}
            {...register("dosage")}
          />
          <TextField
            name="fastingBefore"
            label="Jejum antes (horas)"
            placeholder="1"
            keyboardType="numeric"
            error={errors?.fastingBefore}
            onChangeText={(value) => setValue("fastingBefore", value)}
            {...register("fastingBefore")}
          />
          <TextField
            name="fastingAfter"
            label="Jejum depois (horas)"
            placeholder="2"
            keyboardType="numeric"
            error={errors?.fastingAfter}
            onChangeText={(value) => setValue("fastingAfter", value)}
            {...register("fastingAfter")}
          />
          <TextField
            name="treatment"
            label="Tratamento"
            placeholder="Diabetes"
            error={errors?.care}
            onChangeText={(value) => setValue("treatment", value)}
            {...register("treatment")}
          />
          <TextField
            name="sideEffects"
            label="Efeitos colaterais"
            placeholder="Tontura, enjôo"
            error={errors?.sideEffects}
            onChangeText={(value) => setValue("sideEffects", value)}
            {...register("sideEffects")}
          />
        </ModalCustom>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginTop: 25,
    marginBottom: 16,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  accordion: {
    flex: 1,
    gap: 6,
    flexDirection: "column",
  },
  button: {
    backgroundColor: Colors.LIGHT_BLUE,
    textAlign: "center",
    color: Colors.BLUE,
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    marginTop: 15,
    marginBottom: 48,
    padding: 12,
    borderRadius: 117,
  },
  screen: {
    maxHeight: windowHeight / 1.8,
  },
  loading: {
    marginTop: 16,
  },
});

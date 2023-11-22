import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { Accordion } from "../../components/Accordion";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utils/Colors";

import { textStyles } from "../../assets/styles/textStyles";
import { screenMainStyle } from "../../assets/styles/screenMainStyle";
import { getDrugs } from "../../utils/firebase/database/drug";

const windowHeight = Dimensions.get("window").height;

export const Drugs = ({ navigation }) => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    (async () => {
      setDrugs(await getDrugs());
    })();
  }, []);

  return (
    <View style={screenMainStyle.main}>
      <View>
        <Text style={textStyles.title}>Medicamentos</Text>
        <Text style={textStyles.subTitle}>Sua lista de medicamentos</Text>
        <View style={styles.screen}>
          <ScrollView>
            {drugs.map((drug) => {
              return <Accordion key={drug.id} title={drug.name} data={drug} />;
            })}
          </ScrollView>
        </View>
      </View>

      <ModalCustom title="Adicionar Remédio">
        <TextField
          type="text"
          name="name"
          label="Nome"
          placeholder="Glicazida"
        />
        <TextField
          type="text"
          name="dosage"
          label="Dosagem diária Máxima"
          placeholder="2"
        />
        <TextField
          type="text"
          name="fastingBefore"
          label="Jejum antes"
          placeholder="0"
        />
        <TextField
          type="text"
          name="fastingAfter"
          label="Jejum depois"
          placeholder="30min"
        />
        <TextField
          type="text"
          name="care"
          label="Tratamento"
          placeholder="Diabetes"
        />
        <TextField
          type="text"
          name="sideEffects"
          label="Efeitos colaterais"
          placeholder="Tontura, enjôo"
        />
      </ModalCustom>
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
});

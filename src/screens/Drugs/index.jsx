import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { Accordion } from "../../components/Accordion";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utils/Colors";

import { textStyles } from "../../assets/styles/textStyles";
import { screenMainStyle } from "../../assets/styles/screenMainStyle";

const windowHeight = Dimensions.get("window").height;

export const Drugs = ({ navigation }) => {
  const drugs = [
    {
      id: 1,
      nome: 'Losartana',
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 2,
      nome: "Glicazida",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 3,
      nome: "Sinvastatina",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 4,
      nome: "Dipirona",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 5,
      nome: "Paracetamol",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 6,
      nome: "Ibuprofeno",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 7,
      nome: "Atorvastatina",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 8,
      nome: "Omeprazol",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
    {
      id: 9,
      nome: "Aspirina",
      dosagemMaxDia: 'Dosagem máxima diária de 2 unidades',
      tratamento: 'Diabetes',
      jejumDepois: '30min de jejum depois',
      efeitosColaterais: 'Tontura, enjôo'
    },
  ]

  return (
    <View style={screenMainStyle.main}>
      <View>
        <Text style={textStyles.title}>Medicamentos</Text>
        <Text style={textStyles.subTitle}>Sua lista de medicamentos</Text>
        <View style={styles.screen}>
          <ScrollView>
            {drugs.map((drug) => {
              return <Accordion data={drug} title={drug.nome} key={drug.id} />;
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
  main: {
    
  },
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

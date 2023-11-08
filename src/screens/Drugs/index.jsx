import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { Accordion } from "../../components/Accordion";
import { ModalCustom } from "../../components/Modal";
import { TextField } from "../../components/TextField";
import { Colors } from "../../utilities/Colors";

const windowHeight = Dimensions.get("window").height;

export const Drugs = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>Medicamentos</Text>
        <Text style={styles.subTitle}>Sua lista de medicamentos</Text>
        <View style={styles.screen}>
          <ScrollView>
            <View style={styles.accordion}>
              <Accordion
                title="Losartana"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Glicazida"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Sinvastatina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Dipirona"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Paracetamol"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Ibuprofeno"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Atorvastatina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Amoxicilina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Omeprazol"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Aspirina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Cetirizina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Loratadina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />

              <Accordion
                title="Metformina"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi."
              />
            </View>
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
    backgroundColor: Colors.WHITE_200,
    paddingTop: 80,
    paddingHorizontal: 40,
    flex: 1,
    gap: 16,
    justifyContent: "space-between",
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

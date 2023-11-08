import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { Accordion } from '../../components/Accordion';
import { Colors } from '../../utilities/Colors'

const windowHeight = Dimensions.get('window').height;

export const Drugs = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>Medicamentos</Text>
        <Text style={styles.subTitle}>Sua lista de medicamentos</Text>
        <View style={styles.screen}>
          <ScrollView>
            <View style={styles.accordion}>
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
              <Accordion
                title='Para cê ta mol'
                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum sunt. Assumenda exercitationem officiis sed. Et atque, quod in obcaecati aliquid illo culpa commodi expedita veritatis deleniti, tempora, incidunt modi.'
              />
              
            </View>
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        + Adicionar medicamento
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: Colors.WHITE_200,
  },
  title: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginTop: 25,
    marginBottom: 16,
  },
  accordion: {
    flex: 1,
    gap: 6,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: Colors.LIGHT_BLUE,
    textAlign: 'center',
    color: Colors.BLUE,
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    marginTop: 15,
    marginBottom: 48,
    padding: 12,
    borderRadius: 117,
  },
  screen: {
    maxHeight: windowHeight / 1.8,
  },
});

import * as React from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from './../../components/Header';
import DayButton from '../../components/WeekDay/Button';
import DayTask from '../../components/WeekDay/TaskContainer';
import Button2 from '../../components/Button2';

import { Colors } from "../../utilities/Colors";

export default function Home({ navigation }) {
  const [selectedWeekDay, setSelectedWeekDay] = React.useState('segunda');

  return (
    <View style={styles.main}>
      <Header navigation={navigation} />

      <View style={styles.rotina}>
        <Text style={styles.rotinaTitle}>Rotina diária</Text>

        <View style={styles.rotinaDiaContainer}>
          <DayButton isActive={selectedWeekDay === 'segunda'} label='S' />
          <DayButton isActive={selectedWeekDay === 'terca'} label='T' />
          <DayButton isActive={selectedWeekDay === 'quarta'} label='Q' />
          <DayButton isActive={selectedWeekDay === 'quinta'} label='Q' />
          <DayButton isActive={selectedWeekDay === 'sexta'} label='S' />
          <DayButton isActive={selectedWeekDay === 'sabado'} label='S' />
          <DayButton isActive={selectedWeekDay === 'domingo'} label='D' />
        </View>

        <Text style={[styles.rotinaTitle, styles.rotinaDiaTitle]}>Segunda-feira</Text>

        <DayTask />
        <DayTask hour='7:30' label='Remédio 1' color='LIGHT_GREEN' />

        <View style={{alignSelf: 'center'}}>
          <Button2 title='Adicionar Tarefa' type='secondary'> 
            <Feather name='plus' size={18} color={Colors.BLUE} />
          </Button2>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  rotina: {
    marginTop: 20,
    gap: 10,
    flex: 1,
  },
  rotinaTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 2
  },
  rotinaDiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rotinaDiaTitle: {
    textAlign: 'center',
    marginTop: 12
  },
  
});
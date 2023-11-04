import { Pressable, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { Colors } from "../../../utilities/Colors";

function TaskContainer({ hour = '7:20', label='Acordar', color='GRAY' }){
  return (
    <Pressable style={[styles.tarefasContainer, {borderLeftColor: Colors[color]}]}>
      <Text style={styles.hourText}>{hour}</Text>
      <Text style={styles.labelText}>{label}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name='more-horizontal' size={20} color={Colors.GRAY} />
      </TouchableOpacity>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tarefasContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderLeftWidth: 3,
  },
  hourText: {
    color: Colors.GRAY,
    fontWeight: '500'
  },
  labelText: {
    flex: 1, 
    marginHorizontal: 10, 
    fontWeight: '500',
  },
  iconContainer: {
    paddingHorizontal: 4,
  }
})

export default TaskContainer
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Colors } from '../../utilities/Colors';

export function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  
  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <Text style={styles.content}>{content}</Text>;
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleItem}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <Feather name='chevron-up' size={22} />
        ) : (
          <Feather name='chevron-down' size={22} />
        )}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_300,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 1.95,
      height: 1.95,
    },
    // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 5,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 8,
    fontSize: 13
  },
});

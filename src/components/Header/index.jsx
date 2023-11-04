import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Perfil');
          }}>
          <Image style={{width: 40, height: 40}} source={require('./../../../assets/profile-pic.svg')} />
        </Pressable>

        <View style={styles.profile}>
          <Text style={styles.profileSubtitle}>Olá,</Text>
          <Text style={styles.profileTitle}>Beatriz Vidal</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Feather name="bell" size={22} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profile: {
    marginLeft: 8,
  },
  profileSubtitle: {
    fontSize: 12,
    color: '#8696BB',
    fontWeight: '500',
  },
  profileTitle: {
    color: '#2C72DA',
    fontWeight: '600',
    fontSize: 17,
  },
});

import { StyleSheet, Pressable } from 'react-native';

export default function Home({ navigation, isActive, label }) {
  
  return (
    <Pressable style={[styles.rotinaDiaBotao, !isActive || styles.rotinaDiaBotaoActive]}>
      {label}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rotinaDiaBotao:{
    backgroundColor: '#F2F2F2',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: '#8696BB',
    fontWeight: '500',
  },
  rotinaDiaBotaoActive: {
    backgroundColor: '#2C72DA',
    color: '#F5F5F5',
  }
});
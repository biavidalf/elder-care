import React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
import Button from './../../components/Button2';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.titleContainer} >
        <Text style={styles.titleText}>Elder</Text>
        <Text style={[styles.titleText, { color: '#2c72da'}]}>Care</Text>    
      </View>

      <Image
        style={styles.imageSize}
        source={require('./../../../assets/home-banner.png')}
      />

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Bem-vindo!</Text> 
        <Text style={styles.welcomeSubtitle}>Conecte-se ou crie uma conta para gerenciar as atividades do seu paciente</Text>  
        
        <View style={styles.buttonsContainer} >
          <Button title='Login' type='primary' onPress={() => navigation.navigate('Remedios')} />
          <Button title='Criar Conta' type='secondary' />
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem',
    backgroundColor: '#fff'
  },
  titleContainer: {
    flexDirection: 'row',
  },
  imageSize: {
    width: 200,
    height: 200
  },
  welcomeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  welcomeTitle:{
    fontSize: 20, 
    fontWeight: '500'
  },
  welcomeSubtitle: {
    fontSize: 13, 
    fontWeight: '400', 
    textAlign: 'center'
  },
  buttonsContainer:{
    flexDirection: 'column',
    gap: 6
  }
});


export default Landing;
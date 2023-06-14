import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Home = ({navigation}) => {
  const [post, setPost] = useState({
    eposta: '',
    sifre: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('s5_1', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>Bilişim Teknolojileri</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('s5_2', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>Etik ve Güvenlik</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('s5_3', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>
            İletişim Araştırma ve İş Birliği
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('s5_4', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>Ürün Oluşturma</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('s5_5', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>Problem Çözme ve Programlama</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A7DA2',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: '35%',
    paddingTop: '10%',
    top: -50,
  },
  button2: {
    paddingHorizontal: '35%',
    paddingTop: '10%',
    top: -180,
    width: '130%',
    height: 90,
    left: -60,
  },
  buttonTitle: {
    textAlign: 'center',
    padding: 15,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#CAD2DB',
    color: '#4A7DA2',

    borderRadius: 35,
  },
  imageContainer: {
    height: 50,
    width: 50,
    alignContent: 'center',
    paddingHorizontal: '20%',
    borderColor: '#FFFDFC',
  },
  pageTitle: {
    paddingHorizontal: '12%',
  },

  Inputs: {
    paddingHorizontal: '5%',
    paddingTop: '45%',
    paddingVertical: 10,
    padding: 10,
  },
  epostaText: {
    backgroundColor: '#CAD2DB',
    borderColor: '#4D80A6',
    textAlign: 'center',
    borderRadius: 5,
    width: '100%',
    top: -150,
    borderRadius: 35,
  },
  InputText: {
    color: '#4D80A6',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Home;

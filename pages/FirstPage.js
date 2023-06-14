import * as React from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView} from 'react-native';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{left: 10, top: -100, fontSize: 32, fontWeight: 400}}>
            Öğretmenlerimizin
          </Text>
          <Text
            style={{
              left: 10,
              top: -95,
              fontSize: 32,
              fontWeight: 400,
              textDecorationLine: 'underline',
            }}>
            Dikkatine
          </Text>
          <Text style={{left: 10, top: -40, fontSize: 20}}>
            Bu uygulama deprem bölgesindeki BT öğretmenlerinin birbirleriyle
            içerik ve materyal paylaşımı yapabilmesi; fikir alışverişinde
            bulunabilmesi için tasarlanmıştır. Paylaşımlar tamamen gönüllülük
            esaslı olup, içerik ve materyallerin 3. kişilerle paylaşılması
            yasaktır. Kullanıcıların uygulamayı amacı dışında kullanıldığı
            tespit edildiği taktirde üyelikleri sonlandırılacak olup bir daha
            kayıt gerçekleştiremeyeceklerdir.
          </Text>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('SecondPage')}
            title="Kabul Ediyorum"
          />
        </View>
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
    top: -155,
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
export default FirstPage;

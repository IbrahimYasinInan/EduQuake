import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

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
          <Text style={{left: 10, top: -120, fontSize: 32, fontWeight: 400}}>
            Hakkımızda
          </Text>

          <Text style={{left: 10, top: -100, fontSize: 20}}>
            Deprem bölgesinde yaşayan orta- okul seviyesi Bilişim Teknolojileri
            öğretmenlerinin deprem sonrası yaşadığı materyal eksikliğini, yine o
            bölgede bulunan öğretmenlerle etkileşimde bulunarak giderilmesini
            amaçlamaktayız.
          </Text>
          <Text
            style={{
              left: 10,
              top: -80,
              fontSize: 30,
              fontStyle: 'bold',
              textDecorationLine: 'underline',
            }}>
            Emeği Geçenler
          </Text>
          <Text style={{left: 10, top: -70, fontSize: 20, fontWeight: 400}}>
            Muhammed Emin Ayaz
          </Text>
          <Text style={{left: 10, top: -50, fontSize: 20, fontWeight: 400}}>
            İbrahim Yasin İnan
          </Text>
          <Text style={{left: 10, top: -30, fontSize: 20, fontWeight: 400}}>
            Eftelya Süslü
          </Text>
          <Text style={{left: 10, top: -10, fontSize: 20, fontWeight: 400}}>
            Enes Çakır
          </Text>
          <Button
            style={{
              paddingHorizontal: '35%',
              paddingTop: '10%',
              top: -155,
              color: '#4D80A6',
            }}
            onPress={() => navigation.navigate('FourthPage')}
            title="Geri Dön"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

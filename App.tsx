import * as React from 'react';
import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FivethPage from './pages/FivethPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';
import EighthPage from './pages/EighthPage';
import NinthPage from './pages/NinthPage';
import TenthPage from './pages/TenthPage';
import s5_1 from './pages/s5_1';
import s5_2 from './pages/s5_2';
import s5_3 from './pages/s5_3';
import s5_4 from './pages/s5_4';
import s5_5 from './pages/s5_5';
import s6_1 from './pages/s6_1';
import s6_2 from './pages/s6_2';
import s6_3 from './pages/s6_3';
import s6_4 from './pages/s6_4';
import s6_5 from './pages/s6_5';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Bilgilendirme Metni', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Giriş Ekranı', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Kayıt Ol', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="FourthPage"
          component={FourthPage}
          options={{
            title: 'Ana Sayfa', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="FivethPage"
          component={FivethPage}
          options={{
            title: 'Hakkımızda', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SixthPage"
          component={SixthPage}
          options={{
            title: 'Ayarlar', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SeventhPage"
          component={SeventhPage}
          options={{
            title: 'Forum', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="EighthPage"
          component={EighthPage}
          options={{
            title: 'Ders Materyalleri', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="NinthPage"
          component={NinthPage}
          options={{
            title: '5. Sınıf', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="TenthPage"
          component={TenthPage}
          options={{
            title: '6. Sınıf', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s5_1"
          component={s5_1}
          options={{
            title: 'Bilişim Teknolojileri', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s5_2"
          component={s5_2}
          options={{
            title: 'Etik ve Güvenlik', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s5_3"
          component={s5_3}
          options={{
            title: 'İletişim Araştırma ve İş Birliği', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s5_4"
          component={s5_4}
          options={{
            title: 'Ürün Oluşturma', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s5_5"
          component={s5_5}
          options={{
            title: 'Problem Çözme ve Ürün Oluşturma', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s6_1"
          component={s6_1}
          options={{
            title: 'Bilişim Teknolojileri', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s6_2"
          component={s6_2}
          options={{
            title: 'Etik ve Güvenlik', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s6_3"
          component={s6_3}
          options={{
            title: 'İletişim Araştırma ve İş Birliği', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s6_4"
          component={s6_4}
          options={{
            title: 'Ürün Oluşturma', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="s6_5"
          component={s6_5}
          options={{
            title: 'Problem Çözme ve Programlama', //Set Header Title
            headerStyle: {
              backgroundColor: '#4D80A6', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

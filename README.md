# EduQuake — Mobil Deprem Bilgilendirme Uygulaması

EduQuake, Hacettepe Üniversitesi Bilgisayar ve Öğretim Teknolojileri Eğitimi Bölümü'nün 4. sınıf Mobil Programlama dersi kapsamında geliştirilmiş bir mobil uygulamadır. Bu uygulama, kullanıcıların Türkiye'deki son depremler hakkında anlık bilgilere erişmelerini sağlar.

## Proje Amacı

EduQuake, kullanıcıların Türkiye'deki son depremler hakkında anlık bilgilere erişmelerini sağlayarak, afet bilincini artırmayı amaçlayan bir mobil uygulamadır.

## Kullanılan Teknolojiler

- **React Native**: Mobil uygulama geliştirme framework'ü.
- **Expo**: React Native uygulamalarını hızlıca geliştirmek ve test etmek için kullanılan araç seti.
- **Open Data API**: Deprem verilerini sağlamak için kullanılan açık veri API'si.

## Klasör Yapısı

```
EduQuake/
├── android/              # Android platformuna özel dosyalar
├── ios/                  # iOS platformuna özel dosyalar
├── pages/                # Uygulama sayfaları
├── __tests__/            # Test dosyaları
├── App.tsx               # Uygulamanın ana bileşeni
├── package.json          # Proje bağımlılıkları ve komutları
└── README.md             # Proje açıklaması
```

## Başlangıç

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/IbrahimYasinInan/EduQuake.git
cd EduQuake
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Uygulamayı Başlatın

- Android için:

```bash
npm run android
```

- iOS için:

```bash
npm run ios
```

> Not: iOS uygulamasını çalıştırmak için bir macOS işletim sistemine ve Xcode'a ihtiyacınız vardır.

## Kullanım

- Uygulama açıldığında, Türkiye'deki son depremler listelenir.
- Her bir deprem hakkında detaylı bilgiye ulaşmak için ilgili deprem öğesine tıklayın.
- Uygulama, kullanıcı dostu bir arayüzle deprem bilgilerini sunar.

## Testler

Uygulama, Jest framework'ü kullanılarak test edilmiştir. Testleri çalıştırmak için:

```bash
npm test
```

## Katkı

Bu projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

1. Bu repository'yi fork'layın.
2. Yeni bir dal (branch) oluşturun (`git checkout -b feature/ÖzellikAdi`).
3. Değişikliklerinizi yapın ve commit edin.
4. Değişikliklerinizi kendi fork'ınıza push'layın.
5. Pull request (PR) gönderin.

## Lisans

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz.


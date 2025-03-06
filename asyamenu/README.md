# Asya Mutfağı Menüsü Projesi

Bu proje, JavaScript kullanarak dinamik olarak oluşturulan bir Asya mutfağı menüsü web uygulamasıdır. Kullanıcılar, farklı kategorilere göre menü öğelerini filtreleyebilir ve tüm menüyü görüntüleyebilirler.

## Özellikler

* Dinamik olarak oluşturulan menü öğeleri
* Kategori bazlı filtreleme (Kore, Japon, Çin mutfakları)
* Responsive tasarım (mobil cihazlara uyumlu)
* Modern ve kullanıcı dostu arayüz
* Görsel olarak zengin içerik
* Soft gradient arka plan
* Hover efektleri ve animasyonlar

## Teknolojiler

* HTML5
* CSS3
* JavaScript (ES6+)
* Font Awesome ikonları

## Kurulum

* Projeyi bilgisayarınıza klonlayın:

  **   git clone (https://github.com/gunessumre/hafta5/blob/main/asyamenu)
* Proje klasörüne gidin:

  **   cd asyamutfagi-menu**
* index.html dosyasını tarayıcınızda açın veya bir yerel sunucu kullanarak projeyi çalıştırın.

## Proje Yapısı

**asyamenu/**

**│**

**├── index.html          # Ana HTML dosyası**

**├── styles.css          # CSS stil dosyası**

**├── app.js              # JavaScript uygulama kodu**

**└── README.md           # Proje dokümantasyonu**

## Kullanım

* Sayfa yüklendiğinde, tüm menü öğeleri görüntülenir.
* Üst kısımdaki kategori butonlarını kullanarak menüyü filtreleyebilirsiniz:
* "All" butonu tüm menü öğelerini gösterir
* "Korea" butonu sadece Kore yemeklerini gösterir
* "Japan" butonu sadece Japon yemeklerini gösterir
* "China" butonu sadece Çin yemeklerini gösterir
* Her menü öğesi, bir resim, başlık, fiyat ve açıklama içerir.
* Menü kartlarına hover ettiğinizde, kartlar hafifçe büyür ve yükselir.
* Mobil cihazlarda, tasarım otomatik olarak ekran boyutuna uyum sağlar.

## Özelleştirme

Menü öğelerini değiştirmek veya yeni öğeler eklemek için app.js dosyasındaki menu dizisini düzenleyebilirsiniz. Her menü öğesi şu özelliklere sahip olmalıdır:

**{**

**  id: **1**,                                **// Benzersiz kimlik

**  title: **"Yemek Adı"**,                   **// Yemek başlığı

**  category: **"kategori"**,                 **// Yemek kategorisi (Korea, Japan, China)

**  price: **15.99**,                         **// Fiyat

**  img: **"resim-url.jpg"**,                 **// Resim URL'si

**  desc: **"Yemek açıklaması..."**           **// Açıklama

**}**

## Tasarım Özellikleri

* Soft gradient arka plan
* Modern kart tasarımı
* Hover efektleri (büyüme, yükselme, gölge artışı)
* Responsive grid layout
* Kategori butonları için hover efektleri
* Mobil uyumlu tasarım

## Katkıda Bulunma

* Bu projeyi fork edin
* Yeni bir özellik dalı oluşturun (git checkout -b yeni-ozellik)
* Değişikliklerinizi commit edin (git commit -m 'Yeni özellik eklendi')
* Dalınıza push yapın (git push origin yeni-ozellik)
* Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.

## İletişim

Sorularınız veya önerileriniz için **mrtndn25@gmail.com** adresine e-posta gönderebilirsiniz.

---

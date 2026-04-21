# 📱 Anthropic TR — PWA Uygulaması

Anthropic Skilljar'ın 15 resmi kursunun tam Türkçe rehberi, artık kurulabilir bir uygulama olarak. iOS ve Android'de ana ekrana eklenebilir, offline çalışır, native app gibi açılır.

---

## 📦 Paket içeriği

```
app/
├── index.html           ← Ana uygulama (1 MB, tüm içerik dahil)
├── manifest.json        ← PWA kimlik kartı
├── sw.js                ← Service Worker (offline cache)
├── README.md            ← Bu dosya
└── icons/               ← 13 boyutta ikon (favicon → maskable)
    ├── icon-192.png
    ├── icon-512.png
    ├── apple-touch-icon.png
    └── ...
```

---

## 🚀 Kurulum — 3 seçenek

### ⭐ Yol 1: GitHub Pages (5 dakika, ÖNERİLEN)

Ücretsiz, HTTPS, kalıcı URL. Tam PWA deneyimi.

1. **GitHub hesabı aç** → [github.com](https://github.com)
2. **Yeni repo** oluştur (örn. `anthropic-tr`), `Public` seç
3. **"Add file → Upload files"** ile bu klasördeki **tüm dosyaları** (index.html, manifest.json, sw.js, icons/ klasörü) yükle
4. **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` · `/ (root)`
   - Save
5. 2-3 dakika sonra sayfanın üstünde URL görünür: `https://KULLANICI_ADIN.github.io/anthropic-tr/`
6. **Telefondan** bu URL'yi aç (Chrome veya Safari)
7. Tarayıcı otomatik olarak "Uygulamayı yükle" banner'ı gösterir
   - **iOS Safari:** Paylaş → "Ana Ekrana Ekle"
   - **Android Chrome:** ⋮ menü → "Uygulamayı yükle" veya "Ana ekrana ekle"
8. Ana ekranda altın A ikonu belirir → dokun → native app gibi fullscreen açılır

**Güncellemeler:** repo'ya yeni dosyayı upload ederek 2 dakikada yayınlanır, uygulama ilk açılışta otomatik günceller.

---

### 🌊 Yol 2: Netlify Drop (2 dakika, HTTPS dahil)

GitHub hesabı gerekmez. Sürükle-bırak kadar basit.

1. [app.netlify.com/drop](https://app.netlify.com/drop) sayfasını aç
2. Bu klasörün tamamını (veya ZIP'i) sürükle-bırak
3. Netlify otomatik URL atar (örn. `https://adgdk-abc123.netlify.app`)
4. Telefondan bu URL'yi aç → "Uygulamayı yükle"

**Avantaj:** hesap bile gerekmez.  
**Dezavantaj:** domain Netlify'ın rastgele atadığı olur (isterseniz custom domain alabilirsiniz).

---

### 🖥 Yol 3: Local Server (PC'de test için)

Sadece test etmek istersen, PC'de hızlıca açmanın yolu:

**Python varsa:**
```cmd
cd Desktop\anthropic-tr
python -m http.server 8080
```
Sonra tarayıcıda `http://localhost:8080` → Chrome DevTools ile PWA davranışını test edebilirsin.

**Aynı Wi-Fi'deki telefondan:**
1. PC'nin lokal IP'sini bul: `ipconfig` → IPv4 adresi (örn. `192.168.1.42`)
2. Telefondan: `http://192.168.1.42:8080`
3. Install prompt çalışır (ama HTTP'de bazı özellikler kısıtlı olabilir)

---

## 📲 Android APK olarak paketleme (opsiyonel)

PWA zaten %99 native deneyim sunuyor, ama Play Store'a yüklemek veya APK dağıtmak istersen:

### En kolay yol: PWABuilder

1. [PWABuilder.com](https://www.pwabuilder.com) aç
2. Deploy ettiğin URL'yi yapıştır (Yol 1 veya 2'den)
3. "Start" → araç manifest'i analiz eder
4. **Android paketi** seç → "Google Play" veya "Unsigned APK"
5. İndirilen `.apk` dosyasını telefona at → kur

PWABuilder arka planda **Trusted Web Activity (TWA)** teknolojisini kullanır — bu Google'ın resmi PWA-to-Android yoludur.

### Alternatif: Capacitor (developer için)

Eğer native feature'lar (ör. push notification, bluetooth) eklemek istersen Capacitor ile wrapping yapabilirsin. Android Studio ve Node.js gerekir. Normalde gerekmez.

---

## 🍎 iOS için

iOS'ta IPA üretmek Apple Developer hesabı + Xcode + Mac gerektirir — ücretli ve zahmetli. Ama PWA kurulumu iOS'ta da tam çalışır:

1. Safari'den (Chrome değil!) site URL'sini aç
2. Alt menüde Paylaş ikonu
3. "Ana Ekrana Ekle" seç
4. Ad ver → Ekle
5. Ana ekranda ikon belirir, dokununca fullscreen açılır — native app gibi

iOS Safari PWA desteği iyidir (iOS 16.4+): offline cache, manifest, push notification (limitli) çalışır.

---

## ✨ Uygulamanın özellikleri

- **15 kurs** · 253 ders · 223 quiz sorusu · 45 ek
- **3 zorluk seviyesi** (🌱 Kolay / ⚖️ Orta / 🔥 Zor) + 💯 Perfect Mode
- **Okuma modu** her ders için — A+/A− font kontrolü, ← →  navigasyon
- **3 dil** (TR/DE/EN) anında geçiş + MyMemory çevirmen
- **Notlar + highlighter** (4 renk × 3 kalınlık)
- **YouTube** playlist in-app embed
- **Offline** tam çalışır (ilk ziyaret sonrası, Service Worker sayesinde)
- **Dark mode** otomatik
- **Shortcut'lar** (uzun bas → "Quiz" veya "Kurslar" doğrudan açılır)
- **localStorage** · ilerleme, notlar, quiz skorları, font boyutu kalıcı

---

## 🔧 Sorun çözme

| Sorun | Çözüm |
|---|---|
| "Uygulamayı yükle" görünmüyor | HTTPS gerekir — `file://` veya `http://` yerine HTTPS'li URL kullan |
| Güncelleme sonrası eski içerik | Ayarlar'dan uygulamayı kaldır, tekrar yükle; veya Chrome'da `chrome://serviceworker-internals` → unregister |
| iOS'ta "Ana Ekrana Ekle" yok | Safari kullan, Chrome değil (iOS Chrome bu özelliği desteklemiyor) |
| Offline çalışmıyor | İlk kez HTTPS'ten aç, sayfa tam yüklensin; sonra SW devreye girer |

---

## 📊 Teknik detaylar

- **Boyut:** ~1.1 MB (içerik dahil), ilk yüklemeden sonra offline
- **Standartlar:** PWA (W3C), Manifest V3, Service Worker API
- **Veri saklama:** localStorage (tarayıcı başına izole)
- **Offline-first:** cache-first strategy, network-only YouTube ve çevirmen için
- **Uyumluluk:** Chrome 80+, Safari 13+, Firefox 78+, Edge 80+
- **Min. Android:** 7.0+ (Chrome 80+)
- **Min. iOS:** 13+ (Safari 13+); manifest tam destek iOS 16.4+

---

**Ali için Anthropic Skilljar kursları üzerine kurulmuştur.**  
Skilljar platformu: [anthropic.skilljar.com](https://anthropic.skilljar.com)

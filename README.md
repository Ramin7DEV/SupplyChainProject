# Təchizat Zənciri İzlənməsi 🏭⛓️

Ethereum blockchain əsasında məhsul təchizat zəncirini izləmək üçün yaradılmış tam veb tətbiqi.

## 📋 Layihə Haqqında

Bu layihə təchizat zəncirində məhsulların hərəkətini, sahilik tarixçəsini və statusunu blockchain texnologiyasından istifadə edərək izləyir. Tətbiq Solidity smart kontraktı və modern veb interfeysi vasitəsilə məhsulların şəffaf və təhlükəsiz şəkildə idarə edilməsini təmin edir.

## 🚀 Əsas Xüsusiyyətlər

### 🔐 İstifadəçi Rolları
- **Admin**: Məhsul əlavə etmə, transfer etmə və idarə etmə icazələri
- **İstifadəçi**: Məhsulları görmə və öz anbarlarını idarə etmə

### 📦 Məhsul İdarəçiliyi
- Yeni məhsul əlavə etmə
- Məhsul statusunu yeniləmə
- Məhsulları müxtəlif istifadəçilər arasında transfer etmə
- Məhsul tarixçəsini izləmə

### 📊 İzləmə və Təhlil
- Real vaxt blockchain məlumatları
- Məhsul hərəkətlərinin vizuallaşdırılması
- Anbar inventarının izlənməsi
- Əməliyyatların detallı logunun aparılması

### 🎨 Modern İstifadəçi İnterfeysi
- Responsive dizayn
- Toast bildirişləri
- Real vaxt məlumat yeniləmələri
- İnteraktiv timeline vizuallaşdırması

## 🛠️ Texnoloji Stek

### Backend
- **Smart Kontrakt**: Solidity ^0.8.0
- **Blockchain Şəbəkəsi**: Ethereum (Ganache üçün lokal inkişaf)

### Frontend
- **JavaScript**: Vanilla JS (ES6+)
- **Web3.js**: Blockchain inteqrasiyası üçün v4.13.0
- **HTML5**: Modern semantik markup
- **CSS3**: Flexbox, Grid, animasiyalar
- **Font Awesome**: İkonlar

### Dependencies
```json
{
  "web3": "^4.13.0"
}
```

## 📁 Layihə Strukturu

```
SupplyChainProject/
├── frontend/
│   ├── index.html          # Əsas HTML faylı
│   ├── app.js              # Blockchain əlaqə və tətbiq məntiqi
│   ├── index.js            # Node.js backend funksiyaları
│   ├── style.css           # Stilləndirmə
│   ├── package.json        # NPM konfigurасiyası
│   ├── package-lock.json   # Dependency lock faylı
│   └── node_modules/       # NPM paketləri
├── backend/
│   └── SupplyChain/
│       ├── sc.sol          # Smart kontrakt
│       ├── scenario.json   # Remix IDE ssenarilər
│       └── artifacts/      # Kompilyasiya edilmiş kontrakt faylları
│           ├── SupplyChain.json          # ABI və bytecode
│           └── SupplyChain_metadata.json # Metadata
└── README.md               # Bu fayl
```

## 🔧 Quraşdırma və İşə Salma

### Tələblər
- Node.js (v14+)
- NPM
- Ganache CLI və ya Ganache GUI
- MetaMask browser extension (istəyə bağlı)

### 1. Layihəni klonlayın
```bash
git clone <repository-url>
cd SupplyChainProject
```

### 2. Frontend dependencies quraşdırın
```bash
cd frontend
npm install
```

### 3. Ganache işə salın
```bash
ganache-cli --host 0.0.0.0 --port 7545 --accounts 10
```

### 4. Smart kontraktı deploy edin
1. Remix IDE-də `backend/SupplyChain/sc.sol` faylını açın
2. Solidity kompilyatorunu 0.8.0+ versiyaya təyin edin
3. Kontraktı kompilyasiya edin
4. Ganache şəbəkəsinə deploy edin
5. `app.js` faylında kontrakt ünvanını yeniləyin:
   ```javascript
   const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
   ```

### 5. Tətbiqi işə salın
```bash
cd frontend
# HTTP server işə salın (məsələn, Live Server, Python SimpleHTTPServer)
python3 -m http.server 8000
```

Brauzerdə `http://localhost:8000` ünvanına daxil olun.

## 🎮 İstifadə Təlimatı

### İlk Quraşdırma
1. Brauzerdə tətbiqi açın
2. MetaMask-ı quraşdırın və ya mövcud hesablardan birini seçin
3. Admin və ya adi istifadəçi kimi daxil olun

### Admin Funksiyaları
- **İstifadəçi adı**: `admin`
- **Şifrə**: `admin`

#### Məhsul əlavə etmə:
1. "Yeni məhsul əlavə et" bölməsinə keçin
2. Məhsul adı və tipini daxil edin
3. "Əlavə et" düyməsini basın

#### Məhsul transfer etmə:
1. Məhsul ID-sini daxil edin
2. Alıcı hesabını seçin
3. "Məhsulu Göndər" düyməsini basın

### İstifadəçi Funksiyaları
- Öz anbarını görmə
- Məhsul tarixçəsini izləmə
- Məhsul transfer etmə (öz məhsulları)

## 🏗️ Smart Kontrakt Arxitekturası

### Əsas Strukturlar
```solidity
struct Product {
    uint256 id;                 // Unikal məhsul ID-si
    string name;                // Məhsul adı
    address owner;              // Cari sahib
    address[] history;          // Sahiblik tarixçəsi
    uint256 creationTime;       // Yaradılma vaxtı
    string productType;         // Məhsul tipi
    string status;              // Cari status
}

struct User {
    string name;                // İstifadəçi adı
    address userAddress;        // Blockchain ünvanı
    bool isAdmin;              // Admin statusu
    uint256 productCount;       // Sahib olduğu məhsul sayı
}
```

### Əsas Funksiyalar
- `addProductWithDetails()`: Yeni məhsul əlavə etmə
- `transferProductFromGeneral()`: Admin tərəfindən transfer
- `transferProduct()`: İstifadəçi arası transfer
- `updateProductStatus()`: Status yeniləmə
- `getProductHistory()`: Tarixçə əldə etmə

## 🔐 Təhlükəsizlik

- **Rol əsaslı icazələr**: Admin və istifadəçi rolları ayrıca idarə olunur
- **Smart kontrakt təhlükəsizliyi**: Solidity best practices təqib edilir
- **Input validasiyası**: Bütün girişlər yoxlanılır
- **Event logging**: Bütün əməliyyatlar blockchain-də qeydə alınır

## 🧪 Test

### Frontend testing
```bash
cd frontend
npm test
```

### Smart kontrakt testing
Remix IDE-də test ssenarilərini işə salın:
```bash
# scenario.json faylındakı test ssenarilərini istifadə edin
```

## 📊 Performans

- **Blockchain əlaqələri**: Optimizasiya edilmiş Web3 sorğuları
- **Real vaxt yenilənmələr**: Effektiv polling mexanizmi
- **Caching**: LocalStorage və session cache

## 🌐 Browser Dəstəyi

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Töhfə Vermə

1. Fork edin
2. Feature branch yaradın (`git checkout -b feature/AmazingFeature`)
3. Dəyişikliklərinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch-ı push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisenziya

Bu layihə MIT Lisenziyası altında paylaşılır. Ətraflı məlumat üçün `LICENSE` faylına baxın.

## 👥 Komanda

- **Frontend Development**: Məhsul interfeysi və Web3 inteqrasiyası
- **Smart Contract**: Solidity kontrakt inkişafı
- **UI/UX Design**: Modern və responsiv dizayn

## 📞 Əlaqə

Suallarınız və ya təklifləriniz üçün:
- Email: [raminbakhshaliyev@gmail.com]
- GitHub Issues: Bu repository-də issue açın

## 🔄 Yeniliklər

### v1.0.0 (Cari)
- ✅ Əsas təchizat zənciri funksionallığı
- ✅ İstifadəçi və admin rolları
- ✅ Real vaxt blockchain məlumatları
- ✅ Məhsul vizuallaşdırması
- ✅ Responsive dizayn

### Planlaşdırılan yeniliklər
- 🔄 Multi-chain dəstəyi
- 🔄 Mobile tətbiq
- 🔄 Advanced analytics
- 🔄 QR kod inteqrasiyası
- 🔄 API documentation

---

**🌟 Bu layihəni bəyənirsinizsə, star verməyi unutmayın!**

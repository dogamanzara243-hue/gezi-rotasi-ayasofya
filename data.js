/**
 * Ayasofya Camii - Mekân Detay Verisi
 */
const SPOT_DATA = {
  id: "ayasofya-camii",
  title: "Ayasofya-i Kebîr Câmi-i Şerîfi",
  subtitle: "Tarihin ve Mimarlığın İhtişamlı Buluşma Noktası",
  category: "Tarihi Yapı & Müze",
  theme: "museum",
  hero: {
    coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1600&q=80",
    badge: "UNESCO Dünya Mirası",
    stats: [
      { label: "Yapım Yılı", value: "MS 537" },
      { label: "Mimarlar", value: "Isidoros & Anthemios" },
      { label: "Kubbe Yüksekliği", value: "55.6 Metre" },
      { label: "Yıllık Ziyaretçi", value: "3.5M+" }
    ]
  },
  venueSummary: {
    badgeTitle: "Bu Yapı / Alan Nedir?",
    typeTitle: "6. Yüzyıl Bizans Bazilikası & Osmanlı Selatin Camii",
    description: "Dünya mimarlık tarihinin en önemli anıtlarından biri olan Ayasofya; 916 yıl kilise, 481 yıl cami, 86 yıl müze olarak hizmet vermiş ve 2020 yılında yeniden ibadete açılmış devasa kubbeli bir yapıdır.",
    details: [
      { label: "Mimari Dönem", value: "Erken Bizans & Klasik Osmanlı" },
      { label: "Statü", value: "Aktif Cami & UNESCO Mirası" },
      { label: "Konum", value: "Sultanahmet, Fatih / İstanbul" }
    ]
  },
  overview: {
    title: "Mekân Hakkında & Tarihi Önemi",
    paragraphs: [
      "İmparator I. Justinianus tarafından 532-537 yılları arasında inşa ettirilen Ayasofya, tamamlandığı dönemde dünyanın en büyük katedrali unvanını elde etmiştir. Miletli Isidoros ve Trallesli Anthemios tarafından tasarlanan yapı, mühendislik sınırlarını zorlayan devasa kubbesiyle mimarlık tarihini kökünden değiştirmiştir.",
      "1453 yılında Fatih Sultan Mehmed'in İstanbul'u fethiyle birlikte camiye dönüştürülen yapı, Osmanlı mimarisinin de ilham kaynağı olmuştur. Mimar Sinan'ın eklediği dış payandalar ve minareler sayesinde yüzyıllardır depremlere direnç göstererek günümüze sapasağlam ulaşmıştır. Hristiyan mozaikleri ile devasa İslam hat levhalarını aynı çatı altında sunan Ayasofya, benzersiz bir kültürel mirastır."
    ],
    visitorNotes: [
      { label: "Ziyaret Saatleri", value: "24 Saat Açık" },
      { label: "İbadet Vakitleri", value: "Turist Girişi Kısmi" },
      { label: "Giriş Ücreti", value: "Ücretsiz (Cami Alanı)" },
      { label: "Kıyafet Kuralı", value: "Örtünme Zorunlu" }
    ]
  },
  whyVisit: {
    title: "Bu Yeri Neden Ziyaret Etmelisiniz?",
    subtitle: "Ayasofya'yı dünya mirasının zirvesine taşıyan 3 ana neden.",
    cards: [
      {
        icon: "fa-solid fa-crown",
        title: "Büyüleyici Kubbe Mimarisi",
        description: "55 metre yükseklikteki, havada süzülüyormuş hissi veren devasa kubbeyi ve 6. yüzyıl mühendislik dehasını yerinde görün."
      },
      {
        icon: "fa-solid fa-scroll",
        title: "Mozaikler ve Hatlar",
        description: "Bizans dönemine ait altın mozaikler ile Osmanlı hattatlarının devasa hat levhalarının kusursuz uyumuna tanıklık edin."
      },
      {
        icon: "fa-solid fa-earth-americas",
        title: "Kültürlerin Kesişimi",
        description: "İki büyük imparatorluğun izlerini aynı çatı altında hissettiren dünyadaki ender yapılardan birini deneyimleyin."
      }
    ]
  },
  mustSee: {
    title: "Öne Çıkan Görülmesi Gereken Detaylar",
    items: [
      {
        category: "Mozaik Sanatı",
        title: "Deesis Mozaiği",
        description: "Meryem Ana, Hz. İsa ve Vaftizci Yahya'nın tasvir edildiği, duygusal derinliği yüksek şaheser."
      },
      {
        category: "Hat Sanatı",
        title: "Devasa Hat Levhaları",
        description: "Kazasker Mustafa İzzet Efendi'nin eseri, 7.5 metre çapındaki dünyanın en büyük hat levhaları."
      },
      {
        category: "Efsane & Gizem",
        title: "Ağlayan Sütun",
        description: "Dilek sütunu olarak bilinen, yüzeyi sürekli nemli kalan ve şifa arayanların ziyaret ettiği mermer sütun."
      },
      {
        category: "Tarihi İzler",
        title: "Viking Runik Yazısı",
        description: "9. yüzyılda muhafızlık yapan Halvdan adındaki bir Viking'in mermere kazıdığı tarihi imza."
      }
    ]
  },
  transportation: {
    title: "Nasıl Gidilir?",
    methods: [
      {
        icon: "fa-solid fa-train-tram",
        title: "T1 Tramvay Hattı ile:",
        detail: "Bağcılar - Kabataş tramvay hattını kullanarak 'Sultanahmet' durağında inin, 2 dakika yürüyün."
      },
      {
        icon: "fa-solid fa-train",
        title: "Marmaray ile:",
        detail: "Sirkeci durağında inip Cağaloğlu çıkışından Sultanahmet Meydanı'na yürüyebilirsiniz."
      }
    ],
    tip: "Tarihi yarımada içi araç trafiğine kapalıdır, toplu taşıma kullanmanız şiddetle tavsiye edilir.",
    mapUrl: "https://maps.google.com/?q=Ayasofya+Cami+Istanbul",
    mapBgImage: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80"
  },
  whereToStay: {
    title: "Nerede Kalınır?",
    hotels: [
      {
        badge: "Lüks & Tarihi",
        badgeColor: "indigo",
        name: "Four Seasons Sultanahmet",
        distance: "Ayasofya'ya 200m mesafede",
        link: "#"
      },
      {
        badge: "Boutique & Spa",
        badgeColor: "emerald",
        name: "Sura Hagia Sophia Hotel",
        distance: "Ayasofya'ya 350m mesafede",
        link: "#"
      }
    ]
  },
  whereToEat: {
    title: "Yakınlarda Ne Yenir?",
    restaurants: [
      {
        badge: "Geleneksel Lezzet",
        name: "Tarihi Sultanahmet Köftecisi",
        detail: "Meşhur Izgara Köfte & Piyaz • Meydanda",
        rating: "4.8"
      },
      {
        badge: "Osmanlı Saray Mutfağı",
        name: "Matbah Restaurant",
        detail: "Otantik Saray Tarifleri • Caferağa Sok.",
        rating: "4.7"
      }
    ]
  }
};

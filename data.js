const SPOT_DATA = {
    theme: "history",
    breadcrumb: { prev: "İstanbul", home: "Tarihi Camiler", current: "Ayasofya Camii" },
    hero: {
        coverImage: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=1600&q=80",
        category: "Tarihi Cami & Mimari Şaheser",
        badge: "UNESCO Dünya Mirası",
        title: "Ayasofya-i Kebir Cami-i Şerifi",
        subtitle: "1500 yıllık görkemli tarihi, mimarlık harikası kubbesi ve medeniyetlerin buluştuğu eşsiz atmosferiyle dünya mimarlık tarihinin kalbi.",
        stats: [
            { label: "İnşa Yılı", value: "MS 537" },
            { label: "Mimar", value: "Isidoros & Anthemios" },
            { label: "Kubbe Yüksekliği", value: "55.6 Metre" },
            { label: "Konum", value: "Sultanahmet / Fatih" }
        ]
    },
    summary: {
        typeTitle: "Dünya Mimarlık Harikası",
        description: "İmparator I. Jüstinyen tarafından yaptırılan ve 1453 yılında Fatih Sultan Mehmet'in İstanbul'u fethiyle camiye dönüştürülen Ayasofya, kubbe mimarisindeki çığır açan mühendisliğiyle yüzyıllardır insanlığı büyülemektedir.",
        badges: [
            { icon: "fa-solid fa-kaaba", text: "İbadete Açıktır (Namaz Saatleri)" },
            { icon: "fa-solid fa-building-columns", text: "Yabancı Ziyaretçi Girişi Ayrıdır" },
            { icon: "fa-solid fa-shirt", text: "Uygun Kıyafet / Başörtüsü Zorunlu" }
        ]
    },
    overview: {
        paragraphs: [
            "Ayasofya, Doğu Roma (Bizans) İmparatorluğu'nun İstanbul'da inşa ettiği en büyük kilise olup tarih boyunca üç kez yeniden yapılmıştır. Günümüzdeki yapı, dönemin en ünlü matematikçi ve mimarları Miletli Isidoros ile Tralleisli Anthemios tarafından 532-537 yılları arasında rekor sayılabilecek 5 yılda tamamlanmıştır.",
            "Fatih Sultan Mehmet'in fethi sonrası kıble yönüne mihrap, minber ve Mimar Sinan tarafından eklenen devasa payandalarla güçlendirilen Ayasofya, Osmanlı döneminde de paha biçilemez hat eserleri, mahfiller ve hünkâr kasrı ile zenginleştirilmiştir. Günümüzde hem Müslümanlar için kutlu bir ibadethane hem de dünya kültürel mirasının en gözde durağıdır."
        ],
        visitorNotes: [
            { title: "Namaz Saatleri", description: "Vakit namazlarında yerli ibadet edenler için ana alan açıktır. İbadet vakitlerinde edep kurallarına uyulmalıdır." },
            { title: "Kıyafet Düzeni", description: "Omuzları ve dizleri örten kıyafetler giyilmeli; kadın ziyaretçilerin başörtüsü takması zorunludur." },
            { title: "Ziyaret Galerisi", description: "Yabancı turistler için 2. kat üst galeri ziyareti ücretli bilet sistemiyle düzenlenmektedir." },
            { title: "Fotoğraf Çekimi", description: "İbadet eden kişileri rahatsız etmeyecek şekilde flaşsız fotoğraf çekimine izin verilir." }
        ]
    },
    whyVisit: [
        { icon: "fa-solid fa-archway", title: "Muazzam Ana Kubbe", description: "Pencerelerinden süzülen ışıkla adeta havada asılı duruyormuş hissi veren 31 metre çapındaki eşsiz kubbe mühendisliği." },
        { icon: "fa-solid fa-stamp", title: "Hattat Şaheserleri", description: "Kazasker Mustafa İzzet Efendi tarafından yazılan, dünyanın en büyük hat levhaları (Allah, Hz. Muhammed, 4 Halife)." },
        { icon: "fa-solid fa-scroll", title: "Medeniyetlerin Sentezi", description: "İslam hat sanatı ile Doğu Roma mozaiklerinin aynı çatı altında bin yılı aşkın uyumuna tanıklık edin." }
    ],
    mustSee: [
        { image: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=600&q=80", title: "Ana Kubbe ve Pandantifler", description: "Dört büyük melek (Seraphim) tasviri ile desteklenen muhteşem merkez kubbe." },
        { image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=600&q=80", title: "Mihrap ve Minber", description: "Osmanlı mermer işçiliğinin en zarif örneklerinden olan altın varaklı mihrap." },
        { image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80", title: "Dev Hat Levhaları", description: "7.5 metre çapındaki ahşap üzerine altın yaldızlı tarihi hattat panoları." },
        { image: "https://images.unsplash.com/photo-1527838832766-51d7f37c9fd9?auto=format&fit=crop&w=600&q=80", title: "Sultan Mahmut Kütüphanesi", description: "Cami içerisine 18. yüzyılda eklenen barok ve klasik Osmanlı çini süslemeli kütüphane." }
    ],
    transportation: {
        methods: [
            { icon: "fa-solid fa-train-tram", title: "T1 Tramvay Hattı", detail: "Bağcılar - Kabataş T1 tramvayı ile 'Sultanahmet' durağında inerek 3 dakika yürüyebilirsiniz." },
            { icon: "fa-solid fa-train", title: "Marmaray", detail: "Sirkeci istasyonunda inip Cağaloğlu çıkışından Sultanahmet Meydanı'na yürüme mesafesindedir." },
            { icon: "fa-solid fa-bus", title: "Otobüs & Minibüs", detail: "Eminönü veya Beyazıt yönüne gelen hatları kullanıp tarihi yarımadaya ulaşabilirsiniz." }
        ],
        tip: "Sultanahmet Meydanı araç trafiğine kapalıdır. Toplu taşımada T1 Tramvay hattı veya Marmaray en pratik yoldur.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayasofya+Camii+Sultanahmet+Fatih+Istanbul"
    },
    whereToStay: [
        { name: "Four Seasons Hotel Sultanahmet", type: "Lüks Tarihi Otel", rating: "4.9", link: "https://www.google.com/travel/hotels?q=Four+Seasons+Hotel+Istanbul+at+Sultanahmet" },
        { name: "Ajwa Sultanahmet", type: "5 Yıldızlı Butik Konaklama", rating: "4.8", link: "https://www.google.com/travel/hotels?q=Ajwa+Sultanahmet+Istanbul" },
        { name: "Sura Hagia Sophia Hotel", type: "Tarihi Merkez Oteli", rating: "4.6", link: "https://www.google.com/travel/hotels?q=Sura+Hagia+Sophia+Hotel+Istanbul" }
    ],
    whereToEat: [
        { name: "Tarihi Sultanahmet Köftecisi", cuisine: "Geleneksel Türk Köftesi", rating: "4.6", link: "https://www.google.com/maps/search/?api=1&query=Tarihi+Sultanahmet+Koftecisi+Selim+Usta" },
        { name: "Seven Hills Restaurant", cuisine: "Deniz Ürünleri & Teras Manzarası", rating: "4.7", link: "https://www.google.com/maps/search/?api=1&query=Seven+Hills+Restaurant+Sultanahmet" },
        { name: "Matbah Ottoman Cuisine", cuisine: "Saray Mutfağı", rating: "4.5", link: "https://www.google.com/maps/search/?api=1&query=Matbah+Ottoman+Cuisine+Istanbul" }
    ]
};
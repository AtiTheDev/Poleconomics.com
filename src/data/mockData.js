import downloadImg from '../assets/images/download.jpg';
import newsUpdateImg from '../assets/images/news-update.png';

const featuredStoryData = {
    id: 'story-hydrogen',
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
    author: "Poleconomics Team",
    en: {
        title: "The Green Hydrogen Boom: Reshaping Global Energy",
        summary: "Green hydrogen production costs have finally undercut fossil-fuel derived hydrogen at $1.20/kg, triggering a global infrastructure race.",
        category: "Energy Economics",
        date: "Feb 18, 2026",
        fullText: "The Hydrogen Economy Takes Flight..."
    },
    ru: {
        title: "Бум зеленого водорода: Перестройка мировой энергетики",
        summary: "Затраты на производство зеленого водорода наконец упали ниже водорода из ископаемого топлива до $1.20/кг.",
        category: "Энергетическая экономика",
        date: "18 фев 2026",
        fullText: "Водородная экономика взлетает..."
    },
    az: {
        title: "Yaşıl Hidrogen Bumu: Qlobal Enerjinin Yenidən Formalaşdırılması",
        summary: "Yaşıl hidrogen istehsalı xərcləri nəhayət 1.20$/kq səviyyəsinə düşərək qalıq yanacaqlardan alınan hidrogeni üstələdi.",
        category: "Enerji İqtisadiyyatı",
        date: "18 Fev 2026",
        fullText: "Hidrogen İqtisadiyyatı Yüksəlir..."
    }
};

export const featuredStory = featuredStoryData;

const secondaryStoryData = {
    id: 'story-cities',
    image: newsUpdateImg,
    author: "Poleconomics Team",
    en: {
        title: "Urbanization 2.0: Smart Cities and Social Equity",
        summary: "How new smart city initiatives are prioritizing inclusivity alongside efficiency.",
        category: "Social Economics",
        date: "Feb 15, 2026",
        fullText: "Beyond Efficiency..."
    },
    ru: {
        title: "Урбанизация 2.0: Умные города и социальное равенство",
        summary: "Как новые инициативы умных городов ставят во главу угла инклюзивность наряду с эффективностью.",
        category: "Социальная экономика",
        date: "15 фев 2026",
        fullText: "За пределами эффективности..."
    },
    az: {
        title: "Urbanizasiya 2.0: Ağıllı Şəhərlər və Sosial Ədalət",
        summary: "Yeni ağıllı şəhər təşəbbüsləri səmərəliliklə yanaşı inklüzivliyi necə prioritetləşdirir.",
        category: "Sosial İqtisadiyyat",
        date: "15 Fev 2026",
        fullText: "Səmərəlilikdən Kənar..."
    }
};

export const secondaryStory = secondaryStoryData;

export const newsItems = [
    {
        id: 'news-ai',
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        en: {
            title: "Geneva Accord on AI Safety Signed",
            time: "1 hour ago",
            category: "Technology",
            summary: "World leaders agree on a binding framework for AGI development.",
            fullText: "Historic Agreement in Geneva..."
        },
        ru: {
            title: "Подписано Женевское соглашение о безопасности ИИ",
            time: "1 час назад",
            category: "Технологии",
            summary: "Мировые лидеры договорились об обязательных рамках для разработки общего ИИ.",
            fullText: "Историческое соглашение в Женеве..."
        },
        az: {
            title: "Süni İntellekt Təhlükəsizliyi üzrə Cenevrə Razılaşması İmzalandı",
            time: "1 saat əvvəl",
            category: "Texnologiya",
            summary: "Dünya liderləri AGI inkişafı üçün məcburi çərçivə barədə razılığa gəldilər.",
            fullText: "Cenevrədə Tarixi Razılaşma..."
        }
    },
    {
        id: 'news-rare-earth',
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        en: {
            title: "Massive Rare Earth Deposit Found in Scandinavia",
            time: "3 hours ago",
            category: "Commodities",
            summary: "Discovery of 50 million tonnes deposit boosts EU tech independence.",
            fullText: "Europe's Critical Mineral Breakthrough..."
        },
        ru: {
            title: "В Скандинавии обнаружено огромное месторождение редкоземельных металлов",
            time: "3 часа назад",
            category: "Товары",
            summary: "Открытие месторождения в 50 млн тонн укрепляет технологическую независимость ЕС.",
            fullText: "Прорыв Европы в критических минералах..."
        },
        az: {
            title: "Skandinaviyada Böyük Nadir Torpaq Yatağı Tapıldı",
            time: "3 saat əvvəl",
            category: "Əmtəələr",
            summary: "50 milyon tonluq yatağın kəşfi Aİ-nin texnoloji müstəqilliyini artırır.",
            fullText: "Avropanın Kritik Mineral Kəşfi..."
        }
    }
];

export const voicesArticles = [
    {
        id: 'voice-work-future',
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        author: "Leading Economist",
        en: {
            title: "The Future of Work in a Digital Economy",
            summary: "A leading economist discusses transformational changes in the workplace.",
            tags: ["Labor Economics", "Digital Transformation"],
            date: "Feb 2026",
            readTime: "10 min read",
            fullText: "The Digital Transformation of Labor..."
        },
        ru: {
            title: "Будущее работы в цифровой экономике",
            summary: "Ведущий экономист обсуждает трансформационные изменения на рабочем месте.",
            tags: ["Экономика труда", "Цифровая трансформация"],
            date: "Фев 2026",
            readTime: "10 мин чтения",
            fullText: "Цифровая трансформация труда..."
        },
        az: {
            title: "Rəqəmsal İqtisadiyyatda İşin Gələcəyi",
            summary: "Aparıcı iqtisadçı iş yerindəki transformasiya dəyişikliklərini müzakirə edir.",
            tags: ["Əmək İqtisadiyyatı", "Rəqəmsal Transformasiya"],
            date: "Fev 2026",
            readTime: "10 dəq oxuma",
            fullText: "Əməyin Rəqəmsal Transformasiyası..."
        }
    }
];

export const systemsArticles = [
    {
        id: 'sys-fiscal',
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
        en: { title: "Understanding Fiscal Policies", date: "January 24, 2026" },
        ru: { title: "Понимание фискальной политики", date: "24 января 2026" },
        az: { title: "Fiskal Siyasətlərin Anlaşılması", date: "24 Yanvar 2026" }
    }
];

export const resources = [
    {
        id: 301,
        image: "https://images.unsplash.com/photo-1580519542721-db7794aa64ac?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.imf.org",
        en: { title: "International Monetary Fund (IMF)", description: "The IMF provides a wealth of information on global economic stability." },
        ru: { title: "Международный валютный фонд (МВФ)", description: "МВФ предоставляет массу информации о мировой экономической стабильности." },
        az: { title: "Beynəlxalq Valyuta Fondu (BVF)", description: "BVF qlobal iqtisadi sabitlik haqqında zəngin məlumat verir." }
    }
];

export const researchPapers = [
    {
        id: 'news-dasa-crypto',
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2070&auto=format&fit=crop",
        author: "Editorial Team",
        en: {
            title: "Market Monitor: Digital Asset Stability Act",
            summary: "Global markets react to the new unified crypto regulatory framework.",
            tags: ["Market Intelligence", "Daily Brief"],
            date: "Today",
            readTime: "5 min read",
            fullText: "Crypto Markets Maturing..."
        },
        ru: {
            title: "Мониторинг рынка: Закон о стабильности цифровых активов",
            summary: "Мировые рынки реагируют на новые единые рамки регулирования криптовалют.",
            tags: ["Рыночная разведка", "Ежедневный брифинг"],
            date: "Сегодня",
            readTime: "5 мин чтения",
            fullText: "Крипторынки взрослеют..."
        },
        az: {
            title: "Bazar Monitorinqi: Rəqəmsal Aktivlərin Sabitliyi Aktı",
            summary: "Qlobal bazarlar yeni vahid kripto tənzimləmə çərçivəsinə reaksiya verir.",
            tags: ["Bazar Kəşfiyyatı", "Gündəlik Xülasə"],
            date: "Bu gün",
            readTime: "5 dəq oxuma",
            fullText: "Kripto Bazarları Yetkinləşir..."
        }
    }
];

export const pollData = {
    en: {
        question: "Will the new trade sanctions lead to a global recession?",
        options: [
            { id: 'a', label: "Yes, supply chains will break", votes: 45 },
            { id: 'b', label: "No, markets will adapt", votes: 55 }
        ]
    },
    ru: {
        question: "Приведут ли новые торговые санкции к глобальной рецессии?",
        options: [
            { id: 'a', label: "Да, цепочки поставок разорвутся", votes: 45 },
            { id: 'b', label: "Нет, рынки адаптируются", votes: 55 }
        ]
    },
    az: {
        question: "Yeni ticarət sanksiyaları qlobal tənəzzülə səbəb olacaqmı?",
        options: [
            { id: 'a', label: "Bəli, təchizat zəncirləri qırılacaq", votes: 45 },
            { id: 'b', label: "Xeyr, bazarlar uyğunlaşacaq", votes: 55 }
        ]
    }
};

export const morningBriefData = {
    en: {
        title: "The Morning Brief",
        intro: "Good morning. US Treasury yields have hit a significantly high level, rattling global equity markets. Meanwhile, the Eurozone faces a deepening manufacturing contraction. Here's what you need to know in 5 minutes.",
        points: [
            "Bond Rout: 10-year Treasury yield breaches 5%, highest since 2007.",
            "ECB Stance: Lagarde signals rates will stay restrictive despite weak growth data.",
            "Oil Jitters: Brent crude stabilizes near $90/bbl on Middle East tensions."
        ],
        cta: "Read Full Briefing"
    },
    ru: {
        title: "Утренний брифинг",
        intro: "Доброе утро. Доходность казначейских облигаций США достигла значительно высокого уровня, потрясая мировые рынки акций. Тем временем еврозона сталкивается с углубляющимся сокращением производства. Вот что вам нужно знать за 5 минут.",
        points: [
            "Обвал облигаций: Доходность 10-летних казначейских облигаций превысила 5%, самый высокий уровень с 2007 года.",
            "Позиция ЕЦБ: Лагард сигнализирует, что ставки останутся ограничительными, несмотря на слабые данные о росте.",
            "Нефтяная дрожь: Нефть марки Brent стабилизировалась около $90/барр. на фоне напряженности на Ближнем Востоке."
        ],
        cta: "Читать полный брифинг"
    },
    az: {
        title: "Səhər Xülasəsi",
        intro: "Sabahınız xeyir. ABŞ Xəzinə istiqrazlarının gəlirliliyi əhəmiyyətli dərəcədə yüksək səviyyəyə çataraq qlobal səhm bazarlarını sarsıtdı. Bu arada, Avrozona dərinləşən istehsalat azalması ilə üzləşir. 5 dəqiqə ərzində bilməli olduğunuz şeylər bunlardır.",
        points: [
            "İstiqraz Böhranı: 10 illik Xəzinə istiqrazlarının gəlirliliyi 5%-i keçdi, bu 2007-ci ildən bəri ən yüksək göstəricidir.",
            "AMB-nin Mövqeyi: Laqard, zəif artım məlumatlarına baxmayaraq faizlərin məhdudlaşdırıcı qalacağını bildirir.",
            "Neft Təşvişi: Brent markalı neft Yaxın Şərqdəki gərginlik fonunda 90$/barel ətrafında sabitləşdi."
        ],
        cta: "Tam Xülasəni Oxu"
    }
};

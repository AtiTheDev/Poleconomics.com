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
        fullText: `The Green Hydrogen Boom: Reshaping Global Energy

The global energy landscape is undergoing a seismic shift as green hydrogen production costs have finally undercut fossil-fuel derived hydrogen, hitting a record low of $1.20/kg. This critical milestone, long awaited by energy economists and policymakers, is triggering a massive reallocation of capital across the energy sector. For decades, the "hydrogen economy" was dismissed as a distant dream, hampered by high electrolysis costs and logistical challenges. However, recent technological breakthroughs in PEM electrolyzers, coupled with the plummeting cost of solar and wind energy, have created a perfect storm for rapid adoption.

Major industrial players in steel, shipping, and heavy manufacturing are racing to secure long-term supply contracts. The shift is not merely environmental but economic; companies that fail to transition risk becoming uncompetitive as carbon taxes rise and green subsidies flow. Governments worldwide are responding with aggressive infrastructure packages, subsidies, and tax incentives designed to capture a share of this burgeoning market. The European Union, in particular, has doubled down on its hydrogen strategy, aiming to become the world's leading hub for green hydrogen technology and export.

However, challenges remain. The infrastructure required to transport and store hydrogen at scale is still in its infancy. Pipelines must be retrofitted or built from scratch, and safety standards need to be harmonized globally. Furthermore, the geopolitical implications of a hydrogen-based energy system are profound, potentially shifting power from oil-rich nations to those with abundant renewable resources. As we move into the second half of the decade, the race for hydrogen dominance will likely define the next era of global energy politics.`
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
        fullText: `Urbanization 2.0: Smart Cities and Social Equity

As the world's population continues to gravitate towards urban centers, a new paradigm of city planning is emerging: Urbanization 2.0. This movement goes beyond the tech-centric "smart city" models of the past decade, which often prioritized data collection and efficiency over human needs. Instead, the new wave of urban development places social equity and inclusivity at the very heart of technological integration. It asks not just how technology can make a city run faster, but how it can make it fairer.

Municipalities are leveraging big data and AI to tackle systemic inequalities. For instance, predictive analytics are being used to optimize public transit routes in underserved neighborhoods, reducing commute times and improving access to job markets. Smart grids are democratizing energy distribution, allowing low-income households to participate in community solar projects. Moreover, digital twin technology is enabling city planners to simulate the social impact of new infrastructure projects before a single brick is laid, minimizing gentrification risks and ensuring community buy-in.

The economic implications are significant. Cities that successfully balance efficiency with equity are attracting a more diverse and resilient workforce. They are seeing higher rates of innovation and lower costs associated with social unrest and inequality. However, this transition requires a fundamental rethink of municipal governance. Data privacy rights, algorithmic bias, and the digital divide are critical issues that must be addressed to ensure that the benefits of the smart city are shared by all citizens, not just the privileged few.`
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
            fullText: `Geneva Accord on AI Safety Signed

In a historic moment for global technology governance, world leaders from 150 nations have signed the Geneva Accord on AI Safety. This binding international treaty establishes the first comprehensive regulatory framework for the development and deployment of Artificial General Intelligence (AGI). The agreement comes after months of intense diplomatic negotiations and warnings from top AI scientists about the existential risks posed by unchecked AI advancement.

The Accord mandates strict safety protocols for all large-scale AI training runs, including "red-teaming" by independent international auditors and a "kill switch" requirement for all autonomous systems. It also establishes the International AI Safety Agency (IAISA), a new UN body with the power to inspect data centers and enforce compliance. Crucially, the treaty includes provisions for technology transfer to developing nations, ensuring that the benefits of the AI revolution are not monopolized by a handful of wealthy countries.

Market reaction has been mixed. While tech ethics watchdogs have hailed the agreement as a necessary safeguard for humanity's future, some industry leaders argue that the regulations could stifle innovation and hand a strategic advantage to non-signatory actors. Tech stocks initially dipped on the news but have since stabilized as investors digest the certainty provided by a clear regulatory landscape. The implementation phase of the Accord will be critical; the coming years will test the international community's ability to coordinate on a technology that evolves faster than any bureaucracy.`
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
            fullText: `Massive Rare Earth Deposit Found in Scandinavia

A geological survey in northern Scandinavia has uncovered what is believed to be Europe's largest deposit of rare earth elements to date. The discovery, estimated to contain over 50 million tonnes of oxides, including neodymium and praseodymium, is a potential game-changer for the European Union's strategic autonomy. These minerals are critical components in the manufacture of electric vehicle motors, wind turbines, and advanced defense systems—industries that are vital to the bloc's green transition and security.

For years, Europe has been heavily dependent on imports for these critical raw materials, primarily from China, which currently controls the vast majority of the global supply chain. This dependence has been a major vulnerability, exposing European industries to price volatility and geopolitical supply shocks. The new deposit offers a path to reduce this reliance and build a domestic supply chain "from mine to magnet."

However, extracting these resources will not be easy. The deposit is located in a sensitive environmental zone, raising concerns among local communities and conservationists. The mining company has promised to use state-of-the-art "invisible mining" techniques to minimize surface impact, but the permitting process is expected to be rigorous and lengthy. The EU is likely to fast-track the project under its Critical Raw Materials Act, but balancing strategic needs with environmental standards will be a delicate diplomatic and domestic challenge.`
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
            fullText: `The Future of Work in a Digital Economy

The digital economy is fundamentally reshaping the nature of work, dismantling traditional employment models and creating new paradigms of labor. As automation and artificial intelligence take over routine cognitive and manual tasks, the value of human labor is shifting towards creativity, emotional intelligence, and complex problem-solving. This transition is not just a technological phenomenon but a profound societal restructuring that challenges our definitions of career, productivity, and social security.

We are witnessing the rise of the "liquid workforce," where careers are no longer linear paths but fluid portfolios of projects and skills. Platforms and decentralized autonomous organizations (DAOs) are replacing corporations as the primary mediators of work, enabling a truly global talent market. While this offers unprecedented flexibility and autonomy for workers, it also erodes the safety net provided by traditional employment. The link between health insurance, pension contributions, and employment status is breaking, necessitating new social contracts like Universal Basic Income or portable benefits systems.

Education systems are struggling to keep pace. The model of "front-loading" education in the first two decades of life is becoming obsolete. Instead, continuous, lifelong learning is becoming the prerequisites for economic survival. Governments and corporations must invest heavily in reskilling infrastructure to prevent a massive displacement of workers. The future of work promises liberation from drudgery, but without proactive policy management, it risks creating a "useless class" of unemployable citizens.`
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
            fullText: `Market Monitor: Digital Asset Stability Act

The passage of the Digital Asset Stability Act (DASA) has sent ripples through global financial markets, marking a turning point in the institutionalization of cryptocurrencies. For the first time, major economies have aligned on a unified regulatory framework that classifies digital assets, sets reserve requirements for stablecoin issuers, and establishes clear tax reporting standards. The immediate reaction has been a surge in institutional inflows, as pension funds and asset managers finally have the regulatory clarity they need to enter the market.

DASA aims to strike a delicate balance: mitigating the risks of money laundering and systemic instability while preserving the innovation potential of decentralized finance (DeFi). Under the new rules, "qualified" DeFi protocols that implement identity verification measures will be granted access to traditional banking rails, effectively bridging the gap between the crypto ecosystem and the fiat world. Conversely, non-compliant privacy coins and unregulated exchanges face severe restrictions, leading to a sharp sell-off in those specific assets.

Analysts predict that DASA will accelerate the "great consolidation" of the crypto industry. High compliance costs will likely squeeze out smaller players, favoring well-capitalized incumbents and traditional financial institutions launching their own digital asset desks. While crypto purists decry the legislation as a betrayal of the original cypherpunk ethos, the market consensus is that DASA is the necessary price of admission for crypto to become a mature, global asset class.`
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

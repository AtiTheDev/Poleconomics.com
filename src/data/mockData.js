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
    },
    {
        id: 'news-cbdc',
        image: "https://images.unsplash.com/photo-1620714223084-87bd6c26e133?q=80&w=2070&auto=format&fit=crop",
        en: {
            title: "Central Bank Digital Currency Pilot Launches",
            time: "5 hours ago",
            category: "Finance",
            summary: "The European Central Bank initiates the final phase of the Digital Euro project.",
            fullText: `Central Bank Digital Currency Pilot Launches

The European Central Bank (ECB) has officially launched the final pilot phase of the Digital Euro, a move that could fundamentally reshape the continent's payment landscape. This phase involves real-world testing with a select group of commercial banks and merchants across the Eurozone. The goal is to create a public digital money option that is secure, privacy-preserving, and accessible to all citizens, serving as a complement to cash rather than a replacement.

Proponents argue that a Digital Euro is essential for European "strategic autonomy" in payments, reducing reliance on non-European providers like Visa, Mastercard, and Big Tech wallets. It also aims to foster innovation by providing a programmable money layer for the digital economy. However, the project has faced skepticism from the banking sector, which fears deposit flight, and from privacy advocates concerned about government surveillance.

The ECB has promised that the Digital Euro will have "cash-like" privacy features for low-value offline transactions, a technical challenge that this pilot aims to validate. If successful, a full rollout could begin as early as 2028, potentially setting a global standard for CBDC design and implementation.`
        },
        ru: {
            title: "Запуск пилотного проекта цифровой валюты центрального банка",
            time: "5 часов назад",
            category: "Финансы",
            summary: "Европейский центральный банк начинает заключительную фазу проекта Цифрового евро.",
            fullText: `Запуск пилотного проекта цифровой валюты центрального банка

Европейский центральный банк (ЕЦБ) официально запустил заключительную пилотную фазу цифрового евро, шаг, который может фундаментально изменить платежный ландшафт континента. Эта фаза включает в себя реальное тестирование с избранной группой коммерческих банков и торговцев по всей еврозоне. Цель состоит в том, чтобы создать общедоступный вариант цифровых денег, который был бы безопасным, сохраняющим конфиденциальность и доступным для всех граждан, служа дополнением к наличным деньгам, а не их заменой.

Сторонники утверждают, что цифровой евро необходим для европейской "стратегической автономии" в платежах, снижая зависимость от неевропейских поставщиков, таких как Visa, Mastercard и кошельки Big Tech. Он также направлен на стимулирование инноваций путем предоставления программируемого денежного слоя для цифровой экономики. Однако проект столкнулся со скептицизмом со стороны банковского сектора, который опасается оттока депозитов, и со стороны защитников конфиденциальности, обеспокоенных правительственной слежкой.

ЕЦБ пообещал, что цифровой евро будет иметь функции конфиденциальности, "подобные наличным", для офлайн-транзакций низкой стоимости, техническая задача, которую призван подтвердить этот пилотный проект. В случае успеха полное внедрение может начаться уже в 2028 году, потенциально устанавливая глобальный стандарт для разработки и внедрения CBDC.`
        },
        az: {
            title: "Mərkəzi Bank Rəqəmsal Valyuta Pilotu Başlayır",
            time: "5 saat əvvəl",
            category: "Maliyyə",
            summary: "Avropa Mərkəzi Bankı Rəqəmsal Avro layihəsinin son mərhələsinə başlayır.",
            fullText: `Mərkəzi Bank Rəqəmsal Valyuta Pilotu Başlayır

Avropa Mərkəzi Bankı (AMB) qitənin ödəniş landşaftını kökündən yenidən formalaşdıra biləcək Rəqəmsal Avronun son pilot mərhələsini rəsmi olaraq başlatdı. Bu mərhələ Avrozona üzrə seçilmiş bir qrup kommersiya bankı və tacirlə real dünya sınaqlarını əhatə edir. Məqsəd, nağd pulun əvəzi deyil, tamamlayıcısı kimi xidmət edən, təhlükəsiz, məxfiliyi qoruyan və bütün vətəndaşlar üçün əlçatan olan ictimai rəqəmsal pul seçimi yaratmaqdır.

Tərəfdarlar iddia edirlər ki, Rəqəmsal Avro ödənişlərdə Avropanın "strateji muxtariyyəti" üçün vacibdir və Visa, Mastercard və Big Tech pul kisələri kimi qeyri-Avropa təminatçılarından asılılığı azaldır. O, həmçinin rəqəmsal iqtisadiyyat üçün proqramlaşdırıla bilən pul qatı təmin etməklə innovasiyaları təşviq etməyi hədəfləyir. Bununla belə, layihə depozit axınından qorxan bank sektorunun və hökumət nəzarətindən narahat olan məxfilik müdafiəçilərinin skeptisizmi ilə üzləşib.

AMB söz verib ki, Rəqəmsal Avro, bu pilotun təsdiq etməyi hədəflədiyi texniki bir problem olan aşağı dəyərli oflayn əməliyyatlar üçün "nağd pul kimi" məxfilik xüsusiyyətlərinə malik olacaq. Uğurlu olarsa, tam tətbiqetmə 2028-ci ilin əvvəlində başlaya bilər və bu, CBDC dizaynı və tətbiqi üçün qlobal standart yarada bilər.`
        }
    },
    {
        id: 'news-trade-volume',
        image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2070&auto=format&fit=crop",
        en: {
            title: "Global Trade Volume Hits Record High",
            time: "8 hours ago",
            category: "Economy",
            summary: "Despite geopolitical tensions, global merchandise trade surpassed expectations in Q4.",
            fullText: `Global Trade Volume Hits Record High

Defying predictions of de-globalization and fragmentation, global merchandise trade volumes hit an all-time high in the fourth quarter of 2025. Data released by the World Trade Organization (WTO) shows a 3.2% year-on-year increase, driven largely by a resurgence in electronics manufacturing and robust demand from emerging markets in Southeast Asia and Africa.

This resilience comes as a surprise to many analysts who had forecasted a contraction due to the proliferation of sanctions, tariffs, and "friend-shoring" policies. Instead, supply chains appear to be lengthening rather than breaking. Goods are being routed through intermediary countries like Vietnam, Mexico, and India to bypass direct trade barriers between major powers. While this adds complexity and cost, it has kept the wheels of global commerce turning.

However, the WTO warns that this growth is fragile. The shipping industry faces a bottleneck of capacity constraints and environmental regulations, while rising protectionism in the US and EU could dampen future growth. Nevertheless, the data suggests that the global economy is far more interconnected and adaptable than political rhetoric would suggest.`
        },
        ru: {
            title: "Объем мировой торговли достиг рекордного максимума",
            time: "8 часов назад",
            category: "Экономика",
            summary: "Несмотря на геополитическую напряженность, мировая торговля товарами превзошла ожидания в 4 квартале.",
            fullText: `Объем мировой торговли достиг рекордного максимума

Вопреки прогнозам о деглобализации и фрагментации, объемы мировой торговли товарами достигли исторического максимума в четвертом квартале 2025 года. Данные, опубликованные Всемирной торговой организацией (ВТО), показывают рост на 3,2% в годовом исчислении, обусловленный в значительной степени возрождением производства электроники и устойчивым спросом со стороны развивающихся рынков Юго-Восточной Азии и Африки.

Эта устойчивость стала сюрпризом для многих аналитиков, которые прогнозировали сокращение из-за распространения санкций, тарифов и политики "френд-шоринга". Вместо этого цепочки поставок, похоже, удлиняются, а не разрываются. Товары направляются через страны-посредники, такие как Вьетнам, Мексика и Индия, чтобы обойти прямые торговые барьеры между крупными державами. Хотя это добавляет сложности и затрат, это позволяет колесам мировой торговли вращаться.

Тем не менее, ВТО предупреждает, что этот рост хрупок. Судоходная отрасль сталкивается с узким местом ограничений пропускной способности и экологических норм, в то время как растущий протекционизм в США и ЕС может сдержать будущий рост. Тем не менее, данные свидетельствуют о том, что мировая экономика гораздо более взаимосвязана и адаптируема, чем можно было бы предположить из политической риторики.`
        },
        az: {
            title: "Qlobal Ticarət Həcmi Rekord Həddə Çatdı",
            time: "8 saat əvvəl",
            category: "İqtisadiyyat",
            summary: "Geosiyasi gərginliklərə baxmayaraq, qlobal mal ticarəti 4-cü rübdə gözləntiləri üstələdi.",
            fullText: `Qlobal Ticarət Həcmi Rekord Həddə Çatdı

De-qloballaşma və parçalanma proqnozlarını təkzib edərək, qlobal mal ticarəti həcmləri 2025-ci ilin dördüncü rübündə bütün zamanların ən yüksək səviyyəsinə çatdı. Ümumdünya Ticarət Təşkilatının (ÜTT) açıqladığı məlumatlar, əsasən elektronika istehsalının canlanması və Cənub-Şərqi Asiya və Afrikadakı inkişaf etməkdə olan bazarlardan gələn güclü tələb sayəsində illik 3,2% artım göstərir.

Bu dayanıqlılıq, sanksiyaların, tariflərin və "dost-şorinq" siyasətlərinin yayılması səbəbindən daralma proqnozlaşdıran bir çox analitik üçün sürpriz oldu. Bunun əvəzinə, təchizat zəncirləri qırılmaqdan daha çox uzanır kimi görünür. Mallar böyük güclər arasındakı birbaşa ticarət maneələrindən yan keçmək üçün Vyetnam, Meksika və Hindistan kimi vasitəçi ölkələr vasitəsilə yönləndirilir. Bu, mürəkkəblik və xərc əlavə etsə də, qlobal ticarətin təkərlərini fırlatmağa davam edir.

Lakin ÜTT xəbərdarlıq edir ki, bu artım kövrəkdir. Gəmiçilik sənayesi tutum məhdudiyyətləri və ekoloji qaydalarla bağlı darboğazla üzləşir, ABŞ və Aİ-də artan proteksionizm isə gələcək artımı zəiflədə bilər. Buna baxmayaraq, məlumatlar göstərir ki, qlobal iqtisadiyyat siyasi ritorikanın təklif etdiyindən qat-qat daha qarşılıqlı əlaqəli və uyğunlaşa biləndir.`
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
        author: "Policy Research Unit",
        en: {
            title: "Understanding Fiscal Policies: A Comprehensive Guide",
            summary: "An in-depth look at how government spending and taxation leverage the global economy.",
            tags: ["Policy", "Macroeconomics"],
            date: "January 24, 2026",
            readTime: "15 min read",
            fullText: `Understanding Fiscal Policies: A Comprehensive Guide

Fiscal policy remains one of the most potent tools in a government's economic arsenal, yet its mechanisms and impacts are often misunderstood. At its core, fiscal policy involves the use of government spending and taxation to influence the economy. Unlike monetary policy, which is managed by central banks and focuses on interest rates and money supply, fiscal policy is determined by the legislative and executive branches of government, making it inherently political.

The two main instruments of fiscal policy are government expenditure and taxation. When an economy is facing a recession, governments typically engage in expansionary fiscal policy. This involves increasing public spending—on infrastructure, education, or healthcare—or cutting taxes to boost disposable income and consumption. The goal is to stimulate aggregate demand, thereby increasing production and reducing unemployment. Conversely, during periods of rapid inflation or economic overheating, contractionary fiscal policy is employed. This entails reducing spending or raising taxes to cool down the economy and curb inflationary pressures.

The effectiveness of fiscal policy is a subject of ongoing debate among economists. Keynesian economists argue that active government intervention is crucial for smoothing out the business cycle, particularly during downturns when private sector activity lags. They emphasize the "multiplier effect," where an initial injection of government spending leads to a larger increase in overall national income. However, critics, often from the classical or neoclassical schools, warn of the long-term consequences of fiscal deficits, such as the "crowding out" of private investment due to higher interest rates and the burden of future debt repayment.

In the modern globalized economy, fiscal policy does not operate in a vacuum. Decisions made in one country can have spillover effects on trade partners and global financial markets. As we navigate the complexities of the 21st century—marked by aging populations, climate change calls for green investment, and digital transformation—the role of fiscal policy is evolving. Governments are now tasked with not just managing short-term fluctuations but also steering long-term structural changes, requiring a delicate balance between fiscal prudence and strategic investment.`
        },
        ru: {
            title: "Понимание фискальной политики: Полное руководство",
            summary: "Глубокий взгляд на то, как государственные расходы и налогообложение влияют на мировую экономику.",
            tags: ["Политика", "Макроэкономика"],
            date: "24 января 2026",
            readTime: "15 мин чтения",
            fullText: `Понимание фискальной политики: Полное руководство

Фискальная политика остается одним из самых мощных инструментов в экономическом арсенале правительства, однако ее механизмы и влияние часто недопонимаются. В своей основе фискальная политика предполагает использование государственных расходов и налогообложения для влияния на экономику. В отличие от монетарной политики, которой управляют центральные банки и которая фокусируется на процентных ставках и денежной массе, фискальная политика определяется законодательной и исполнительной властью, что делает ее по своей сути политической.

Двумя основными инструментами фискальной политики являются государственные расходы и налогообложение. Когда экономика сталкивается с рецессией, правительства обычно прибегают к экспансионистской фискальной политике. Это включает в себя увеличение государственных расходов — на инфраструктуру, образование или здравоохранение — или снижение налогов для повышения располагаемого дохода и потребления. Цель состоит в том, чтобы стимулировать совокупный спрос, тем самым увеличивая производство и сокращая безработицу. Наоборот, в периоды быстрой инфляции или перегрева экономики применяется сдерживающая фискальная политика. Это влечет за собой сокращение расходов или повышение налогов для охлаждения экономики и сдерживания инфляционного давления.

Эффективность фискальной политики является предметом постоянных дебатов среди экономистов. Кейнсианцы утверждают, что активное государственное вмешательство имеет решающее значение для сглаживания бизнес-цикла, особенно во время спадов, когда активность частного сектора отстает. Они подчеркивают "эффект мультипликатора", когда первоначальное вливание государственных средств приводит к большему увеличению общего национального дохода. Однако критики, часто из классической или неоклассической школ, предупреждают о долгосрочных последствиях фискального дефицита, таких как "вытеснение" частных инвестиций из-за более высоких процентных ставок и бремени будущих выплат по долгам.

В современной глобализированной экономике фискальная политика не действует в вакууме. Решения, принятые в одной стране, могут иметь побочные эффекты для торговых партнеров и мировых финансовых рынков. По мере того как мы ориентируемся в сложностях 21-го века — отмеченного старением населения, призывами к зеленым инвестициям в связи с изменением климата и цифровой трансформацией — роль фискальной политики меняется. Правительствам теперь поручено не просто управлять краткосрочными колебаниями, но и управлять долгосрочными структурными изменениями, что требует тонкого баланса между фискальной осмотрительностью и стратегическими инвестициями.`
        },
        az: {
            title: "Fiskal Siyasətlərin Anlaşılması: Əhatəli Bələdçi",
            summary: "Dövlət xərcləri və vergitutmanın qlobal iqtisadiyyata necə təsir etdiyinə dair dərin baxış.",
            tags: ["Siyasət", "Makroiqtisadiyyat"],
            date: "24 Yanvar 2026",
            readTime: "15 dəq oxuma",
            fullText: `Fiskal Siyasətlərin Anlaşılması: Əhatəli Bələdçi

Fiskal siyasət hökumətin iqtisadi arsenalında ən güclü alətlərdən biri olaraq qalır, lakin onun mexanizmləri və təsirləri tez-tez yanlış anlaşılır. Əsas etibarilə, fiskal siyasət iqtisadiyyata təsir etmək üçün dövlət xərclərindən və vergitutmadan istifadəni nəzərdə tutur. Mərkəzi banklar tərəfindən idarə olunan və faiz dərəcələrinə və pul kütləsinə diqqət yetirən pul-kredit siyasətindən fərqli olaraq, fiskal siyasət hökumətin qanunverici və icraedici qolları tərəfindən müəyyən edilir və bu da onu mahiyyətcə siyasi edir.

Fiskal siyasətin iki əsas aləti dövlət xərcləri və vergitutmadır. İqtisadiyyat tənəzzüllə üzləşdikdə, hökumətlər adətən genişləndirici fiskal siyasətə əl atırlar. Bu, sərəncamda qalan gəliri və istehlakı artırmaq üçün infrastruktur, təhsil və ya səhiyyəyə dövlət xərclərinin artırılmasını və ya vergilərin azaldılmasını əhatə edir. Məqsəd məcmu tələbi stimullaşdırmaq, bununla da istehsalı artırmaq və işsizliyi azaltmaqdır. Əksinə, sürətli inflyasiya və ya iqtisadiyyatın həddindən artıq qızması dövrlərində daraldıcı fiskal siyasət tətbiq edilir. Bu, iqtisadiyyatı soyutmaq və inflyasiya təzyiqlərini cilovlamaq üçün xərclərin azaldılmasını və ya vergilərin artırılmasını nəzərdə tutur.

Fiskal siyasətin effektivliyi iqtisadçılar arasında davam edən müzakirə mövzusudur. Keynsçi iqtisadçılar iddia edirlər ki, aktiv dövlət müdaxiləsi biznes, xüsusən də özəl sektorun fəaliyyətinin ləngidiyi tənəzzül dövrlərində biznes tsiklinin hamarlanması üçün çox vacibdir. Onlar "multiplikator effektini" vurğulayırlar, belə ki, dövlət xərclərinin ilkin inyeksiyası ümumi milli gəlirin daha böyük artımına səbəb olur. Bununla belə, tez-tez klassik və ya neoklassik məktəblərdən olan tənqidçilər, faiz dərəcələrinin yüksəlməsi və gələcək borc ödənişlərinin yükü səbəbindən özəl investisiyaların "sıxışdırılıb çıxarılması" kimi fiskal kəsirlərin uzunmüddətli nəticələri barədə xəbərdarlıq edirlər.

Müasir qloballaşan iqtisadiyyatda fiskal siyasət vakuumda fəaliyyət göstərmir. Bir ölkədə qəbul edilən qərarlar ticarət tərəfdaşlarına və qlobal maliyyə bazarlarına dolayı təsir göstərə bilər. Biz əhalinin qocalması, iqlim dəyişikliyinin yaşıl investisiyalar tələb etməsi və rəqəmsal transformasiya ilə əlamətdar olan 21-ci əsrin mürəkkəbliklərini idarə edərkən, fiskal siyasətin rolu dəyişir. İndi hökumətlərə təkcə qısamüddətli dalğalanmaları idarə etmək deyil, həm də uzunmüddətli struktur dəyişikliklərini yönləndirmək tapşırılıb ki, bu da fiskal ehtiyatlılıq və strateji investisiya arasında incə balans tələb edir.`
        }
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
        id: 'paper-semis',
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        author: "Tech Industry Analysis",
        en: {
            title: "The Semiconductor Supply Chain Vulnerability Report",
            summary: "Analyzing the bottleneck risks in the global chip ecosystem.",
            tags: ["Technology", "Supply Chain"],
            date: "Feb 12, 2026",
            readTime: "12 min read",
            fullText: `The Semiconductor Supply Chain Vulnerability Report

The global economy's reliance on semiconductors has never been greater, nor has the fragility of its supply chain been more apparent. From smart toasters to advanced fighter jets, chips are the lifeblood of modern existence. However, the production of these tiny components is concentrated in a perilously small number of geographic and corporate hands, creating a single point of failure for the entire global market. This report analyzes the current state of the semiconductor supply chain, identifying key bottlenecks and assessing the geopolitical risks that threaten to disrupt it.

The most glaring vulnerability lies in advanced logic chip manufacturing. Over 90% of the world's most advanced semiconductors (below 10nm) are produced in Taiwan. This geographic concentration presents a colossal risk scenario. Any disruption in the Taiwan Strait—be it a blockade, military conflict, or even a severe natural disaster—would halt the production of cutting-edge electronics worldwide, triggering a global depression estimated to cost trillions of dollars. Efforts by the US and EU to "onshore" fabrication capabilities via the CHIPS Act and similar initiatives are underway, but building high-end fabs takes years and billions of dollars, meaning this dependency will persist for the foreseeable future.

Beyond fabrication, the supply chain for raw materials and equipment is equally choked. One Dutch company, ASML, holds a monopoly on the Extreme Ultraviolet (EUV) lithography machines required to print the most advanced chips. Meanwhile, the supply of critical gases like neon and metals like palladium is heavily dependent on specific regions in Eastern Europe and Russia, areas currently fraught with instability. The complex web of interdependence means that a disruption in one obscure link can cascade through the entire system.

Companies are now shifting from "Just-in-Time" to "Just-in-Case" inventory strategies, stockpiling chips to buffer against future shocks. However, this exacerbates the "bullwhip effect," leading to erratic demand signals and market volatility. The path forward requires not just national investment but unprecedented international cooperation to diversify the supply chain and build resilience. Without it, the world remains one geopolitical crisis away from a digital blackout.`
        },
        ru: {
            title: "Отчет об уязвимости цепочки поставок полупроводников",
            summary: "Анализ рисков 'узких мест' в глобальной экосистеме микросхем.",
            tags: ["Технологии", "Цепочка поставок"],
            date: "12 фев 2026",
            readTime: "12 мин чтения",
            fullText: `Отчет об уязвимости цепочки поставок полупроводников

Зависимость мировой экономики от полупроводников никогда не была выше, как и хрупкость цепочки их поставок. От умных тостеров до современных истребителей — чипы являются жизненной силой современного существования. Однако производство этих крошечных компонентов сосредоточено в опасно малом количестве географических и корпоративных рук, создавая единую точку отказа для всего мирового рынка. В этом отчете анализируется текущее состояние цепочки поставок полупроводников, выявляются ключевые узкие места и оцениваются геополитические риски, угрожающие ее нарушить.

Самая очевидная уязвимость кроется в производстве передовых логических чипов. Более 90% самых передовых полупроводников в мире (ниже 10 нм) производятся на Тайване. Эта географическая концентрация представляет собой колоссальный сценарий риска. Любое нарушение в Тайваньском проливе — будь то блокада, военный конфликт или даже серьезное стихийное бедствие — остановит производство передовой электроники во всем мире, спровоцировав глобальную депрессию, оцениваемую в триллионы долларов. Усилия США и ЕС по "оншорингу" производственных мощностей с помощью Закона о чипах и аналогичных инициатив уже предпринимаются, но строительство высококлассных заводов занимает годы и миллиарды долларов, что означает, что эта зависимость сохранится в обозримом будущем.

Помимо производства, цепочка поставок сырья и оборудования также задыхается. Одна голландская компания, ASML, обладает монополией на машины для литографии в глубоком ультрафиолете (EUV), необходимые для печати самых передовых чипов. Между тем, поставки важнейших газов, таких как нео и металлов, таких как палладий, сильно зависят от конкретных регионов Восточной Европы и России, районов, в настоящее время чреватых нестабильностью. Сложная сеть взаимозависимости означает, что нарушение в одном звене может каскадом пройти через всю систему.

Компании сейчас переходят от стратегий инвентаризации "точно в срок" к стратегиям "на всякий случай", накапливая чипы, чтобы защититься от будущих потрясений. Однако это усугубляет "эффект хлыста", приводя к неустойчивым сигналам спроса и волатильности рынка. Путь вперед требует не только национальных инвестиций, но и беспрецедентного международного сотрудничества для диверсификации цепочки поставок и повышения устойчивости. Без этого мир остается в одном геополитическом кризисе от цифрового блэкаута.`
        },
        az: {
            title: "Yarımkeçirici Təchizat Zəncirinin Zəifliyi Hesabatı",
            summary: "Qlobal çip ekosistemindəki darboğaz risklərinin təhlili.",
            tags: ["Texnologiya", "Təchizat Zənciri"],
            date: "12 Fev 2026",
            readTime: "12 dəq oxuma",
            fullText: `Yarımkeçirici Təchizat Zəncirinin Zəifliyi Hesabatı

Qlobal iqtisadiyyatın yarımkeçiricilərdən asılılığı heç vaxt bu qədər böyük olmamışdı, eyni zamanda onun təchizat zəncirinin kövrəkliyi də bu qədər aşkar görünməmişdi. Ağıllı tosterlərdən qabaqcıl qırıcılara qədər, çiplər müasir mövcudluğun həyat qanıdır. Bununla belə, bu kiçik komponentlərin istehsalı təhlükəli dərəcədə az sayda coğrafi və korporativ əllərdə cəmləşib və bu da bütün qlobal bazar üçün vahid uğursuzluq nöqtəsi yaradır. Bu hesabat yarımkeçirici təchizat zəncirinin mövcud vəziyyətini təhlil edir, əsas darboğazları müəyyən edir və onu pozmaqla hədələyən qlobal siyasi riskləri qiymətləndirir.

Ən bariz zəiflik qabaqcıl məntiq çiplərinin istehsalında yatır. Dünyanın ən qabaqcıl yarımkeçiricilərinin (10nm-dən aşağı) 90%-dən çoxu Tayvanda istehsal olunur. Bu coğrafi konsentrasiya nəhəng bir risk ssenarisi təqdim edir. Tayvan boğazındakı hər hansı bir pozulma—istər blokada, hərbi münaqişə, istərsə də şiddətli təbii fəlakət—dünya miqyasında qabaqcıl elektronika istehsalını dayandıracaq və trilyonlarla dollar dəyərində qlobal depressiyaya səbəb olacaq. ABŞ və Aİ-nin CHIPS Aktı və bənzər təşəbbüslər vasitəsilə istehsal imkanlarını "daxilə qaytarmaq" səyləri davam edir, lakin yüksək səviyyəli fabriklərin qurulması illər və milyardlarla dollar tələb edir, bu da o deməkdir ki, bu asılılıq yaxın gələcəkdə davam edəcək.

İstehsaldan əlavə, xammal və avadanlıq təchizat zənciri də eyni dərəcədə boğulur. Bir Hollandiya şirkəti, ASML, ən qabaqcıl çipləri çap etmək üçün tələb olunan Ekstremal Ultrabənövşəyi (EUV) litoqrafiya maşınlarında inhisara malikdir. Bu arada, neon kimi kritik qazların və palladium kimi metalların təchizatı Şərqi Avropa və Rusiyanın xüsusi bölgələrindən, hazırda qeyri-sabitliklə dolu olan ərazilərdən çox asılıdır. Qarşılıqlı asılılığın mürəkkəb şəbəkəsi o deməkdir ki, bir qaranlıq halqadakı pozulma bütün sistemə yayıla bilər.

Şirkətlər indi gələcək şoklara qarşı bufer yaratmaq üçün çipləri yığaraq "Tam Vaxtında" inventar strategiyalarından "Hər Ehtimala Qarşı" strategiyalarına keçirlər. Lakin bu, "qamçı effekti"ni daha da pisləşdirərək, qeyri-sabit tələb siqnallarına və bazar dəyişkənliyinə səbəb olur. İrəliyə doğru yol yalnız milli investisiyaları deyil, həm də təchizat zəncirini şaxələndirmək və dayanıqlılıq qurmaq üçün görünməmiş beynəlxalq əməkdaşlığı tələb edir. Bu olmadan, dünya rəqəmsal bir qaranlıqdan yalnız bir qlobal siyasi böhran uzaqlıqdadır.`
        }
    },
    {
        id: 'paper-demographics',
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop",
        author: "Global Macro Desk",
        en: {
            title: "Demographics and Deflation: The Aging World",
            summary: "How shrinking workforces involved in major economies will suppress inflation long-term.",
            tags: ["Demographics", "Macroeconomics"],
            date: "Feb 05, 2026",
            readTime: "8 min read",
            fullText: `Demographics and Deflation: The Aging World

For the past few years, the economic narrative has been dominated by the specter of high inflation. However, looking further toward the horizon, a more structural and inexorable force is gathering strength: demographic decline. Across the developed world and key emerging markets like China, birth rates have collapsed, and populations are aging rapidly. This demographic shift is poised to become the primary driver of global economic trends in the coming decades, exerting a powerful deflationary pressure that central banks may struggle to counteract.

The economic logic is straightforward: as people age, they tend to consume less and save more. A shrinking workforce means lower aggregate demand. Japan serves as the canary in the coal mine; its struggle with persistent deflation over the past three decades mirrors its demographic trajectory. Now, Europe and East Asia are following suit. When a large segment of the population enters retirement, they shift from being net contributors to the economy to net beneficiaries, straining pension and healthcare systems. But critically, they also stop buying houses, cars, and durable goods—the engines of economic growth.

Some economists argue that a shrinking workforce will lead to labor shortages and thus wage inflation. While plausible in specific sectors like healthcare, automation and AI are likely to offset much of this pressure by replacing human labor in manufacturing and services. The net effect, therefore, leans towards deflation. With fewer people to buy goods and services, businesses will face chronic overcapacity, keeping a lid on prices.

This presents a paradox for policymakers. Traditional monetary tools like interest rate cuts are less effective when the underlying issue is a lack of demand due to fewer people. Governments will likely be forced to step in with aggressive fiscal policies, potentially monetizing debt to support the aging population. The "greying" of the global economy suggests that the era of low interest rates—despite the current inflationary blip—may return and stay for a very long time, fundamentally altering investment strategies and asset valuations.`
        },
        ru: {
            title: "Демография и дефляция: Стареющий мир",
            summary: "Как сокращение рабочей силы в крупных экономиках подавит инфляцию в долгосрочной перспективе.",
            tags: ["Демография", "Макроэкономика"],
            date: "05 фев 2026",
            readTime: "8 мин чтения",
            fullText: `Демография и дефляция: Стареющий мир

В последние несколько лет в экономическом нарративе доминировал призрак высокой инфляции. Однако, если смотреть дальше за горизонт, набирает силу более структурная и неумолимая сила: демографический спад. Во всем развитом мире и на ключевых развивающихся рынках, таких как Китай, рождаемость рухнула, а население быстро стареет. Этот демографический сдвиг готов стать основным драйвером глобальных экономических тенденций в ближайшие десятилетия, оказывая мощное дефляционное давление, с которым центральным банкам может быть трудно бороться.

Экономическая логика проста: по мере старения люди склонны потреблять меньше и сберегать больше. Сокращение рабочей силы означает снижение совокупного спроса. Япония служит канарейкой в угольной шахте; ее борьба с постоянной дефляцией в течение последних трех десятилетий отражает ее демографическую траекторию. Теперь Европа и Восточная Азия следуют этому примеру. Когда большая часть населения выходит на пенсию, они превращаются из чистых вкладчиков в экономику в чистых бенефициаров, создавая нагрузку на пенсионные системы и системы здравоохранения. Но, что критически важно, они также перестают покупать дома, машины и товары длительного пользования — двигатели экономического роста.

Некоторые экономисты утверждают, что сокращение рабочей силы приведет к нехватке рабочей силы и, следовательно, к инфляции заработной платы. Хотя это правдоподобно в конкретных секторах, таких как здравоохранение, автоматизация и ИИ, вероятно, компенсируют большую часть этого давления, заменяя человеческий труд в производстве и услугах. Таким образом, чистый эффект склоняется к дефляции. При меньшем количестве людей, покупающих товары и услуги, предприятия столкнутся с хроническим избытком мощностей, сдерживающим цены.

Это представляет собой парадокс для политиков. Традиционные монетарные инструменты, такие как снижение процентных ставок, менее эффективны, когда основной проблемой является отсутствие спроса из-за меньшего количества людей. Правительства, вероятно, будут вынуждены вмешаться с агрессивной фискальной политикой. "Поседение" мировой экономики предполагает, что эра низких процентных ставок — несмотря на нынешний инфляционный всплеск — может вернуться и остаться на очень долгое время, фундаментально меняя инвестиционные стратегии и оценку активов.`
        },
        az: {
            title: "Demoqrafiya və Deflyasiya: Qocalmaqda Olan Dünya",
            summary: "Böyük iqtisadiyyatlarda işçi qüvvəsinin azalması uzunmüddətli perspektivdə inflyasiyanı necə basdıracaq.",
            tags: ["Demoqrafiya", "Makroiqtisadiyyat"],
            date: "05 Fev 2026",
            readTime: "8 dəq oxuma",
            fullText: `Demoqrafiya və Deflyasiya: Qocalmaqda Olan Dünya

Son bir neçə ildə iqtisadi hekayəyə yüksək inflyasiya kabusu hakim kəsilmişdi. Bununla belə, üfüqə daha uzaqdan baxdıqda, daha struktur və amansız bir qüvvə güc toplayır: demoqrafik tənəzzül. Bütün inkişaf etmiş dünyada və Çin kimi əsas inkişaf etməkdə olan bazarlarda doğum nisbətləri çöküb və əhali sürətlə qocalır. Bu demoqrafik yerdəyişmə önümüzdəki onilliklərdə qlobal iqtisadi tendensiyaların əsas hərəkətverici qüvvəsi olmağa hazırlaşır və mərkəzi bankların mübarizə aparmaqda çətinlik çəkə biləcəyi güclü deflyasiya təzyiqi göstərir.

İqtisadi məntiq sadədir: insanlar yaşlandıqca daha az istehlak etməyə və daha çox qənaət etməyə meylli olurlar. Azalan işçi qüvvəsi daha aşağı məcmu tələb deməkdir. Yaponiya bu mövzuda erkən xəbərdarlıq rolunu oynayır; son üç onillikdə davamlı deflyasiya ilə mübarizəsi onun demoqrafik trayektoriyasını əks etdirir. İndi Avropa və Şərqi Asiya da onun yolunu gedir. Əhalinin böyük bir hissəsi təqaüdə çıxdıqda, onlar iqtisadiyyata töhfə verənlərdən xalis benefisiarlara çevrilərək pensiya və səhiyyə sistemlərini gərginləşdirirlər. Lakin həlledici məqam odur ki, onlar həmçinin iqtisadi artımın mühərrikləri olan evləri, maşınları və uzunömürlü malları almağı dayandırırlar.

Bəzi iqtisadçılar iddia edirlər ki, azalan işçi qüvvəsi işçi çatışmazlığına və beləliklə də əmək haqqı inflyasiyasına səbəb olacaq. Səhiyyə kimi xüsusi sektorlarda bu ağlabatan olsa da, avtomatlaşdırma və Süni İntellekt istehsal və xidmətlərdə insan əməyini əvəz edərək bu təzyiqin çoxunu kompensasiya edəcək. Buna görə də, xalis təsir deflyasiyaya meyllidir. Malları və xidmətləri alacaq daha az insan olduğu üçün, bizneslər qiymətləri aşağı saxlayan xroniki artıq güc problemi ilə üzləşəcəklər.

Bu, siyasətçilər üçün bir paradoks yaradır. Faiz dərəcələrinin azaldılması kimi ənənəvi pul alətləri, əsas problemin daha az insan səbəbindən tələb çatışmazlığı olduğu zaman daha az effektivdir. Hökumətlər, ehtimal ki, aqressiv fiskal siyasətlərlə müdaxilə etmək məcburiyyətində qalacaqlar. Qlobal iqtisadiyyatın "bozarması" göstərir ki, aşağı faiz dərəcələri erası—hazırkı inflyasiya sıçrayışına baxmayaraq—geri qayıda və çox uzun müddət qala bilər, bu da investisiya strategiyalarını və aktivlərin qiymətləndirilməsini kökündən dəyişdirir.`
        }
    },
    {
        id: 'paper-lithium',
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2070&auto=format&fit=crop",
        author: "Commodities Team",
        en: {
            title: "The Lithium Triangle: Geopolitics of the New Oil",
            summary: "South American nations are forming a cartel that could dictate EV prices for decades.",
            tags: ["Commodities", "Geopolitics"],
            date: "Jan 15, 2026",
            readTime: "9 min read",
            fullText: `The Lithium Triangle: Geopolitics of the New Oil

In the high-altitude salt flats of the Andes, a new geopolitical power bloc is forming. Chile, Bolivia, and Argentina—home to more than half of the world's known lithium reserves—are in advanced talks to form a "Lithium OPEC," a cartel designed to control the supply and pricing of the metal essential for electric vehicle batteries. As the world transitions away from fossil fuels, lithium has effectively become the new oil, and the "Lithium Triangle" nations are determined to extract maximum value from their natural bounty.

The implications for the global energy transition are profound. For years, Western automakers have relied on cheap, abundant raw materials to drive down the cost of EVs and compete with internal combustion engines. A cartel could upend this dynamic, artificially restricting supply to drive up prices. This would not only inflate the cost of electric vehicles, slowing consumer adoption, but also feed into broader inflationary pressures across the green technology sector.

Negotiations, however, are fraught with difficulty. Unlike the Gulf monarchies of OPEC, the South American nations have vastly different political and economic landscapes. Chile has a well-established, business-friendly mining sector, while Bolivia's industry is state-controlled and plagued by technological inefficiencies. Bridging these divides to create a cohesive policy is a monumental diplomatic challenge. Furthermore, the specter of direct foreign intervention looms large; major powers like China and the US are aggressively courting individual nations to secure exclusive access agreements, potentially fracturing the alliance before it fully forms.

If successful, this cartel would mark a significant shift in the balance of power between the Global North and South. Resource-rich developing nations are no longer content to be mere exporters of raw commodities; they want to move up the value chain, demanding that battery factories and processing plants be built on their soil. The Lithium Triangle's gambit is a test case for this new resource nationalism. Whether they succeed or fail, the era of cheap, easily accessible critical minerals is likely over.`
        },
        ru: {
            title: "Литиевый треугольник: Геополитика новой нефти",
            summary: "Южноамериканские страны формируют картель, который может диктовать цены на электромобили на десятилетия.",
            tags: ["Товары", "Геополитика"],
            date: "15 янв 2026",
            readTime: "9 мин чтения",
            fullText: `Литиевый треугольник: Геополитика новой нефти

На высокогорных солончаках Анд формируется новый геополитический силовой блок. Чили, Боливия и Аргентина — родина более половины известных мировых запасов лития — ведут продвинутые переговоры о формировании "Литиевой ОПЕК", картеля, призванного контролировать поставки и ценообразование металла, необходимого для аккумуляторов электромобилей. По мере того как мир отказывается от ископаемого топлива, литий фактически стал новой нефтью, и страны "Литиевого треугольника" полны решимости извлечь максимальную выгоду из своих природных богатств.

Последствия для глобального энергетического перехода огромны. В течение многих лет западные автопроизводители полагались на дешевое, обильное сырье, чтобы снизить стоимость электромобилей и конкурировать с двигателями внутреннего сгорания. Картель может перевернуть эту динамику, искусственно ограничивая предложение для повышения цен. Это не только взвинтит стоимость электромобилей, замедляя их принятие потребителями, но и подпитает более широкое инфляционное давление во всем секторе зеленых технологий.

Однако переговоры сопряжены с трудностями. В отличие от монархий Персидского залива ОПЕК, южноамериканские страны имеют совершенно разные политические и экономические ландшафты. В Чили хорошо развитый, благоприятный для бизнеса горнодобывающий сектор, в то время как промышленность Боливии контролируется государством и страдает от технологической неэффективности. Преодоление этих разногласий для создания единой политики является монументальной дипломатической задачей. Кроме того, призрак прямого иностранного вмешательства маячит на горизонте; крупные державы, такие как Китай и США, агрессивно обхаживают отдельные страны для заключения соглашений об эксклюзивном доступе, потенциально раскалывая альянс до того, как он полностью сформируется.

В случае успеха этот картель ознаменовал бы значительный сдвиг в балансе сил между Глобальным Севером и Югом. Богатые ресурсами развивающиеся страны больше не довольствуются ролью простых экспортеров сырья; они хотят продвигаться вверх по цепочке добавленной стоимости, требуя, чтобы аккумуляторные заводы и перерабатывающие предприятия строились на их земле. Гамбит Литиевого треугольника — это пробный камень для этого нового ресурсного национализма. Независимо от того, преуспеют они или потерпят неудачу, эра дешевых, легкодоступных критических минералов, вероятно, закончилась.`
        },
        az: {
            title: "Litium Üçbucağı: Yeni Neftin Geosiyasəti",
            summary: "Cənubi Amerika xalqları onilliklər ərzində EV qiymətlərini diktə edə biləcək bir kartel formalaşdırır.",
            tags: ["Əmtəələr", "Geosiyasət"],
            date: "15 Yan 2026",
            readTime: "9 dəq oxuma",
            fullText: `Litium Üçbucağı: Yeni Neftin Geosiyasəti

And dağlarının yüksək hündürlükdəki duzlaqlarında yeni bir geosiyasi güc bloku formalaşır. Dünyanın məlum litium ehtiyatlarının yarısından çoxuna sahib olan Çili, Boliviya və Argentina, elektrikli avtomobil batareyaları üçün vacib olan bu metalın təchizatına və qiymətinə nəzarət etmək üçün "Litium OPEK"i, bir kartel formalaşdırmaq üçün qabaqcıl danışıqlar aparır. Dünya qalıq yanacaqlardan uzaqlaşdıqca, litium faktiki olaraq yeni neftə çevrilib və "Litium Üçbucağı" ölkələri öz təbii sərvətlərindən maksimum dəyər əldə etməkdə qərarlıdırlar.

Qlobal enerji keçidi üçün nəticələr dərindir. İllərdir Qərb avtomobil istehsalçıları EV-lərin maya dəyərini aşağı salmaq və daxili yanma mühərrikləri ilə rəqabət aparmaq üçün ucuz, bol xammala arxalanıblar. Kartel bu dinamikanı alt-üst edə bilər, qiymətləri qaldırmaq üçün təchizatı süni şəkildə məhdudlaşdıra bilər. Bu, təkcə elektrikli avtomobillərin qiymətini şişirtməklə və istehlakçıların qəbulunu yavaşlatmaqla qalmayacaq, həm də yaşıl texnologiya sektorunda daha geniş inflyasiya təzyiqlərini qidalandıracaq.

Lakin danışıqlar çətinliklərlə doludur. OPEK-in Körfəz monarxiyalarından fərqli olaraq, Cənubi Amerika xalqları tamamilə fərqli siyasi və iqtisadi mənzərələrə malikdirlər. Çilinin yaxşı qurulmuş, biznesə yararlı mədən sektoru var, Boliviyanın sənayesi isə dövlət nəzarətindədir və texnoloji səmərəsizlikdən əziyyət çəkir. Vahid bir siyasət yaratmaq üçün bu uçurumları aradan qaldırmaq monumental diplomatik bir çağırışdır. Bundan əlavə, birbaşa xarici müdaxilə kabusu da görünür; Çin və ABŞ kimi böyük güclər ittifaq tam formalaşmazdan əvvəl onu potensial olaraq parçalayaraq müstəsna giriş müqavilələri təmin etmək üçün ayrı-ayrı ölkələri aqressiv şəkildə cəlb edirlər.

Uğurlu olarsa, bu kartel Qlobal Şimal və Cənub arasındakı güc balansında əhəmiyyətli bir dəyişikliyi qeyd edəcək. Resurslarla zəngin inkişaf etməkdə olan xalqlar artıq sadəcə xammal ixracatçısı olmaqla kifayətlənmirlər; onlar dəyər zəncirində yuxarı qalxmaq istəyirlər, batareya fabriklərinin və emal zavodlarının öz torpaqlarında tikilməsini tələb edirlər. Litium Üçbucağının gedişi bu yeni resurs millətçiliyi üçün bir sınaq halıdır. Uğur qazansalar da, uğursuz olsalar da, ucuz, asanlıqla əldə edilə bilən kritik minerallar erası ehtimal ki, bitib.`
        }
    },
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

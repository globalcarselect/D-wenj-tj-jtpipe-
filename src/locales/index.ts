export const languages = {
  en: 'English',
  cn: '中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский',
  ar: 'العربية',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  it: 'Italiano',
  hi: 'हिन्दी',
  tr: 'Türkçe'
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.certifications': 'Certifications',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Professional Pipe & Fitting Solutions',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Premium pipes and fittings for global markets',
    'hero.quote': 'Request Quote',
    'hero.products': 'View Products',
    
    // About Section
    'about.title': 'About Tianjin Zhongxintong',
    'about.description1': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD. is a leading manufacturer and exporter of high-quality pipes and fittings based in Tianjin, China.',
    'about.description2': 'Located at ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA, we specialize in producing and supplying a wide range of plastic pipes, fittings, and related accessories that meet international standards.',
    'about.feature1': 'ISO Certified Products',
    'about.feature2': 'Global Export Experience',
    'about.feature3': 'Custom Solutions',
    'about.feature4': 'Quality Guarantee',
    
    // Products Section
    'products.title': 'Our Product Categories',
    'products.subtitle': 'We offer a comprehensive range of pipes and fittings for various industries and applications',
    'products.pe': 'PE Pipes',
    'products.pvc': 'PVC Pipes',
    'products.fittings': 'Pipe Fittings',
    'products.composite': 'Composite Pipes',
    'products.view': 'View Products →',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Our products have been successfully implemented in projects worldwide',
    
    // Footer
    'footer.company': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD.',
    'footer.address': 'ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.rights': 'All rights reserved.',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.getInTouch': 'Get in Touch',
    'contact.name': 'Full Name *',
    'contact.email': 'Email Address *',
    'contact.company': 'Company',
    'contact.country': 'Country',
    'contact.subject': 'Subject *',
    'contact.message': 'Message *',
    'contact.send': 'Send Inquiry',
    'contact.sending': 'Sending...',
    'contact.info': 'Contact Information',
    'contact.office': 'Our Office',
    'contact.hours': 'Business Hours',
    'contact.phone': 'Phone',
    'contact.fax': 'Fax',
    'contact.emailSales': 'Sales Email',
    
    // Products Page
    'productsPage.title': 'Our Products',
    'productsPage.filter': 'Filter Products',
    'productsPage.category': 'Category',
    'productsPage.material': 'Material',
    'productsPage.size': 'Size',
    'productsPage.pressure': 'Pressure Rating',
    'productsPage.allCategories': 'All Categories',
    'productsPage.allMaterials': 'All Materials',
    'productsPage.allSizes': 'All Sizes',
    'productsPage.allRatings': 'All Ratings',
    'productsPage.viewDetails': 'View Details',
    'productsPage.inquiry': 'Inquiry',
    
    // Product Detail Page
    'productDetail.sizes': 'Available Sizes',
    'productDetail.pressure': 'Pressure Rating',
    'productDetail.angle': 'Angle',
    'productDetail.features': 'Key Features',
    'productDetail.applications': 'Applications',
    'productDetail.standards': 'Standards Compliance',
    'productDetail.related': 'Related Products',
    'productDetail.quote': 'Request Quote',
    'productDetail.brochure': 'Download Brochure',
    
    // Common
    'common.home': 'Home',
    'common.products': 'Products',
    'common.mondayFriday': 'Monday - Friday',
    'common.saturday': 'Saturday',
    'common.sunday': 'Sunday',
    'common.closed': 'Closed'
  },
  cn: {
    // Navigation
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.about': '关于我们',
    'nav.certifications': '质量认证',
    'nav.news': '新闻动态',
    'nav.contact': '联系我们',
    
    // Hero Section
    'hero.title': '专业管道与配件解决方案',
    'hero.subtitle': '天津中信通国际贸易有限公司 - 为全球市场提供优质管道和配件',
    'hero.quote': '获取报价',
    'hero.products': '查看产品',
    
    // About Section
    'about.title': '关于天津中信通',
    'about.description1': '天津中信通国际贸易有限公司是一家位于中国天津的领先管道和配件制造商和出口商。',
    'about.description2': '位于天津市河西区大沽南路与奉化道交口东北侧晶采大厦2-2608，我们专业生产和供应符合国际标准的各种塑料管道、配件及相关附件。',
    'about.feature1': 'ISO认证产品',
    'about.feature2': '全球出口经验',
    'about.feature3': '定制解决方案',
    'about.feature4': '质量保证',
    
    // Products Section
    'products.title': '产品类别',
    'products.subtitle': '我们为各种行业和应用提供全面的管道和配件系列',
    'products.pe': 'PE管道',
    'products.pvc': 'PVC管道',
    'products.fittings': '管道配件',
    'products.composite': '复合管道',
    'products.view': '查看产品 →',
    
    // Projects Section
    'projects.title': '项目案例',
    'projects.subtitle': '我们的产品已在全球项目中成功应用',
    
    // Footer
    'footer.company': '天津中信通国际贸易有限公司',
    'footer.address': '天津市河西区大沽南路与奉化道交口东北侧晶采大厦2-2608',
    'footer.quickLinks': '快速链接',
    'footer.contactInfo': '联系信息',
    'footer.rights': '保留所有权利。',
    
    // Contact Page
    'contact.title': '联系我们',
    'contact.getInTouch': '与我们联系',
    'contact.name': '姓名 *',
    'contact.email': '邮箱地址 *',
    'contact.company': '公司名称',
    'contact.country': '国家',
    'contact.subject': '主题 *',
    'contact.message': '留言内容 *',
    'contact.send': '发送咨询',
    'contact.sending': '发送中...',
    'contact.info': '联系信息',
    'contact.office': '公司地址',
    'contact.hours': '营业时间',
    'contact.phone': '电话',
    'contact.fax': '传真',
    'contact.emailSales': '销售邮箱',
    
    // Products Page
    'productsPage.title': '我们的产品',
    'productsPage.filter': '筛选产品',
    'productsPage.category': '类别',
    'productsPage.material': '材质',
    'productsPage.size': '尺寸',
    'productsPage.pressure': '压力等级',
    'productsPage.allCategories': '所有类别',
    'productsPage.allMaterials': '所有材质',
    'productsPage.allSizes': '所有尺寸',
    'productsPage.allRatings': '所有等级',
    'productsPage.viewDetails': '查看详情',
    'productsPage.inquiry': '咨询',
    
    // Product Detail Page
    'productDetail.sizes': '可用尺寸',
    'productDetail.pressure': '压力等级',
    'productDetail.angle': '角度',
    'productDetail.features': '主要特点',
    'productDetail.applications': '应用领域',
    'productDetail.standards': '标准符合性',
    'productDetail.related': '相关产品',
    'productDetail.quote': '获取报价',
    'productDetail.brochure': '下载手册',
    
    // Common
    'common.home': '首页',
    'common.products': '产品',
    'common.mondayFriday': '周一至周五',
    'common.saturday': '周六',
    'common.sunday': '周日',
    'common.closed': '休息'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.about': 'Sobre Nosotros',
    'nav.certifications': 'Certificaciones',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Soluciones Profesionales de Tuberías y Accesorios',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Tuberías y accesorios premium para mercados globales',
    'hero.quote': 'Solicitar Cotización',
    'hero.products': 'Ver Productos',
    
    // About Section
    'about.title': 'Sobre Tianjin Zhongxintong',
    'about.description1': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD. es un fabricante y exportador líder de tuberías y accesorios de alta calidad con sede en Tianjin, China.',
    'about.description2': 'Ubicados en ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA, nos especializamos en producir y suministrar una amplia gama de tuberías plásticas, accesorios y accesorios relacionados que cumplen con los estándares internacionales.',
    'about.feature1': 'Productos Certificados ISO',
    'about.feature2': 'Experiencia en Exportación Global',
    'about.feature3': 'Soluciones Personalizadas',
    'about.feature4': 'Garantía de Calidad',
    
    // Products Section
    'products.title': 'Nuestras Categorías de Productos',
    'products.subtitle': 'Ofrecemos una gama integral de tuberías y accesorios para diversas industrias y aplicaciones',
    'products.pe': 'Tuberías PE',
    'products.pvc': 'Tuberías PVC',
    'products.fittings': 'Accesorios de Tubería',
    'products.composite': 'Tuberías Compuestas',
    'products.view': 'Ver Productos →',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Nuestros productos se han implementado con éxito en proyectos en todo el mundo',
    
    // Footer
    'footer.company': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD.',
    'footer.address': 'ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contactInfo': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Contact Page
    'contact.title': 'Contáctenos',
    'contact.getInTouch': 'Póngase en Contacto',
    'contact.name': 'Nombre Completo *',
    'contact.email': 'Correo Electrónico *',
    'contact.company': 'Empresa',
    'contact.country': 'País',
    'contact.subject': 'Asunto *',
    'contact.message': 'Mensaje *',
    'contact.send': 'Enviar Consulta',
    'contact.sending': 'Enviando...',
    'contact.info': 'Información de Contacto',
    'contact.office': 'Nuestra Oficina',
    'contact.hours': 'Horario Comercial',
    'contact.phone': 'Teléfono',
    'contact.fax': 'Fax',
    'contact.emailSales': 'Correo de Ventas',
    
    // Products Page
    'productsPage.title': 'Nuestros Productos',
    'productsPage.filter': 'Filtrar Productos',
    'productsPage.category': 'Categoría',
    'productsPage.material': 'Material',
    'productsPage.size': 'Tamaño',
    'productsPage.pressure': 'Clasificación de Presión',
    'productsPage.allCategories': 'Todas las Categorías',
    'productsPage.allMaterials': 'Todos los Materiales',
    'productsPage.allSizes': 'Todos los Tamaños',
    'productsPage.allRatings': 'Todas las Clasificaciones',
    'productsPage.viewDetails': 'Ver Detalles',
    'productsPage.inquiry': 'Consulta',
    
    // Product Detail Page
    'productDetail.sizes': 'Tamaños Disponibles',
    'productDetail.pressure': 'Clasificación de Presión',
    'productDetail.angle': 'Ángulo',
    'productDetail.features': 'Características Principales',
    'productDetail.applications': 'Aplicaciones',
    'productDetail.standards': 'Cumplimiento de Normas',
    'productDetail.related': 'Productos Relacionados',
    'productDetail.quote': 'Solicitar Cotización',
    'productDetail.brochure': 'Descargar Folleto',
    
    // Common
    'common.home': 'Inicio',
    'common.products': 'Productos',
    'common.mondayFriday': 'Lunes - Viernes',
    'common.saturday': 'Sábado',
    'common.sunday': 'Domingo',
    'common.closed': 'Cerrado'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.certifications': 'Certifications',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Solutions Professionnelles de Tuyaux et Raccords',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Tuyaux et raccords premium pour les marchés mondiaux',
    'hero.quote': 'Demander un Devis',
    'hero.products': 'Voir les Produits',
    
    // About Section
    'about.title': 'À Propos de Tianjin Zhongxintong',
    'about.description1': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD. est un fabricant et exportateur leader de tuyaux et raccords de haute qualité basé à Tianjin, Chine.',
    'about.description2': 'Situés au ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA, nous nous spécialisons dans la production et la fourniture d\'une large gamme de tuyaux plastiques, raccords et accessoires connexes répondant aux normes internationales.',
    'about.feature1': 'Produits Certifiés ISO',
    'about.feature2': 'Expérience d\'Exportation Mondiale',
    'about.feature3': 'Solutions Personnalisées',
    'about.feature4': 'Garantie de Qualité',
    
    // Products Section
    'products.title': 'Nos Catégories de Produits',
    'products.subtitle': 'Nous offrons une gamme complète de tuyaux et raccords pour diverses industries et applications',
    'products.pe': 'Tuyaux PE',
    'products.pvc': 'Tuyaux PVC',
    'products.fittings': 'Raccords de Tuyauterie',
    'products.composite': 'Tuyaux Composites',
    'products.view': 'Voir les Produits →',
    
    // Projects Section
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Nos produits ont été mis en œuvre avec succès dans des projets à travers le monde',
    
    // Footer
    'footer.company': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD.',
    'footer.address': 'ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contactInfo': 'Informations de Contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Contact Page
    'contact.title': 'Contactez-nous',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.name': 'Nom Complet *',
    'contact.email': 'Adresse Email *',
    'contact.company': 'Entreprise',
    'contact.country': 'Pays',
    'contact.subject': 'Sujet *',
    'contact.message': 'Message *',
    'contact.send': 'Envoyer une Demande',
    'contact.sending': 'Envoi en cours...',
    'contact.info': 'Informations de Contact',
    'contact.office': 'Notre Bureau',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.phone': 'Téléphone',
    'contact.fax': 'Fax',
    'contact.emailSales': 'Email Commercial',
    
    // Products Page
    'productsPage.title': 'Nos Produits',
    'productsPage.filter': 'Filtrer les Produits',
    'productsPage.category': 'Catégorie',
    'productsPage.material': 'Matériau',
    'productsPage.size': 'Taille',
    'productsPage.pressure': 'Classe de Pression',
    'productsPage.allCategories': 'Toutes les Catégories',
    'productsPage.allMaterials': 'Tous les Matériaux',
    'productsPage.allSizes': 'Toutes les Tailles',
    'productsPage.allRatings': 'Toutes les Classes',
    'productsPage.viewDetails': 'Voir les Détails',
    'productsPage.inquiry': 'Demande',
    
    // Product Detail Page
    'productDetail.sizes': 'Tailles Disponibles',
    'productDetail.pressure': 'Classe de Pression',
    'productDetail.angle': 'Angle',
    'productDetail.features': 'Caractéristiques Principales',
    'productDetail.applications': 'Applications',
    'productDetail.standards': 'Conformité aux Normes',
    'productDetail.related': 'Produits Associés',
    'productDetail.quote': 'Demander un Devis',
    'productDetail.brochure': 'Télécharger la Brochure',
    
    // Common
    'common.home': 'Accueil',
    'common.products': 'Produits',
    'common.mondayFriday': 'Lundi - Vendredi',
    'common.saturday': 'Samedi',
    'common.sunday': 'Dimanche',
    'common.closed': 'Fermé'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.about': 'Über Uns',
    'nav.certifications': 'Zertifizierungen',
    'nav.news': 'Nachrichten',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Professionelle Rohr- und Fittinglösungen',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Premium Rohre und Fittings für globale Märkte',
    'hero.quote': 'Angebot Anfordern',
    'hero.products': 'Produkte Ansehen',
    
    // About Section
    'about.title': 'Über Tianjin Zhongxintong',
    'about.description1': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD. ist ein führender Hersteller und Exporteur hochwertiger Rohre und Fittings mit Sitz in Tianjin, China.',
    'about.description2': 'Ansässig in ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA, spezialisieren wir uns auf die Herstellung und Lieferung einer breiten Palette von Kunststoffrohren, Fittings und Zubehör, die internationalen Standards entsprechen.',
    'about.feature1': 'ISO-zertifizierte Produkte',
    'about.feature2': 'Globale Exporterfahrung',
    'about.feature3': 'Maßgeschneiderte Lösungen',
    'about.feature4': 'Qualitätsgarantie',
    
    // Products Section
    'products.title': 'Unsere Produktkategorien',
    'products.subtitle': 'Wir bieten eine umfassende Palette von Rohren und Fittings für verschiedene Industrien und Anwendungen',
    'products.pe': 'PE-Rohre',
    'products.pvc': 'PVC-Rohre',
    'products.fittings': 'Rohrverbinder',
    'products.composite': 'Verbundrohre',
    'products.view': 'Produkte Ansehen →',
    
    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.subtitle': 'Unsere Produkte wurden erfolgreich in Projekten weltweit eingesetzt',
    
    // Footer
    'footer.company': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD.',
    'footer.address': 'ROOM 2608,NO.2 OF JINGCAI BUILDING,DAGUNAN ROAD,HEXI DISTRICT,TIANJIN,CHINA',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contactInfo': 'Kontaktinformationen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Contact Page
    'contact.title': 'Kontaktieren Sie uns',
    'contact.getInTouch': 'Kontakt Aufnehmen',
    'contact.name': 'Vollständiger Name *',
    'contact.email': 'E-Mail-Adresse *',
    'contact.company': 'Firma',
    'contact.country': 'Land',
    'contact.subject': 'Betreff *',
    'contact.message': 'Nachricht *',
    'contact.send': 'Anfrage Senden',
    'contact.sending': 'Wird gesendet...',
    'contact.info': 'Kontaktinformationen',
    'contact.office': 'Unser Büro',
    'contact.hours': 'Geschäftszeiten',
    'contact.phone': 'Telefon',
    'contact.fax': 'Fax',
    'contact.emailSales': 'Verkaufs-E-Mail',
    
    // Products Page
    'productsPage.title': 'Unsere Produkte',
    'productsPage.filter': 'Produkte Filtern',
    'productsPage.category': 'Kategorie',
    'productsPage.material': 'Material',
    'productsPage.size': 'Größe',
    'productsPage.pressure': 'Druckstufe',
    'productsPage.allCategories': 'Alle Kategorien',
    'productsPage.allMaterials': 'Alle Materialien',
    'productsPage.allSizes': 'Alle Größen',
    'productsPage.allRatings': 'Alle Stufen',
    'productsPage.viewDetails': 'Details Anzeigen',
    'productsPage.inquiry': 'Anfrage',
    
    // Product Detail Page
    'productDetail.sizes': 'Verfügbare Größen',
    'productDetail.pressure': 'Druckstufe',
    'productDetail.angle': 'Winkel',
    'productDetail.features': 'Hauptmerkmale',
    'productDetail.applications': 'Anwendungen',
    'productDetail.standards': 'Normenkonformität',
    'productDetail.related': 'Verwandte Produkte',
    'productDetail.quote': 'Angebot Anfordern',
    'productDetail.brochure': 'Broschüre Herunterladen',
    
    // Common
    'common.home': 'Startseite',
    'common.products': 'Produkte',
    'common.mondayFriday': 'Montag - Freitag',
    'common.saturday': 'Samstag',
    'common.sunday': 'Sonntag',
    'common.closed': 'Geschlossen'
  },
  // Note: For other languages (ru, ar, ja, ko, pt, it, hi, tr), we use English translations as placeholders
  // These should be properly translated for production use
  ru: {
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.about': 'О нас',
    'nav.certifications': 'Сертификаты',
    'nav.news': 'Новости',
    'nav.contact': 'Контакты',
    'hero.title': 'Профессиональные решения для труб и фитингов',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Премиальные трубы и фитинги для мировых рынков',
    'hero.quote': 'Запросить предложение',
    'hero.products': 'Посмотреть продукты'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.certifications': 'الشهادات',
    'nav.news': 'الأخبار',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'حلول أنابيب وتركيبات احترافية',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - أنابيب وتركيبات ممتازة للأسواق العالمية',
    'hero.quote': 'طلب عرض سعر',
    'hero.products': 'عرض المنتجات'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.products': '製品',
    'nav.about': '会社概要',
    'nav.certifications': '認証',
    'nav.news': 'ニュース',
    'nav.contact': 'お問い合わせ',
    'hero.title': 'プロフェッショナルなパイプ・フィッティングソリューション',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - グローバル市場向けプレミアムパイプおよびフィッティング',
    'hero.quote': '見積もりを依頼',
    'hero.products': '製品を見る'
  },
  ko: {
    'nav.home': '홈',
    'nav.products': '제품',
    'nav.about': '회사소개',
    'nav.certifications': '인증',
    'nav.news': '뉴스',
    'nav.contact': '연락처',
    'hero.title': '전문 파이프 및 피팅 솔루션',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - 글로벌 시장을 위한 프리미엄 파이프 및 피팅',
    'hero.quote': '견적 요청',
    'hero.products': '제품 보기'
  },
  pt: {
    'nav.home': 'Início',
    'nav.products': 'Produtos',
    'nav.about': 'Sobre Nós',
    'nav.certifications': 'Certificações',
    'nav.news': 'Notícias',
    'nav.contact': 'Contato',
    'hero.title': 'Soluções Profissionais de Tubos e Conexões',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Tubos e conexões premium para mercados globais',
    'hero.quote': 'Solicitar Orçamento',
    'hero.products': 'Ver Produtos'
  },
  it: {
    'nav.home': 'Home',
    'nav.products': 'Prodotti',
    'nav.about': 'Chi Siamo',
    'nav.certifications': 'Certificazioni',
    'nav.news': 'Notizie',
    'nav.contact': 'Contatti',
    'hero.title': 'Soluzioni Professionali per Tubi e Raccordi',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Tubi e raccordi premium per mercati globali',
    'hero.quote': 'Richiedi Preventivo',
    'hero.products': 'Vedi Prodotti'
  },
  hi: {
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.about': 'हमारे बारे में',
    'nav.certifications': 'प्रमाणपत्र',
    'nav.news': 'समाचार',
    'nav.contact': 'संपर्क करें',
    'hero.title': 'पेशेवर पाइप और फिटिंग समाधान',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - वैश्विक बाजारों के लिए प्रीमियम पाइप और फिटिंग',
    'hero.quote': 'उद्धरण अनुरोध करें',
    'hero.products': 'उत्पाद देखें'
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.about': 'Hakkımızda',
    'nav.certifications': 'Sertifikalar',
    'nav.news': 'Haberler',
    'nav.contact': 'İletişim',
    'hero.title': 'Profesyonel Boru ve Fittings Çözümleri',
    'hero.subtitle': 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Küresel pazarlar için premium borular ve fittings',
    'hero.quote': 'Fiyat Teklifi İste',
    'hero.products': 'Ürünleri Görüntüle'
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(key: TranslationKey, language: Language): string {
  const langTranslations = translations[language] as Record<TranslationKey, string>;
  const defaultTranslations = translations[defaultLanguage] as Record<TranslationKey, string>;
  
  return langTranslations[key] || defaultTranslations[key] || key;
}
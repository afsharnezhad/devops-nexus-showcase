export type Language = 'en' | 'fa';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    services: 'Services',
    clients: 'Customers',
    blog: 'Blog',
    contact: 'Contact',
    itSupportNav: 'IT Support',
    devopsNav: 'DevOps',

    // Page Banners
    devopsBannerTag: 'DevOps Engineering',
    devopsBannerTitle: 'Automate. Scale. Deliver.',
    devopsBannerSubtitle: 'End-to-end DevOps consulting — CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration and multi-cloud architecture engineered for velocity and reliability.',
    itBannerTag: 'IT Support Services',
    itBannerTitle: 'Reliable IT. Anywhere. Anytime.',
    itBannerSubtitle: 'Enterprise-grade IT support covering networks, server hardening, 24/7 help desk and endpoint security — keeping your business resilient and productive.',

    // Blog CTA Banner
    blogCtaTag: 'Knowledge Hub',
    blogCtaTitle: 'Read the latest articles',
    blogCtaSubtitle: 'Insights, tutorials and deep dives on DevOps, cloud architecture and IT engineering.',
    blogCtaButton: 'Read Articles',
    backBtn: 'Back',
    
    // Hero Section
    heroTitle: 'DevOps Engineer & IT Consultant',
    heroSubtitle: 'Transforming infrastructure with modern DevOps practices and cloud technologies',
    heroDescription: 'With 9 years of experience in IT, I specialize in DevOps automation, cloud infrastructure, and system administration to help businesses scale efficiently.',
    getStarted: 'Get Started',
    viewWork: 'View My Work',
    
    // Tech Stack
    techStackTitle: 'Technologies I Work With',
    techStackSubtitle: 'Cutting-edge tools and platforms I use to deliver exceptional results',
    
    // About Section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Learn more about my journey and expertise',
    aboutBio: 'With 9 years of experience in IT, I specialize in DevOps, Linux system administration, networking, and cloud technologies. I help businesses optimize their infrastructure and streamline their development processes.',
    aboutExperience: 'Years of Experience',
    aboutProjects: 'Projects Completed',
    aboutClients: 'Happy Clients',
    
    // Skills Section
    skillsTitle: 'Skills & Expertise',
    skillsSubtitle: 'My technical proficiencies across various domains',
    
    // Services Section
    servicesTitle: 'Services',
    servicesSubtitle: 'Comprehensive IT solutions tailored to your business needs',
    devopsAutomation: 'DevOps Automation',
    devopsAutomationDesc: 'Streamline your development and deployment processes with modern CI/CD pipelines, infrastructure as code, and automated testing.',
    cloudDocker: 'Cloud & Docker',
    cloudDockerDesc: 'Containerize applications and deploy scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.',
    itSupport: 'IT Support',
    itSupportDesc: 'Comprehensive technical support, system maintenance, and troubleshooting for your IT infrastructure.',
    cybersecurity: 'Cybersecurity',
    cybersecurityDesc: 'Implement robust security measures, vulnerability assessments, and compliance frameworks to protect your digital assets.',
    
    // Clients Section
    clientsTitle: 'Clients',
    clientsSubtitle: 'Trusted by leading companies worldwide',
    
    // Testimonials Section
    testimonialsTitle: 'What Clients Say',
    testimonialsSubtitle: 'Hear from satisfied clients about their experience working with me',
    
    // Blog Section
    blogTitle: 'Blog',
    blogSubtitle: 'Latest insights on DevOps, cloud technologies, and best practices',
    readMore: 'Read More',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to transform your infrastructure? Let\'s discuss your project',
    contactDescription: 'Whether you need DevOps consultation, cloud migration, or ongoing IT support, I\'m here to help your business succeed.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    builtWith: 'Built with',

    // DevOps NEXUSOPS page
    nxEyebrow: 'Live Infrastructure · AI Operations',
    nxHeroTitlePre: 'Your cloud,',
    nxHeroTitleAccent: 'running itself.',
    nxHeroLead: 'A next-generation DevOps command center. Real-time observability, self-assembling infrastructure, and AI-driven automation across every cluster, pipeline and cloud.',
    nxEnterHub: 'Enter the Hub',
    nxViewCases: 'View Case Studies',
    nxMetricUptime: 'UPTIME SLA',
    nxMetricDeploys: 'DEPLOYS / DAY',
    nxMetricLatency: 'MEAN LATENCY',
    nxMetricPods: 'PODS ORCHESTRATED',
    nxServicesEyebrow: 'What we operate',
    nxServicesTitle: 'Infrastructure that assembles itself.',
    nxServicesLead: 'Servers connect, containers deploy and monitoring activates the moment you scroll in.',
    nxSrvCloudT: 'Cloud Architecture',
    nxSrvCloudD: 'Multi-cloud landing zones on AWS & Azure, designed for resilience, cost control and zero-touch scaling.',
    nxSrvK8sT: 'Kubernetes Platforms',
    nxSrvK8sD: 'Production-grade clusters with GitOps, autoscaling, service mesh and self-healing workloads.',
    nxSrvCICDT: 'CI/CD Automation',
    nxSrvCICDD: 'Glowing pipelines from commit to production. Progressive delivery, canaries and instant rollback.',
    nxSrvObsT: 'Observability',
    nxSrvObsD: 'Unified metrics, logs and traces with futuristic telemetry dashboards and SLO-driven alerting.',
    nxSrvAIT: 'AIOps Automation',
    nxSrvAID: 'AI-powered anomaly detection, predictive scaling and intelligent remediation runbooks.',
    nxSrvSecT: 'Platform Security',
    nxSrvSecD: 'Policy-as-code, secret management and continuous compliance baked into every layer.',
    nxPipeEyebrow: 'Live delivery flow',
    nxPipeTitle: 'CI/CD, in motion.',
    nxStageCommit: 'Commit',
    nxStageBuild: 'Build',
    nxStageTest: 'Test',
    nxStagePackage: 'Package',
    nxStageDeploy: 'Deploy',
    nxStatusQueued: 'queued',
    nxStatusRunning: 'running',
    nxStatusPassed: 'passed',
    nxCluster1: 'Cluster · us-east-1',
    nxCluster2: 'Cluster · eu-west-1',
    nxWorkEyebrow: 'Selected work',
    nxWorkTitle: 'Projects emerge from data.',
    nxProj1Tag: 'Fintech · AWS',
    nxProj1T: 'Zero-downtime migration',
    nxProj1D: 'Moved a monolith to EKS with blue-green delivery and full observability.',
    nxProj1S1: '↓ 62% cost',
    nxProj1S2: '↑ 99.99% SLA',
    nxProj2Tag: 'SaaS · Multi-cloud',
    nxProj2T: 'Global platform mesh',
    nxProj2D: 'Terraform-driven landing zones across 3 regions with automated failover.',
    nxProj2S1: '3 regions',
    nxProj2S2: '11min RTO',
    nxProj3Tag: 'AI · Kubernetes',
    nxProj3T: 'GPU autoscaling pipeline',
    nxProj3D: 'Self-scaling ML inference with Prometheus-driven HPA and cost guardrails.',
    nxProj3S1: '↑ 4x throughput',
    nxProj3S2: '↓ 48% GPU spend',
    nxStackEyebrow: 'Technology stack',
    nxStackTitle: 'Modules orbiting the core.',
    nxStackLead: 'The tools that power our command center — battle-tested in production.',
    nxFooterTitle: 'Ready to bring your infrastructure to life?',
    nxFooterLead: 'Enterprise DevOps & Cloud Operations consulting.',
    nxFooterCTA: 'Start a Conversation',
  },
  fa: {
    // Navigation
    home: 'خانه',
    about: 'درباره من',
    services: 'خدمات',
    clients: 'مشتریان',
    blog: 'وبلاگ',
    contact: 'تماس با من',
    itSupportNav: 'پشتیبانی IT',
    devopsNav: 'DevOps',

    // Page Banners
    devopsBannerTag: 'مهندسی DevOps',
    devopsBannerTitle: 'اتوماسیون. مقیاس‌پذیری. تحویل سریع.',
    devopsBannerSubtitle: 'مشاوره جامع DevOps — پایپ‌لاین‌های CI/CD، زیرساخت به‌عنوان کد، ارکستراسیون Kubernetes و معماری چندابری برای سرعت و پایداری بالا.',
    itBannerTag: 'خدمات پشتیبانی IT',
    itBannerTitle: 'آی‌تی پایدار. در هر زمان و مکان.',
    itBannerSubtitle: 'پشتیبانی IT در سطح سازمانی شامل شبکه، سخت‌سازی سرور، میز خدمت ۲۴/۷ و امنیت endpoint — برای کسب‌وکاری مقاوم و بهره‌ور.',

    // Blog CTA Banner
    blogCtaTag: 'مرکز دانش',
    blogCtaTitle: 'مقالات تازه را بخوانید',
    blogCtaSubtitle: 'بینش‌ها، آموزش‌ها و تحلیل‌های عمیق درباره DevOps، معماری ابری و مهندسی IT.',
    blogCtaButton: 'مطالعه مقالات',
    backBtn: 'بازگشت',
    
    // Hero Section
    heroTitle: 'مهندس DevOps و مشاور IT',
    heroSubtitle: 'تبدیل زیرساخت با روش‌های مدرن DevOps و فناوری‌های ابری',
    heroDescription: 'با ۹ سال تجربه در حوزه IT، متخصص در اتوماسیون DevOps، زیرساخت ابری، و مدیریت سیستم برای کمک به رشد کارآمد کسب‌وکارها.',
    getStarted: 'شروع کنید',
    viewWork: 'مشاهده کارهای من',
    
    // Tech Stack
    techStackTitle: 'فناوری‌هایی که با آن‌ها کار می‌کنم',
    techStackSubtitle: 'ابزارها و پلتفرم‌های پیشرفته‌ای که برای ارائه نتایج استثنایی استفاده می‌کنم',
    
    // About Section
    aboutTitle: 'درباره من',
    aboutSubtitle: 'بیشتر درباره سفر و تخصص من بدانید',
    aboutBio: 'با ۹ سال تجربه در حوزه IT، متخصص در DevOps، مدیریت سیستم‌های لینوکس، شبکه و فناوری‌های ابری هستم. به کسب‌وکارها کمک می‌کنم تا زیرساخت خود را بهینه کرده و فرآیندهای توسعه را ساده‌تر کنند.',
    aboutExperience: 'سال تجربه',
    aboutProjects: 'پروژه تکمیل شده',
    aboutClients: 'مشتری راضی',
    
    // Skills Section
    skillsTitle: 'مهارت‌ها و تخصص',
    skillsSubtitle: 'مهارت‌های فنی من در حوزه‌های مختلف',
    
    // Services Section
    servicesTitle: 'خدمات',
    servicesSubtitle: 'راه‌حل‌های جامع IT متناسب با نیازهای کسب‌وکار شما',
    devopsAutomation: 'اتوماسیون DevOps',
    devopsAutomationDesc: 'فرآیندهای توسعه و استقرار خود را با پایپ‌لاین‌های مدرن CI/CD، زیرساخت به عنوان کد، و تست خودکار ساده‌تر کنید.',
    cloudDocker: 'کلود و داکر',
    cloudDockerDesc: 'برنامه‌ها را کانتینرسازی کنید و زیرساخت ابری مقیاس‌پذیر را در AWS، Azure و Google Cloud Platform مستقر کنید.',
    itSupport: 'پشتیبانی IT',
    itSupportDesc: 'پشتیبانی فنی جامع، نگهداری سیستم، و عیب‌یابی برای زیرساخت IT شما.',
    cybersecurity: 'امنیت سایبری',
    cybersecurityDesc: 'اجرای اقدامات امنیتی قوی، ارزیابی آسیب‌پذیری، و چارچوب‌های انطباق برای محافظت از دارایی‌های دیجیتال شما.',
    
    // Clients Section
    clientsTitle: 'مشتریان',
    clientsSubtitle: 'مورد اعتماد شرکت‌های برتر در سراسر جهان',
    
    // Testimonials Section
    testimonialsTitle: 'نظرات مشتریان',
    testimonialsSubtitle: 'تجربه مشتریان راضی از همکاری با من را بشنوید',
    
    // Blog Section
    blogTitle: 'وبلاگ',
    blogSubtitle: 'آخرین بینش‌ها در مورد DevOps، فناوری‌های ابری، و بهترین شیوه‌ها',
    readMore: 'ادامه مطلب',
    
    // Contact Section
    contactTitle: 'تماس بگیرید',
    contactSubtitle: 'آماده تبدیل زیرساخت خود هستید؟ بیایید درباره پروژه شما صحبت کنیم',
    contactDescription: 'چه نیاز به مشاوره DevOps، مهاجرت ابری، یا پشتیبانی مداوم IT داشته باشید، من اینجا هستم تا به موفقیت کسب‌وکار شما کمک کنم.',
    name: 'نام',
    email: 'ایمیل',
    message: 'پیام',
    send: 'ارسال پیام',
    
    // Footer
    allRightsReserved: 'تمامی حقوق محفوظ است',
    builtWith: 'ساخته شده با',

    // DevOps NEXUSOPS page
    nxEyebrow: 'زیرساخت زنده · عملیات هوشمند',
    nxHeroTitlePre: 'کلود شما،',
    nxHeroTitleAccent: 'خودگردان.',
    nxHeroLead: 'مرکز فرماندهی نسل جدید DevOps. رصدپذیری بلادرنگ، زیرساخت خودسامان و اتوماسیون مبتنی بر هوش مصنوعی روی هر کلاستر، پایپ‌لاین و کلود.',
    nxEnterHub: 'ورود به مرکز فرماندهی',
    nxViewCases: 'مشاهده مطالعات موردی',
    nxMetricUptime: 'سطح SLA',
    nxMetricDeploys: 'استقرار / روز',
    nxMetricLatency: 'تاخیر میانگین',
    nxMetricPods: 'پاد ارکستره‌شده',
    nxServicesEyebrow: 'آنچه عملیاتی می‌کنیم',
    nxServicesTitle: 'زیرساختی که خود را می‌سازد.',
    nxServicesLead: 'سرورها متصل می‌شوند، کانتینرها مستقر و مانیتورینگ فعال می‌شود — لحظه‌ای که اسکرول می‌کنید.',
    nxSrvCloudT: 'معماری ابری',
    nxSrvCloudD: 'لندینگ‌زون چندابری روی AWS و Azure، طراحی‌شده برای پایداری، کنترل هزینه و مقیاس بدون لمس.',
    nxSrvK8sT: 'پلتفرم Kubernetes',
    nxSrvK8sD: 'کلاسترهای پروداکشن با GitOps، مقیاس خودکار، سرویس مش و بازیابی خودکار.',
    nxSrvCICDT: 'اتوماسیون CI/CD',
    nxSrvCICDD: 'پایپ‌لاین‌های درخشان از کامیت تا پروداکشن. تحویل تدریجی، کاناری و رول‌بک آنی.',
    nxSrvObsT: 'رصدپذیری',
    nxSrvObsD: 'متریک، لاگ و تریس یکپارچه با داشبوردهای آینده‌نگر و هشدارهای مبتنی بر SLO.',
    nxSrvAIT: 'اتوماسیون AIOps',
    nxSrvAID: 'تشخیص آنومالی با AI، مقیاس‌گذاری پیش‌بینانه و رفع خودکار خطا.',
    nxSrvSecT: 'امنیت پلتفرم',
    nxSrvSecD: 'سیاست به‌عنوان کد، مدیریت سکرت و انطباق مستمر در هر لایه.',
    nxPipeEyebrow: 'جریان تحویل زنده',
    nxPipeTitle: 'CI/CD در حرکت.',
    nxStageCommit: 'کامیت',
    nxStageBuild: 'بیلد',
    nxStageTest: 'تست',
    nxStagePackage: 'بسته‌بندی',
    nxStageDeploy: 'استقرار',
    nxStatusQueued: 'در صف',
    nxStatusRunning: 'در حال اجرا',
    nxStatusPassed: 'موفق',
    nxCluster1: 'کلاستر · us-east-1',
    nxCluster2: 'کلاستر · eu-west-1',
    nxWorkEyebrow: 'نمونه کارها',
    nxWorkTitle: 'پروژه‌ها از دل داده ظهور می‌کنند.',
    nxProj1Tag: 'فین‌تک · AWS',
    nxProj1T: 'مهاجرت بدون وقفه',
    nxProj1D: 'انتقال مونولیث به EKS با تحویل آبی-سبز و رصدپذیری کامل.',
    nxProj1S1: '↓ ۶۲٪ هزینه',
    nxProj1S2: '↑ ۹۹.۹۹٪ SLA',
    nxProj2Tag: 'SaaS · چندابری',
    nxProj2T: 'پلتفرم جهانی مش',
    nxProj2D: 'لندینگ‌زون مبتنی بر Terraform در ۳ منطقه با فیل‌اور خودکار.',
    nxProj2S1: '۳ منطقه',
    nxProj2S2: 'RTO ۱۱ دقیقه',
    nxProj3Tag: 'هوش مصنوعی · Kubernetes',
    nxProj3T: 'پایپ‌لاین مقیاس GPU',
    nxProj3D: 'اینفرنس ML خودمقیاس با HPA مبتنی بر Prometheus و کنترل هزینه.',
    nxProj3S1: '↑ ۴ برابر throughput',
    nxProj3S2: '↓ ۴۸٪ هزینه GPU',
    nxStackEyebrow: 'پشته فناوری',
    nxStackTitle: 'ماژول‌هایی در مدار هسته.',
    nxStackLead: 'ابزارهایی که مرکز فرماندهی ما را قدرت می‌دهند — آزموده‌شده در پروداکشن.',
    nxFooterTitle: 'آماده‌اید زیرساخت‌تان را به زندگی بیاورید؟',
    nxFooterLead: 'مشاوره سازمانی DevOps و عملیات ابری.',
    nxFooterCTA: 'شروع گفت‌وگو',

    // Cinema Home (Prisma-style)
    cmNav1: 'داستان ما',
    cmNav2: 'کالکتیو',
    cmNav3: 'کارگاه‌ها',
    cmNav4: 'برنامه‌ها',
    cmNav5: 'تماس',
    cmBrand: 'AutoOps',
    cmHeroDesc: 'اتواپس شبکه‌ای از مهندسان DevOps، معماران ابر و راهبران زیرساخت است که با اشتیاق و کنجکاوی، پتانسیل سیستم‌ها را آزاد می‌کنند — نه با ابزار، که با چشم‌انداز.',
    cmHeroCTA: 'به آزمایشگاه بپیوندید',
    cmAboutTag: 'مهندسی زیرساخت',
    cmAboutSeg1: 'من نوید هستم،',
    cmAboutSeg2: 'یک مهندس DevOps خودآموخته.',
    cmAboutSeg3: 'مهارت‌هایم در اتوماسیون CI/CD، ارکستراسیون کوبرنتیز و معماری چندابری است.',
    cmAboutBody: 'در نُه سال گذشته با تیم‌هایی در اروپا و خاورمیانه کار کرده‌ام — از استارتاپ‌های فین‌تک تا پلتفرم‌های SaaS — و زیرساخت‌هایی ساخته‌ایم که در مقیاس و در سکوت کار می‌کنند.',
    cmFeatHeader1: 'گردش‌کارهای استودیویی برای سازندگانِ آینده‌نگر.',
    cmFeatHeader2: 'ساخته‌شده برای دید ناب. نیرو گرفته از مهندسی.',
    cmFeat1Title: 'بوم خلاقیت شما.',
    cmFeat2Title: 'استوری‌بورد پروژه.',
    cmFeat3Title: 'نقدهای هوشمند.',
    cmFeat4Title: 'کپسول تمرکز.',
    cmFeat2I1: 'پایپ‌لاین‌های CI/CD آماده تولید',
    cmFeat2I2: 'زیرساخت به‌مثابه کد با Terraform',
    cmFeat2I3: 'استراتژی استقرار آبی-سبز',
    cmFeat2I4: 'رصدپذیری انتها به انتها',
    cmFeat3I1: 'تحلیل لاگ مبتنی بر هوش مصنوعی',
    cmFeat3I2: 'یادداشت‌های مهندسی خودکار',
    cmFeat3I3: 'یکپارچگی با Prometheus و Grafana',
    cmFeat4I1: 'سکوت اعلان‌های غیر بحرانی',
    cmFeat4I2: 'فضاهای صوتی محیطی برای تمرکز',
    cmFeat4I3: 'هم‌گام‌سازی برنامه با تقویم تیم',
    cmLearnMore: 'بیشتر بدانید',
  },
};

// Add English cinema keys (after FA we add to EN)
const _enCinema = {
  cmNav1: 'Our story',
  cmNav2: 'Collective',
  cmNav3: 'Workshops',
  cmNav4: 'Programs',
  cmNav5: 'Inquiries',
  cmBrand: 'AutoOps',
  cmHeroDesc: 'AutoOps is a worldwide network of DevOps engineers, cloud architects and infrastructure storytellers — bound not by tools but by passion and hunger to unlock the potential of systems through our perspective.',
  cmHeroCTA: 'Join the lab',
  cmAboutTag: 'Infrastructure engineering',
  cmAboutSeg1: 'I am Navid,',
  cmAboutSeg2: 'a self-taught DevOps engineer.',
  cmAboutSeg3: 'I have skills in CI/CD automation, Kubernetes orchestration, and multi-cloud architecture.',
  cmAboutBody: 'Over the last nine years I have worked with teams across Europe and the Middle East — from fintech startups to global SaaS platforms — building infrastructure that scales loudly and runs quietly.',
  cmFeatHeader1: 'Studio-grade workflows for visionary builders.',
  cmFeatHeader2: 'Built for pure vision. Powered by engineering.',
  cmFeat1Title: 'Your creative canvas.',
  cmFeat2Title: 'Project Pipeline.',
  cmFeat3Title: 'Smart Telemetry.',
  cmFeat4Title: 'Focus Capsule.',
  cmFeat2I1: 'Production-ready CI/CD pipelines',
  cmFeat2I2: 'Infrastructure as Code with Terraform',
  cmFeat2I3: 'Blue-green deployment strategy',
  cmFeat2I4: 'End-to-end observability',
  cmFeat3I1: 'AI-powered log analysis',
  cmFeat3I2: 'Automated engineering notes',
  cmFeat3I3: 'Prometheus & Grafana integrations',
  cmFeat4I1: 'Silence non-critical alerts',
  cmFeat4I2: 'Ambient soundscapes for focus',
  cmFeat4I3: 'Schedule sync with team calendar',
  cmLearnMore: 'Learn more',
};
Object.assign(translations.en, _enCinema);
Object.assign(translations.fa, {}); // FA keys already added above

export const getTranslation = (language: Language, key: keyof typeof translations.en): string => {
  return translations[language][key] || translations.en[key];
};

export const formatNumber = (num: number, language: Language): string => {
  if (language === 'fa') {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  }
  return num.toString();
};

export const getDirection = (language: Language): 'ltr' | 'rtl' => {
  return language === 'fa' ? 'rtl' : 'ltr';
};
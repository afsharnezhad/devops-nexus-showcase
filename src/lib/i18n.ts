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
  },
};

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
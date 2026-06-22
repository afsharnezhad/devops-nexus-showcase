import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, TrendingUp, DollarSign, ShieldCheck, Layers, Rocket,
  Search, PenTool, Settings, CheckCircle, LifeBuoy,
  Container, Server, GitBranch, Cloud, Workflow, LineChart, Lock, Code2,
  Check, ChevronDown, Phone, Mail, Sparkles,
} from "lucide-react";

// ============ DATA ============
const introBenefits = [
  { icon: Zap, t: "افزایش سرعت توسعه", d: "تحویل سریع‌تر ویژگی‌ها به کاربران با خودکارسازی کامل چرخه‌ی توسعه و استقرار." },
  { icon: ShieldCheck, t: "پایداری و امنیت بالا", d: "کاهش خطاهای انسانی و افزایش قابلیت اطمینان سرویس‌ها در محیط عملیاتی." },
  { icon: TrendingUp, t: "بهبود کیفیت نرم‌افزار", d: "تست خودکار، یکپارچه‌سازی پیوسته و بازخورد سریع از محیط تولید." },
  { icon: DollarSign, t: "کاهش هزینه‌های عملیاتی", d: "بهینه‌سازی منابع ابری و کاهش هزینه‌های نگهداری زیرساخت." },
];

const services = [
  { icon: GitBranch, t: "پیاده‌سازی و مدیریت CI/CD", d: "طراحی و راه‌اندازی خطوط لوله‌ی یکپارچه‌سازی و استقرار پیوسته با Jenkins، GitLab CI و GitHub Actions." },
  { icon: Container, t: "کانتینرسازی با Docker", d: "بسته‌بندی و استانداردسازی برنامه‌ها در قالب کانتینر برای استقرار سریع و قابل تکرار." },
  { icon: Server, t: "راه‌اندازی و مدیریت Kubernetes", d: "ارکستریشن کانتینرها، مقیاس‌پذیری خودکار و مدیریت کلاسترهای کوبرنتیز در محیط‌های پروداکشن." },
  { icon: Code2, t: "زیرساخت به عنوان کد (IaC)", d: "تعریف و مدیریت زیرساخت با Terraform و Ansible برای محیط‌های قابل بازتولید و نسخه‌بندی شده." },
  { icon: Workflow, t: "اتوماسیون زیرساخت", d: "خودکارسازی فرآیندهای عملیاتی، Provisioning و پیکربندی سرورها در مقیاس وسیع." },
  { icon: Cloud, t: "طراحی معماری Cloud", d: "طراحی معماری ابری مقیاس‌پذیر و امن مبتنی بر AWS، Azure و Google Cloud." },
  { icon: Rocket, t: "مهاجرت به فضای ابری", d: "انتقال امن سرویس‌ها و داده‌ها از زیرساخت سنتی به فضای ابری با حداقل توقف سرویس." },
  { icon: LineChart, t: "مانیتورینگ و لاگ‌گیری", d: "پایش لحظه‌ای سرویس‌ها با Prometheus، Grafana و ELK Stack و بهینه‌سازی عملکرد." },
  { icon: Lock, t: "امنیت و DevSecOps", d: "ادغام امنیت در تمام مراحل چرخه‌ی توسعه و اسکن خودکار آسیب‌پذیری‌ها." },
];

const benefits = [
  { icon: DollarSign, t: "کاهش هزینه‌های عملیاتی", d: "بهینه‌سازی منابع و کاهش وابستگی به فرآیندهای دستی." },
  { icon: Rocket, t: "افزایش سرعت ارائه سرویس", d: "استقرار سریع‌تر نسخه‌های جدید و پاسخگویی بهتر به نیاز بازار." },
  { icon: ShieldCheck, t: "کاهش خطاهای انسانی", d: "اتوماسیون فرآیندها و حذف خطاهای ناشی از پیکربندی دستی." },
  { icon: Lock, t: "افزایش امنیت و پایداری", d: "اعمال سیاست‌های امنیتی یکپارچه و رصد دائمی تهدیدها." },
  { icon: Layers, t: "مقیاس‌پذیری بهتر", d: "زیرساخت کشسان متناسب با رشد کسب‌وکار و افزایش بار." },
  { icon: LineChart, t: "شفافیت و قابلیت پایش", d: "دید کامل بر روی عملکرد سرویس‌ها و رفع سریع مشکلات." },
];

const processSteps = [
  { icon: Search, t: "بررسی نیازها و تحلیل زیرساخت", d: "ارزیابی وضعیت فعلی، شناسایی گلوگاه‌ها و تعریف اهداف کسب‌وکار." },
  { icon: PenTool, t: "طراحی راهکار DevOps", d: "تدوین معماری اختصاصی متناسب با تیم، تکنولوژی و نیازهای پروژه." },
  { icon: Settings, t: "پیاده‌سازی ابزارها و اتوماسیون", d: "راه‌اندازی pipelineها، کانتینرسازی و خودکارسازی فرآیندهای استقرار." },
  { icon: CheckCircle, t: "تست، استقرار و بهینه‌سازی", d: "اعتبارسنجی پیوسته، مانیتورینگ و بهبود مستمر عملکرد سیستم." },
  { icon: LifeBuoy, t: "پشتیبانی و نگهداری", d: "همراهی بلندمدت تیم فنی برای پایداری و توسعه‌ی زیرساخت." },
];

const techStack = [
  { n: "Docker", c: "from-cyan-400 to-blue-500" },
  { n: "Kubernetes", c: "from-blue-500 to-indigo-600" },
  { n: "Jenkins", c: "from-red-400 to-orange-500" },
  { n: "GitLab CI/CD", c: "from-orange-500 to-pink-500" },
  { n: "GitHub Actions", c: "from-gray-400 to-gray-600" },
  { n: "Terraform", c: "from-purple-500 to-violet-600" },
  { n: "Ansible", c: "from-red-500 to-rose-600" },
  { n: "Prometheus", c: "from-orange-400 to-red-500" },
  { n: "Grafana", c: "from-yellow-500 to-orange-600" },
  { n: "ELK Stack", c: "from-emerald-400 to-cyan-500" },
  { n: "AWS", c: "from-amber-400 to-orange-500" },
  { n: "Azure", c: "from-sky-400 to-blue-600" },
  { n: "Google Cloud", c: "from-blue-400 to-red-400" },
];

const plans = [
  {
    name: "پلن شروع",
    target: "مناسب کسب‌وکارهای کوچک و استارتاپ‌ها",
    price: "از ۸ میلیون",
    period: "تومان / ماهانه",
    highlight: false,
    features: [
      "راه‌اندازی pipeline ساده‌ی CI/CD",
      "کانتینرسازی پایه با Docker",
      "مانیتورینگ اولیه سرویس‌ها",
      "پشتیبانی در ساعات اداری",
      "یک جلسه مشاوره ماهانه",
    ],
  },
  {
    name: "پلن حرفه‌ای",
    target: "مناسب شرکت‌های در حال رشد",
    price: "از ۲۰ میلیون",
    period: "تومان / ماهانه",
    highlight: true,
    features: [
      "خطوط لوله CI/CD پیشرفته و چندمرحله‌ای",
      "ارکستریشن کامل با Kubernetes",
      "زیرساخت به عنوان کد با Terraform",
      "مانیتورینگ و لاگ‌گیری حرفه‌ای",
      "پشتیبانی گسترده ۱۲ ساعته",
      "مشاوره اختصاصی هفتگی",
    ],
  },
  {
    name: "پلن سازمانی",
    target: "مناسب زیرساخت‌های بزرگ و پیچیده",
    price: "اختصاصی",
    period: "بر اساس نیاز",
    highlight: false,
    features: [
      "معماری اختصاصی مولتی‌کلاد",
      "DevSecOps و اسکن امنیتی پیوسته",
      "مهاجرت کامل به فضای ابری",
      "مانیتورینگ و SLA تضمینی",
      "پشتیبانی ۲۴/۷ با تیم اختصاصی",
      "مشاور ارشد DevOps در دسترس",
    ],
  },
];

const faqs = [
  { q: "خدمات DevOps دقیقاً شامل چه مواردی است؟", a: "خدمات ما شامل طراحی و پیاده‌سازی CI/CD، کانتینرسازی، مدیریت Kubernetes، زیرساخت به عنوان کد، مانیتورینگ، اتوماسیون و امنیت زیرساخت می‌شود." },
  { q: "هزینه‌ی پیاده‌سازی DevOps چقدر است؟", a: "هزینه بسته به مقیاس زیرساخت، تعداد سرویس‌ها و سطح پشتیبانی متفاوت است. در پلن‌های ما تعرفه‌ی پایه ارائه شده و برای پروژه‌های سازمانی، قیمت اختصاصی پس از تحلیل ارائه می‌شود." },
  { q: "زمان پیاده‌سازی یک راهکار DevOps چقدر طول می‌کشد؟", a: "بسته به پیچیدگی پروژه، فاز اولیه معمولاً بین ۲ تا ۸ هفته به طول می‌انجامد. پروژه‌های بزرگ‌تر در فازهای متوالی اجرا می‌شوند." },
  { q: "چه ابزارهایی برای پروژه‌ی من مناسب است؟", a: "انتخاب ابزار بر اساس تکنولوژی فعلی تیم، بودجه و اهداف کسب‌وکار صورت می‌گیرد. در فاز تحلیل، بهترین ترکیب ابزارها به شما پیشنهاد می‌شود." },
  { q: "آیا پس از پیاده‌سازی، پشتیبانی ارائه می‌دهید؟", a: "بله، پشتیبانی و نگهداری بلندمدت در همه‌ی پلن‌ها ارائه می‌شود و در پلن سازمانی پشتیبانی ۲۴/۷ نیز در دسترس است." },
  { q: "آیا امکان مهاجرت از زیرساخت فعلی به Cloud وجود دارد؟", a: "بله، مهاجرت امن و گام‌به‌گام به AWS، Azure یا Google Cloud با حداقل توقف سرویس از خدمات اصلی ما است." },
];

// ============ COMPONENT ============
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl ${className}`}
    style={{ background: "rgba(18,26,48,.45)" }}
  >
    {children}
  </div>
);

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3 text-xs tracking-[4px] uppercase text-[#00e5ff] mb-5">
    <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
    {children}
  </div>
);

const PersianDevOpsSections = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div dir="rtl" className="font-[Vazirmatn,system-ui,sans-serif]">

      {/* 1. INTRO */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>معرفی خدمات</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
          DevOps چیست و چرا برای کسب‌وکار شما اهمیت دارد؟
        </h2>
        <p className="text-[#b8c4e0] max-w-3xl leading-loose mb-4">
          دواپس (DevOps) یک رویکرد فرهنگی و فنی است که فاصله‌ی میان تیم‌های توسعه و عملیات را از بین می‌برد و
          با ترکیب اتوماسیون، یکپارچه‌سازی پیوسته و فرهنگ همکاری، چرخه‌ی تحویل نرم‌افزار را به‌شدت کوتاه‌تر و
          قابل اعتمادتر می‌کند.
        </p>
        <p className="text-[#b8c4e0] max-w-3xl leading-loose">
          کسب‌وکارهایی که DevOps را به‌درستی پیاده‌سازی می‌کنند، می‌توانند سریع‌تر به نیازهای بازار پاسخ دهند،
          هزینه‌های زیرساخت را کاهش دهند و کیفیت و پایداری سرویس‌های خود را در سطح سازمانی حفظ کنند.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {introBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center mb-4 border border-[rgba(120,160,255,.18)]"
                    style={{ background: "linear-gradient(135deg,rgba(0,229,255,.18),rgba(124,92,255,.18))" }}
                  >
                    <Icon className="w-6 h-6 text-[#00e5ff]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{b.t}</h3>
                  <p className="text-[#7e8bb0] text-sm leading-relaxed">{b.d}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>خدمات تخصصی</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          خدمات DevOps ما
        </h2>
        <p className="text-[#7e8bb0] max-w-2xl">مجموعه‌ای کامل از خدمات تخصصی برای پیاده‌سازی و مدیریت زیرساخت مدرن.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Card className="p-7 h-full transition-all hover:border-[rgba(0,229,255,.4)]">
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center mb-4 border border-[rgba(120,160,255,.18)]"
                    style={{ background: "linear-gradient(135deg,rgba(0,229,255,.18),rgba(124,92,255,.18))" }}
                  >
                    <Icon className="w-6 h-6 text-[#00e5ff]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{s.t}</h3>
                  <p className="text-[#7e8bb0] text-sm leading-relaxed">{s.d}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>مزایا</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-white">
          مزایای همکاری با تیم DevOps ما
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="p-6 h-full flex gap-4">
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl grid place-items-center border border-[rgba(120,160,255,.18)]"
                    style={{ background: "linear-gradient(135deg,rgba(25,255,208,.18),rgba(0,229,255,.18))" }}
                  >
                    <Icon className="w-6 h-6 text-[#19ffd0]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{b.t}</h3>
                    <p className="text-[#7e8bb0] text-sm leading-relaxed">{b.d}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>فرآیند کار</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-white">
          فرآیند شروع همکاری
        </h2>
        <div className="relative grid md:grid-cols-5 gap-6">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full text-center relative">
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full grid place-items-center text-sm font-bold text-[#04101a]"
                    style={{ background: "linear-gradient(135deg,#00e5ff,#19ffd0)", boxShadow: "0 0 20px rgba(0,229,255,.5)" }}>
                    {i + 1}
                  </div>
                  <div
                    className="w-14 h-14 rounded-2xl grid place-items-center mx-auto mb-4 border border-[rgba(120,160,255,.18)]"
                    style={{ background: "linear-gradient(135deg,rgba(0,229,255,.18),rgba(124,92,255,.18))" }}
                  >
                    <Icon className="w-7 h-7 text-[#00e5ff]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.t}</h3>
                  <p className="text-[#7e8bb0] text-xs leading-relaxed">{p.d}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>تکنولوژی‌ها</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          تکنولوژی‌های مورد استفاده
        </h2>
        <p className="text-[#7e8bb0] max-w-2xl mb-12">از مدرن‌ترین و قابل اعتمادترین ابزارهای صنعت DevOps استفاده می‌کنیم.</p>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="px-5 py-3 rounded-xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl text-white text-sm font-semibold transition-all hover:border-[rgba(0,229,255,.45)]"
              style={{ background: "rgba(18,26,48,.45)" }}
            >
              <span className={`bg-gradient-to-r ${tk.c} bg-clip-text text-transparent`}>{tk.n}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>پلن‌ها و تعرفه</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white text-center">
          پلن‌ها و تعرفه خدمات DevOps
        </h2>
        <p className="text-[#7e8bb0] max-w-2xl mx-auto text-center mb-14">
          پلن مناسب کسب‌وکار خود را انتخاب کنید یا برای پروژه‌های خاص با ما در تماس باشید.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#04101a] z-10"
                  style={{ background: "linear-gradient(135deg,#00e5ff,#19ffd0)", boxShadow: "0 0 20px rgba(0,229,255,.5)" }}>
                  پیشنهاد ویژه
                </div>
              )}
              <Card className={`p-8 h-full flex flex-col ${plan.highlight ? "border-[rgba(0,229,255,.5)] shadow-[0_0_40px_rgba(0,229,255,.15)]" : ""}`}>
                <h3 className="text-2xl font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-[#7e8bb0] text-sm mb-6">{plan.target}</p>
                <div className="mb-6 pb-6 border-b border-[rgba(120,160,255,.18)]">
                  <div className="text-3xl font-extrabold text-white">{plan.price}</div>
                  <div className="text-xs text-[#7e8bb0] mt-1">{plan.period}</div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#dbe7ff]">
                      <Check className="w-4 h-4 text-[#19ffd0] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlight
                      ? "text-[#04101a]"
                      : "text-white border border-[rgba(120,160,255,.3)] hover:border-[rgba(0,229,255,.5)]"
                  }`}
                  style={
                    plan.highlight
                      ? { background: "linear-gradient(135deg,#00e5ff,#7c5cff)", boxShadow: "0 0 24px rgba(0,229,255,.35)" }
                      : { background: "rgba(18,26,48,.5)" }
                  }
                >
                  انتخاب پلن
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 px-[8vw]">
        <SectionEyebrow>سوالات متداول</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-white">
          پاسخ به پرسش‌های رایج
        </h2>
        <div className="max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Card key={i} className="overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right"
              >
                <span className="text-white font-semibold text-base">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00e5ff] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openFaq === i ? 200 : 0 }}
              >
                <p className="px-6 pb-5 text-[#b8c4e0] text-sm leading-loose">{f.a}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-28 px-[8vw]">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center border border-[rgba(0,229,255,.3)] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,rgba(0,229,255,.08),rgba(124,92,255,.08))",
            boxShadow: "0 40px 120px rgba(0,229,255,.15)",
          }}
        >
          <Sparkles className="w-10 h-10 text-[#00e5ff] mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            آماده‌ی تحول دیجیتال زیرساخت خود هستید؟
          </h2>
          <p className="text-[#b8c4e0] max-w-2xl mx-auto mb-10 leading-loose">
            با تیم ما در ارتباط باشید تا با مشاوره‌ی رایگان و بررسی تخصصی زیرساخت فعلی شما،
            بهترین راهکار DevOps متناسب با کسب‌وکارتان را ارائه دهیم.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] text-[#04101a]"
              style={{
                background: "linear-gradient(135deg,#00e5ff,#7c5cff)",
                boxShadow: "0 0 30px rgba(0,229,255,.35)",
              }}
            >
              <Phone className="w-4 h-4" />
              دریافت مشاوره رایگان
            </a>
            <a
              href="mailto:mo.afsharnezhad@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] text-white border border-[rgba(120,160,255,.3)] hover:border-[rgba(0,229,255,.5)] transition-all"
              style={{ background: "rgba(18,26,48,.5)" }}
            >
              <Mail className="w-4 h-4" />
              ارسال ایمیل
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersianDevOpsSections;

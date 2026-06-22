import { useState } from "react";
import { motion } from "framer-motion";
import {
  Network, Server, ShieldCheck, Headphones, Cable, MonitorCheck,
  Wifi, Settings, Users, Activity, HardDrive, Mail, Lock, Eye, KeyRound,
  DatabaseBackup, Wrench, Download, Search, FileText, ClipboardCheck,
  Cog, LineChart, Zap, Clock, TrendingDown, DollarSign,
  Check, ChevronDown, Phone, Sparkles,
} from "lucide-react";

const introCards = [
  { icon: Network, t: "زیرساخت شبکه پایدار", d: "ستون فقرات هر کسب‌وکار مدرن، شبکه‌ای امن، سریع و در دسترس است." },
  { icon: ShieldCheck, t: "امنیت در سطح سازمانی", d: "حفاظت از داده‌ها و سرویس‌های حیاتی در برابر تهدیدات روزافزون." },
  { icon: TrendingDown, t: "کاهش Downtime", d: "پایش لحظه‌ای و واکنش سریع برای تضمین تداوم سرویس‌دهی." },
  { icon: Zap, t: "افزایش بهره‌وری", d: "زیرساخت بهینه به معنای تیمی پرسرعت و کسب‌وکاری چابک‌تر." },
];

const networkServices = [
  { icon: Activity, t: "مانیتورینگ و نگهداری شبکه", d: "پایش ۲۴ ساعته‌ی ترافیک، منابع و سلامت تجهیزات شبکه." },
  { icon: Wrench, t: "عیب‌یابی مشکلات شبکه", d: "تشخیص دقیق و رفع سریع اختلالات با استفاده از ابزارهای تخصصی." },
  { icon: Cable, t: "مدیریت تجهیزات شبکه", d: "پیکربندی، به‌روزرسانی و نگهداری روترها، سوییچ‌ها و اکسس‌پوینت‌ها." },
  { icon: Zap, t: "بهینه‌سازی عملکرد شبکه", d: "افزایش پهنای باند مفید و کاهش تأخیر برای تجربه‌ی کاربری بهتر." },
  { icon: Headphones, t: "پشتیبانی کاربران", d: "رفع مشکلات روزمره‌ی کاربران سازمان به‌صورت ریموت و حضوری." },
  { icon: MonitorCheck, t: "گزارش‌گیری دوره‌ای", d: "تهیه‌ی گزارش‌های فنی منظم از وضعیت زیرساخت و پیشنهاد بهبود." },
];

const infraServices = [
  { icon: Network, t: "طراحی معماری شبکه", d: "طراحی توپولوژی متناسب با نیاز، مقیاس و بودجه‌ی سازمان." },
  { icon: Settings, t: "نصب و پیکربندی تجهیزات", d: "راه‌اندازی استاندارد تجهیزات سیسکو، میکروتیک و سایر برندها." },
  { icon: Wifi, t: "راه‌اندازی LAN و WAN", d: "پیاده‌سازی شبکه‌های داخلی و گسترده با کیفیت سازمانی." },
  { icon: Lock, t: "ارتباطات امن و پایدار", d: "طراحی VPN، VLAN و ساختارهای ایزوله برای امنیت ارتباطات." },
  { icon: TrendingDown, t: "ارتقاء زیرساخت موجود", d: "بازطراحی و مدرن‌سازی شبکه‌های قدیمی بدون توقف سرویس." },
];

const serverServices = [
  { icon: Server, t: "سرورهای Windows و Linux", d: "نصب، پیکربندی و مدیریت سرورهای سازمانی روی هر دو پلتفرم." },
  { icon: Users, t: "مدیریت Active Directory", d: "راه‌اندازی دامین، مدیریت کاربران و اعمال Group Policy." },
  { icon: HardDrive, t: "فایل سرور و اشتراک‌گذاری", d: "ساختار سطح‌بندی شده‌ی دسترسی به فایل‌ها و منابع سازمانی." },
  { icon: Mail, t: "ایمیل سازمانی", d: "راه‌اندازی Exchange و سرویس‌های ایمیل اختصاصی با دامنه‌ی سازمان." },
  { icon: Cog, t: "مجازی‌سازی و منابع سرور", d: "پیاده‌سازی VMware و Hyper-V برای استفاده‌ی بهینه از منابع." },
];

const securityServices = [
  { icon: ShieldCheck, t: "سیاست‌های امنیتی", d: "تدوین و اجرای سیاست‌های امنیت اطلاعات منطبق با استانداردهای روز." },
  { icon: Lock, t: "مدیریت Firewall", d: "پیکربندی و نگهداری فایروال‌های سخت‌افزاری و نرم‌افزاری." },
  { icon: KeyRound, t: "کنترل دسترسی کاربران", d: "مدیریت سطوح دسترسی و احراز هویت چندعاملی برای کاربران." },
  { icon: Eye, t: "مقابله با تهدیدات", d: "شناسایی و خنثی‌سازی بدافزارها، حملات نفوذ و باج‌افزارها." },
  { icon: DatabaseBackup, t: "پشتیبان‌گیری و بازیابی", d: "تهیه‌ی نسخه‌ی پشتیبان منظم و طرح بازیابی پس از حادثه (DRP)." },
];

const helpDeskServices = [
  { icon: Headphones, t: "پشتیبانی حضوری و ریموت", d: "حضور کارشناس در محل یا دسترسی ریموت برای رفع سریع مشکلات." },
  { icon: Wrench, t: "رفع مشکلات نرم‌افزاری و سخت‌افزاری", d: "تشخیص و حل اختلالات سیستم‌های کاربری و تجهیزات جانبی." },
  { icon: Download, t: "نصب و به‌روزرسانی نرم‌افزار", d: "نصب، پیکربندی و آپدیت نرم‌افزارهای کاربردی سازمان." },
  { icon: ClipboardCheck, t: "مدیریت تیکت و درخواست‌ها", d: "ثبت، پیگیری و گزارش‌گیری از درخواست‌های کاربران در سامانه‌ی تیکتینگ." },
];

const processSteps = [
  { icon: Search, t: "بررسی وضعیت فعلی", d: "ارزیابی کامل زیرساخت موجود سازمان." },
  { icon: FileText, t: "تحلیل نیازها", d: "شناسایی نقاط ضعف و نیازهای کسب‌وکار." },
  { icon: ClipboardCheck, t: "ارائه راهکار", d: "تدوین راهکار اختصاصی متناسب با اهداف سازمان." },
  { icon: Cog, t: "پیاده‌سازی و پیکربندی", d: "اجرای دقیق سرویس‌ها با حداقل اختلال." },
  { icon: LineChart, t: "پشتیبانی و بهبود مستمر", d: "مانیتورینگ مداوم و ارتقاء کیفیت خدمات." },
];

const advantages = [
  { icon: Users, t: "تیم متخصص و باتجربه", d: "کارشناسان دارای مدارک معتبر بین‌المللی در حوزه‌ی شبکه و امنیت." },
  { icon: Clock, t: "پاسخگویی سریع", d: "زمان واکنش کوتاه و حضور به‌موقع در هنگام بروز مشکل." },
  { icon: TrendingDown, t: "کاهش چشمگیر Downtime", d: "پایش پیشگیرانه برای جلوگیری از قطعی سرویس‌ها." },
  { icon: ShieldCheck, t: "افزایش امنیت و پایداری", d: "اجرای سیاست‌های امنیتی استاندارد در تمامی لایه‌ها." },
  { icon: DollarSign, t: "کاهش هزینه‌های نگهداری", d: "بهینه‌سازی منابع و کاهش هزینه‌های پنهان IT." },
  { icon: Zap, t: "بهره‌وری بالاتر سازمان", d: "زیرساخت پایدار، تیمی متمرکز بر کار اصلی شما." },
];

const plans = [
  {
    name: "پلن پایه",
    target: "مناسب کسب‌وکارهای کوچک",
    price: "از ۵ میلیون",
    period: "تومان / ماهانه",
    highlight: false,
    features: [
      "پشتیبانی ریموت در ساعات اداری",
      "حضور کارشناس در محل (در صورت نیاز)",
      "مانیتورینگ پایه‌ی شبکه",
      "زمان پاسخگویی تا ۴ ساعت",
      "گزارش ماهانه‌ی وضعیت سیستم",
    ],
  },
  {
    name: "پلن حرفه‌ای",
    target: "مناسب شرکت‌های متوسط با زیرساخت گسترده",
    price: "از ۱۲ میلیون",
    period: "تومان / ماهانه",
    highlight: true,
    features: [
      "پشتیبانی ریموت و حضوری گسترده",
      "مانیتورینگ ۱۲ ساعته‌ی شبکه و سرورها",
      "مدیریت Firewall و امنیت پایه",
      "زمان پاسخگویی تا ۲ ساعت",
      "تهیه‌ی Backup منظم",
      "گزارش‌های فنی هفتگی",
    ],
  },
  {
    name: "پلن سازمانی",
    target: "مناسب سازمان‌های بزرگ و حساس",
    price: "اختصاصی",
    period: "بر اساس نیاز",
    highlight: false,
    features: [
      "پشتیبانی اختصاصی ۲۴/۷",
      "مانیتورینگ کامل ۲۴ ساعته",
      "امنیت پیشرفته و مدیریت SOC",
      "زمان پاسخگویی تا ۳۰ دقیقه",
      "DRP و سیاست‌های Backup سازمانی",
      "کارشناس on-site اختصاصی",
      "مشاور ارشد IT در دسترس",
    ],
  },
];

const faqs = [
  { q: "پشتیبانی شبکه به چه صورت ارائه می‌شود؟", a: "پشتیبانی به‌صورت ترکیبی ریموت و حضوری ارائه می‌شود. اکثر مشکلات از طریق دسترسی امن ریموت در کمترین زمان حل می‌شوند و در صورت نیاز کارشناس در محل سازمان حضور می‌یابد." },
  { q: "هزینه‌ی قراردادهای پشتیبانی چگونه محاسبه می‌شود؟", a: "هزینه بر اساس تعداد کاربران، تعداد سرورها، تجهیزات شبکه و سطح SLA انتخابی محاسبه می‌شود. در پلن‌های ما تعرفه‌ی پایه ارائه شده و برای سازمان‌های بزرگ، قیمت اختصاصی پس از بازدید فنی اعلام می‌گردد." },
  { q: "آیا قرارداد پشتیبانی الزامی است؟", a: "خیر، خدمات ما هم به‌صورت قراردادی ماهانه/سالانه و هم به‌صورت موردی (Per Incident) ارائه می‌شود؛ اما قرارداد پشتیبانی تضمین‌کننده‌ی پایداری بلندمدت و SLA مشخص است." },
  { q: "زمان رفع مشکلات معمولاً چقدر است؟", a: "بسته به نوع پلن، زمان پاسخگویی از ۳۰ دقیقه تا ۴ ساعت متغیر است و زمان رفع مشکل با توجه به سطح بحرانی بودن آن مشخص می‌شود." },
  { q: "اطلاعات و امنیت ما در پشتیبانی ریموت چگونه حفظ می‌شود؟", a: "تمامی اتصالات ریموت از طریق پروتکل‌های امن، احراز هویت چندعاملی و ثبت کامل لاگ انجام می‌شود. NDA و توافق‌نامه‌ی محرمانگی نیز در قرارداد لحاظ می‌گردد." },
  { q: "آیا امکان ارتقاء پلن در آینده وجود دارد؟", a: "بله، در هر زمان متناسب با رشد سازمان می‌توانید پلن خود را ارتقاء دهید یا خدمات اضافی به آن اضافه کنید." },
];

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/10 backdrop-blur-xl ${className}`}
    style={{ background: "rgba(15,23,42,.55)" }}
  >
    {children}
  </div>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3 text-xs tracking-[4px] uppercase text-cyan-400 mb-5">
    <span className="w-9 h-px bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
    {children}
  </div>
);

const ServiceGrid = ({ items }: { items: { icon: any; t: string; d: string }[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
    {items.map((s, i) => {
      const Icon = s.icon;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -6 }}
        >
          <Card className="p-6 h-full transition-all hover:border-cyan-400/40">
            <div className="w-11 h-11 rounded-xl grid place-items-center mb-4 border border-white/10"
              style={{ background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(59,130,246,.18))" }}>
              <Icon className="w-5 h-5 text-cyan-300" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{s.t}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.d}</p>
          </Card>
        </motion.div>
      );
    })}
  </div>
);

const PersianITSections = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div dir="rtl" className="font-[Vazirmatn,system-ui,sans-serif] text-slate-200">

      {/* 1. INTRO */}
      <section className="py-24 px-[8vw]">
        <Eyebrow>معرفی خدمات</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
          خدمات شبکه و پشتیبانی فناوری اطلاعات
        </h2>
        <p className="text-slate-300 max-w-3xl leading-loose mb-4">
          در دنیای امروز، زیرساخت فناوری اطلاعات ستون فقرات هر کسب‌وکاری به‌شمار می‌آید. هرگونه اختلال در شبکه،
          سرور یا تجهیزات IT می‌تواند به توقف فرآیندهای کسب‌وکار و آسیب جدی به اعتبار سازمان منجر شود.
        </p>
        <p className="text-slate-300 max-w-3xl leading-loose">
          تیم ما با ارائه‌ی خدمات تخصصی پشتیبانی شبکه، نگهداری سرورها و مدیریت یکپارچه‌ی سیستم‌ها،
          پایداری، امنیت و بهره‌وری سازمان شما را در سطح حرفه‌ای تضمین می‌کند.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {introCards.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl grid place-items-center mb-4 border border-white/10"
                    style={{ background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(59,130,246,.18))" }}>
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{b.t}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.d}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. NETWORK MANAGEMENT */}
      <section className="py-20 px-[8vw]">
        <Eyebrow>مدیریت و پشتیبانی شبکه</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          خدمات مدیریت و پشتیبانی شبکه
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3">پایش، نگهداری و رفع مشکلات روزمره‌ی شبکه‌ی سازمان شما.</p>
        <ServiceGrid items={networkServices} />
      </section>

      {/* 3. INFRA DESIGN */}
      <section className="py-20 px-[8vw]">
        <Eyebrow>طراحی و راه‌اندازی</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          طراحی، راه‌اندازی و پیاده‌سازی زیرساخت شبکه
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3">از طراحی معماری تا اجرای کامل زیرساخت ارتباطی سازمان.</p>
        <ServiceGrid items={infraServices} />
      </section>

      {/* 4. SERVER MANAGEMENT */}
      <section className="py-20 px-[8vw]">
        <Eyebrow>سرورها و سرویس‌ها</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          مدیریت سرورها و سرویس‌های سازمانی
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3">مدیریت تخصصی سرورهای ویندوز، لینوکس و سرویس‌های زیرساختی.</p>
        <ServiceGrid items={serverServices} />
      </section>

      {/* 5. SECURITY */}
      <section className="py-20 px-[8vw]">
        <Eyebrow>امنیت اطلاعات</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          امنیت شبکه و اطلاعات
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3">حفاظت چندلایه از داده‌ها و سرویس‌های حیاتی سازمان.</p>
        <ServiceGrid items={securityServices} />
      </section>

      {/* 6. HELP DESK */}
      <section className="py-20 px-[8vw]">
        <Eyebrow>پشتیبانی کاربران</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          خدمات پشتیبانی کاربران (Help Desk)
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3">پاسخگویی سریع و حرفه‌ای به درخواست‌های روزانه‌ی کاربران.</p>
        <ServiceGrid items={helpDeskServices} />
      </section>

      {/* 7. PROCESS */}
      <section className="py-24 px-[8vw]">
        <Eyebrow>فرآیند همکاری</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-12">
          فرآیند ارائه‌ی خدمات
        </h2>
        <div className="grid md:grid-cols-5 gap-5">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-6 h-full text-center relative">
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full grid place-items-center text-sm font-bold text-slate-950"
                    style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow: "0 0 20px rgba(34,211,238,.5)" }}>
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl grid place-items-center mx-auto mb-4 border border-white/10"
                    style={{ background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(59,130,246,.18))" }}>
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.t}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.d}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 8. ADVANTAGES */}
      <section className="py-24 px-[8vw]">
        <Eyebrow>چرا ما</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-12">
          مزایای انتخاب خدمات IT ما
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="p-6 h-full flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl grid place-items-center border border-white/10"
                    style={{ background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(59,130,246,.18))" }}>
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{a.t}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{a.d}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 9. PRICING */}
      <section className="py-24 px-[8vw]">
        <Eyebrow>پلن‌ها و تعرفه</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center mb-4">
          پلن‌ها و تعرفه‌ی خدمات پشتیبانی شبکه
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-center mb-14">
          پلن مناسب کسب‌وکار خود را انتخاب کنید یا برای پروژه‌های اختصاصی با ما در ارتباط باشید.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold text-slate-950 z-10"
                  style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow: "0 0 20px rgba(34,211,238,.5)" }}>
                  پیشنهاد ویژه
                </div>
              )}
              <Card className={`p-8 h-full flex flex-col ${plan.highlight ? "border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,.15)]" : ""}`}>
                <h3 className="text-2xl font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.target}</p>
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-3xl font-extrabold text-white">{plan.price}</div>
                  <div className="text-xs text-slate-400 mt-1">{plan.period}</div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.highlight ? "text-slate-950" : "text-white border border-white/20 hover:border-cyan-400/50"}`}
                  style={plan.highlight
                    ? { background: "linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow: "0 0 24px rgba(34,211,238,.35)" }
                    : { background: "rgba(15,23,42,.6)" }}
                >
                  دریافت مشاوره
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 px-[8vw]">
        <Eyebrow>سوالات متداول</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-12">
          پاسخ به پرسش‌های رایج
        </h2>
        <div className="max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Card key={i} className="overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right">
                <span className="text-white font-semibold text-base">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-300 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? 240 : 0 }}>
                <p className="px-6 pb-5 text-slate-300 text-sm leading-loose">{f.a}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 11. CTA */}
      <section className="py-28 px-[8vw]">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center border border-cyan-400/30 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,rgba(34,211,238,.08),rgba(59,130,246,.08))",
            boxShadow: "0 40px 120px rgba(34,211,238,.15)",
          }}
        >
          <Sparkles className="w-10 h-10 text-cyan-300 mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            آماده‌ی ارتقاء زیرساخت IT سازمان خود هستید؟
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-loose">
            با تیم متخصص ما در ارتباط باشید و از مشاوره‌ی رایگان برای بررسی زیرساخت شبکه و انتخاب
            بهترین راهکار پشتیبانی IT بهره‌مند شوید.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] text-slate-950"
              style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow: "0 0 30px rgba(34,211,238,.35)" }}>
              <Phone className="w-4 h-4" />
              دریافت مشاوره‌ی رایگان
            </a>
            <a href="mailto:mo.afsharnezhad@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] text-white border border-white/20 hover:border-cyan-400/50 transition-all"
              style={{ background: "rgba(15,23,42,.6)" }}>
              <Mail className="w-4 h-4" />
              ارسال ایمیل
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersianITSections;

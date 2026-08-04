export const DEFINITIONS = {
  earth: {
    title: "تعریف اول",
    content: "یک متر = 1/10,000,000 فاصله قطب تا استوا",
    note: "به دلایل علمی، این تعریف زمینی کنار گذاشته شد",
    rtl: false,
  },
  bar: {
    title: "تعریف دوم",
    content:
      "متر به صورت فاصله بین دو خراش در دو سر یک میله از جنس پلاتین-ایریدیم تعریف شد که در اداره بین‌المللی اوزان و مقیاس‌ها در پاریس نگهداری می‌شد و نمونه‌های دقیقی به آزمایشگاه‌های سراسر جهان فرستاده شد.",
    note: "این استاندارد قابل دسترس‌تر بود",
    rtl: true,
  },
  atom: {
    title: "تعریف سوم",
    content: "یک متر = 1,650,763.73 طول موج",
    note: "مبتنی بر طول موج کریپتون-۸۶",
    rtl: false,
  },
  light: {
    title: "تعریف چهارم",
    content: "یک متر = 1/299,792,458 ثانیه نوری",
    note: "مبتنی بر سرعت نور در خلا",
    rtl: false,
  },
};

export const UNIT_TABS = [
  { id: "earth", label: "🌍 قطب تا استوا" },
  { id: "bar", label: "📏 میله پلاتین" },
  { id: "atom", label: "⚛️ اتم" },
  { id: "light", label: "💡 نور" },
];

export const TOP_LEVEL_TABS = [
  { id: "measurement", label: "📐 اندازه گیری" },
  { id: "whiteboard", label: "📝 وایت برد" },
];

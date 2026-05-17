"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Paintbrush, 
  Wrench, 
  Home, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Mail, 
  Clock,
  Sparkles,
  ArrowUpRight,
  Sun,
  Moon
} from "lucide-react";

// Local custom Instagram component to prevent versioning issues
const Instagram = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false); // Default: Light Mode (false)

  // Monitor scroll for floating nav styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Desain Arsitektur",
      desc: "Perencanaan arsitektur luar biasa untuk hunian dan komersial dengan detail presisi, estetika tinggi, dan efisiensi ruang optimal.",
      features: ["Gambar Kerja Detail (DED)", "Visualisasi 3D Realistis", "Analisis Tapak & Tata Ruang"]
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Desain Interior",
      desc: "Penataan ruang dalam yang harmonis, estetik, fungsional, dan personal untuk merefleksikan karakter dan kenyamanan gaya hidup Anda.",
      features: ["Pemilihan Material & Furnitur", "Layout & Lighting Plan", "Custom Cabinetry & Wardrobe"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Renovasi Ruang",
      desc: "Transformasi ruang lama Anda menjadi modern, segar, dan lebih efisien tanpa menghilangkan nilai historis atau fungsi esensial.",
      features: ["Struktur & Facade Update", "Optimalisasi Fungsi Ruang", "Penyegaran Material & Finish"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Design & Build (Kontraktor)",
      desc: "Solusi menyeluruh dari tahap perancangan awal hingga pembangunan fisik siap huni. Satu pintu koordinasi demi efisiensi biaya dan waktu.",
      features: ["Manajemen Proyek Profesional", "Rencana Anggaran Transparan", "Jaminan Kualitas Kontrol Ketat"]
    }
  ];

  const projects = [
    {
      title: "Modern Minimalist Villa",
      category: "architecture",
      desc: "Hunian peristirahatan dengan bukaan lebar memaksimalkan pencahayaan alami.",
      img: "/images/hero.png"
    },
    {
      title: "Elegant Family Residence",
      category: "architecture",
      desc: "Sentuhan arsitektur modern kontemporer yang hangat untuk keluarga urban.",
      img: "/images/hero.png"
    },
    {
      title: "Japandi Living Room",
      category: "interior",
      desc: "Kombinasi fungsionalitas Skandinavia dengan ketenangan estetika Jepang.",
      img: "/images/hero.png"
    },
    {
      title: "Creative Coworking Space",
      category: "interior",
      desc: "Desain kantor terbuka yang dinamis, memicu kolaborasi dan produktivitas.",
      img: "/images/hero.png"
    },
    {
      title: "Industrial Cozy Cafe",
      category: "renovation",
      desc: "Renovasi bangunan tua menjadi ruang komersial bergaya industrial yang estetis.",
      img: "/images/hero.png"
    },
    {
      title: "Contemporary Kitchen Suite",
      category: "interior",
      desc: "Dapur modern fungsional dengan paduan marmer elegan dan pencahayaan cerdas.",
      img: "/images/hero.png"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Konsultasi & Briefing",
      desc: "Kami mendengarkan visi, kebutuhan ruang, estimasi budget, serta karakter yang ingin Anda tampilkan."
    },
    {
      num: "02",
      title: "Konsep & Desain (3D)",
      desc: "Penyusunan tata letak ruang (layout) dan visualisasi 3D realistis agar Anda bisa merasakan suasana ruang impian."
    },
    {
      num: "03",
      title: "DED & RAB Transparan",
      desc: "Pembuatan Gambar Detail Engineering (DED) lengkap dengan Rencana Anggaran Biaya (RAB) yang terperinci dan jujur."
    },
    {
      num: "04",
      title: "Konstruksi & Pengawasan",
      desc: "Proses pembangunan fisik oleh tim lapangan ahli dengan pengawasan kualitas berkala demi hasil yang presisi."
    },
    {
      num: "05",
      title: "Serah Terima & Garansi",
      desc: "Ruang impian Anda siap dihuni dengan bersih, rapi, lengkap dengan garansi pemeliharaan untuk kenyamanan Anda."
    }
  ];

  const faqs = [
    {
      q: "Layanan apa saja yang disediakan oleh Saespace Studio?",
      a: "Kami melayani jasa lengkap mulai dari konsultasi desain arsitektur, perencanaan interior, renovasi bangunan, hingga pelaksanaan konstruksi fisik (Design & Build) baik untuk hunian pribadi, kantor, kafe, maupun ruang usaha lainnya."
    },
    {
      q: "Bagaimana proses pembayaran di Saespace Studio?",
      a: "Proses pembayaran kami lakukan secara bertahap (termin) sesuai dengan progres pengerjaan yang disepakati bersama dalam kontrak kerja, sehingga aman dan transparan bagi kedua belah pihak."
    },
    {
      q: "Apakah saya bisa mendesain saja tanpa menggunakan jasa kontraktor Saespace?",
      a: "Tentu saja bisa. Anda dapat memesan layanan desain arsitektur atau interior saja (berupa visualisasi 3D, gambar kerja lengkap, dan RAB). Namun, kami juga siap mendampingi Anda hingga pembangunan selesai lewat layanan Design & Build kami."
    },
    {
      q: "Berapa lama estimasi waktu dari desain hingga pembangunan selesai?",
      a: "Durasi sangat bergantung pada skala dan tingkat kerumitan proyek. Sebagai gambaran kasar, proses desain memakan waktu sekitar 1-2 bulan, sementara proses pembangunan fisik berkisar antara 3-6 bulan."
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank");
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-blue-600 selection:text-white overflow-hidden ${
      isDark ? "bg-zinc-950 text-zinc-100" : "bg-stone-50 text-zinc-900"
    }`}>
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] -z-10 pointer-events-none transition-colors duration-500 ${
        isDark ? "bg-blue-500/10" : "bg-blue-200/20"
      }`} />
      <div className={`absolute top-[30%] right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] -z-10 pointer-events-none transition-colors duration-500 ${
        isDark ? "bg-zinc-800/10" : "bg-stone-200/30"
      }`} />
      <div className={`absolute bottom-[10%] left-10 w-[400px] h-[400px] rounded-full blur-[120px] -z-10 pointer-events-none transition-colors duration-500 ${
        isDark ? "bg-blue-900/10" : "bg-sky-200/20"
      }`} />

      {/* HEADER / NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? (isDark 
              ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900 py-3 shadow-lg" 
              : "bg-white/80 backdrop-blur-xl border-b border-zinc-200/80 py-3 shadow-sm"
            ) 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="relative w-36 h-12 flex items-center justify-start group">
            {/* Logo swaps based on theme */}
            <Image 
              src={isDark ? "/images/black-white.jpeg" : "/images/no-bg.png"} 
              alt="Saespace Studio Logo" 
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#tentang" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Tentang Kami
            </a>
            <a 
              href="#layanan" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Layanan
            </a>
            <a 
              href="#portofolio" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Portofolio
            </a>
            <a 
              href="#proses" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Proses
            </a>
            <a 
              href="#faq" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Tanya Jawab
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-full border transition-all duration-300 active:scale-90 ${
                isDark 
                  ? "border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900" 
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => handleWhatsApp("Halo Saespace Studio, saya tertarik untuk berkonsultasi mengenai rencana desain/pembangunan hunian saya.")}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border transition-all active:scale-90 ${
                isDark 
                  ? "border-zinc-800 text-zinc-400" 
                  : "border-zinc-200 text-zinc-600"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className={`focus:outline-none p-1 transition-colors ${
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-650 hover:text-zinc-900"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU ACCORDION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-50 px-6 py-5 flex flex-col justify-between transition-colors duration-500 ${
              isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <a href="#" className="relative w-36 h-12 flex items-center">
                  <Image 
                    src={isDark ? "/images/black-white.jpeg" : "/images/no-bg.png"} 
                    alt="Saespace Studio Logo" 
                    fill 
                    className="object-contain"
                  />
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-1 transition-colors ${
                    isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-xl font-medium">
                <a 
                  href="#tentang" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b transition-colors ${
                    isDark ? "text-zinc-300 hover:text-white border-zinc-900" : "text-zinc-700 hover:text-zinc-950 border-zinc-100"
                  }`}
                >
                  Tentang Kami
                </a>
                <a 
                  href="#layanan" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b transition-colors ${
                    isDark ? "text-zinc-300 hover:text-white border-zinc-900" : "text-zinc-700 hover:text-zinc-950 border-zinc-100"
                  }`}
                >
                  Layanan
                </a>
                <a 
                  href="#portofolio" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b transition-colors ${
                    isDark ? "text-zinc-300 hover:text-white border-zinc-900" : "text-zinc-700 hover:text-zinc-950 border-zinc-100"
                  }`}
                >
                  Portofolio
                </a>
                <a 
                  href="#proses" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b transition-colors ${
                    isDark ? "text-zinc-300 hover:text-white border-zinc-900" : "text-zinc-700 hover:text-zinc-950 border-zinc-100"
                  }`}
                >
                  Proses
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b transition-colors ${
                    isDark ? "text-zinc-300 hover:text-white border-zinc-900" : "text-zinc-700 hover:text-zinc-950 border-zinc-100"
                  }`}
                >
                  Tanya Jawab
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-8">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp("Halo Saespace Studio, saya tertarik untuk berkonsultasi mengenai rencana desain/pembangunan hunian saya.");
                }}
                className="w-full py-4 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-colors duration-350"
              >
                <Phone className="w-4 h-4" />
                Hubungi via WhatsApp
              </button>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:info@saespace.com" className="text-zinc-500 hover:text-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Fullscreen background with premium theme-based overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Premium Interior Background" 
            fill
            priority
            className={`object-cover object-center scale-105 filter blur-[1px] transition-opacity duration-550 ${
              isDark ? "opacity-40" : "opacity-20"
            }`}
          />
          <div className={`absolute inset-0 transition-all duration-550 ${
            isDark 
              ? "bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" 
              : "bg-gradient-to-t from-stone-50 via-stone-50/85 to-stone-50/20"
          }`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Tagline */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 transition-colors duration-500 ${
              isDark 
                ? "bg-blue-500/10 border border-blue-500/30 text-blue-400" 
                : "bg-blue-600/5 border border-blue-600/20 text-blue-600"
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              Architecture & Interior Build
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 transition-colors duration-500 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Mewujudkan Ruang <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                Nyaman, Estetik & Fungsional
              </span>
            </h1>

            <p className={`text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 transition-colors duration-500 ${
              isDark ? "text-zinc-300" : "text-zinc-650"
            }`}>
              Saespace Architecture & Interior Design Build hadir untuk membantu mewujudkan hunian dan ruang usaha impian Anda. Melayani jasa arsitektur, desain interior, renovasi, hingga pembangunan dengan konsep modern dan detail yang terencana. Dari tahap desain hingga proses build, kami siap menghadirkan kenyamanan yang sesuai dengan karakter Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => handleWhatsApp("Halo Saespace Studio, saya ingin berkonsultasi mengenai rencana desain/pembangunan proyek saya.")}
                className="px-8 py-4 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Konsultasi Gratis Sekarang
              </button>
              <a 
                href="#portofolio"
                className={`px-8 py-4 rounded-full font-bold text-sm border backdrop-blur-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                  isDark 
                    ? "border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white bg-zinc-900/50" 
                    : "border-zinc-200 hover:border-zinc-400 text-zinc-700 hover:text-zinc-950 bg-white/50"
                }`}
              >
                Lihat Portofolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:block"
          >
            {/* Elegant side-card showcasing the concept */}
            <div className={`relative p-8 rounded-3xl border shadow-2xl transition-all duration-500 ${
              isDark 
                ? "bg-zinc-900/60 border-zinc-800" 
                : "bg-white/90 border-zinc-200/60 shadow-zinc-200/20"
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-zinc-200/20">
                <Image 
                  src="/images/hero.png" 
                  alt="Modern Design Preview" 
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className={`text-lg font-bold mb-2 transition-colors ${
                isDark ? "text-white" : "text-zinc-900"
              }`}>
                Modern Living Space
              </h3>
              <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}>
                Kombinasi material alami, pencahayaan dramatis, dan pemanfaatan tata ruang maksimal untuk kenyamanan optimal.
              </p>

              <div className={`grid grid-cols-3 gap-4 border-t pt-6 text-center transition-colors ${
                isDark ? "border-zinc-800" : "border-zinc-200"
              }`}>
                <div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Estetis</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Nyaman</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Fungsional</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce ${
          isDark ? "text-zinc-500" : "text-zinc-400"
        }`}>
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT SECTION */}
      <section id="tentang" className={`py-24 max-w-7xl mx-auto px-6 md:px-12 border-t transition-colors ${
        isDark ? "border-zinc-900" : "border-zinc-200"
      } relative`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className={`relative aspect-[4/5] w-full rounded-3xl overflow-hidden border transition-colors ${
              isDark ? "border-zinc-800" : "border-zinc-200 shadow-lg"
            }`}>
              <Image 
                src="/images/hero.png" 
                alt="Saespace Studio Process" 
                fill 
                className="object-cover"
              />
              <div className={`absolute inset-0 transition-colors ${
                isDark ? "bg-gradient-to-t from-zinc-950 via-transparent to-transparent" : "bg-gradient-to-t from-stone-50/80 via-transparent to-transparent"
              }`} />
              
              {/* Overlay Badge */}
              <div className={`absolute bottom-6 left-6 right-6 p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                isDark ? "bg-zinc-900/90 border-zinc-800" : "bg-white/95 border-zinc-200 shadow-xl"
              }`}>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">Our Philosophy</span>
                <p className={`text-sm leading-relaxed font-semibold ${isDark ? "text-zinc-200" : "text-zinc-850"}`}>
                  "Sebuah ruang harus menceritakan kisah pemiliknya dan melayani kebutuhan hidup mereka dengan sempurna."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Tentang Saespace</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6 transition-colors ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Mewujudkan Visi Ruang Anda Menjadi Kenyataan Fisik yang Presisi
            </h2>
            
            <p className={`leading-relaxed mb-6 transition-colors ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}>
              Kami percaya bahwa arsitektur dan interior bukan sekadar soal estetika visual, melainkan gabungan harmonis antara fungsionalitas harian, kenyamanan termal & spasial, serta refleksi kepribadian Anda.
            </p>
            <p className={`leading-relaxed mb-8 transition-colors ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}>
              Dengan tim arsitek, desainer interior, dan tim kontraktor berpengalaman di bawah satu atap, Saespace memandu Anda melalui perjalanan bebas stres dari coretan kertas konsep pertama hingga pemasangan sekrup furnitur terakhir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex gap-3 items-start">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200 shadow-sm"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}>Konsep Modern</h4>
                  <p className={`text-xs mt-1 transition-colors ${isDark ? "text-zinc-500" : "text-zinc-450"}`}>Selalu relevan dengan tren masa kini dan mengedepankan efisiensi ruang.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200 shadow-sm"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}>Detail Terencana</h4>
                  <p className={`text-xs mt-1 transition-colors ${isDark ? "text-zinc-500" : "text-zinc-450"}`}>Setiap sudut, lekukan, dan instalasi direncanakan dengan presisi tinggi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200 shadow-sm"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}>Transparansi RAB</h4>
                  <p className={`text-xs mt-1 transition-colors ${isDark ? "text-zinc-500" : "text-zinc-450"}`}>Rincian biaya jujur dan transparan tanpa ada biaya siluman tersembunyi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className={`p-2 rounded-lg border transition-all ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200 shadow-sm"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}>Satu Pintu Koordinasi</h4>
                  <p className={`text-xs mt-1 transition-colors ${isDark ? "text-zinc-500" : "text-zinc-450"}`}>Kami urus semuanya mulai dari blueprint desain hingga konstruksi selesai.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin konsultasi tentang proses kerja di Saespace Studio.")}
              className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                isDark 
                  ? "bg-white hover:bg-zinc-200 text-zinc-950" 
                  : "bg-zinc-950 hover:bg-zinc-800 text-white shadow-md shadow-zinc-950/10"
              }`}
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="layanan" className={`py-24 transition-colors duration-500 relative border-t ${
        isDark ? "bg-zinc-950/60 border-zinc-900" : "bg-zinc-100/50 border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Layanan Kami</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-xl transition-colors ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Solusi Lengkap untuk Seluruh Kebutuhan Spasial Anda
            </h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div 
                key={idx} 
                className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isDark 
                    ? "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800/80 hover:shadow-2xl hover:shadow-blue-500/[0.02]" 
                    : "bg-white border-zinc-200/60 hover:border-zinc-300 hover:shadow-xl shadow-zinc-200/5"
                }`}
              >
                <div>
                  <div className={`p-4 border rounded-2xl w-fit mb-6 group-hover:scale-110 transition-all duration-300 ${
                    isDark ? "bg-zinc-950 border-zinc-800" : "bg-stone-50 border-zinc-200/80 shadow-sm"
                  }`}>
                    {s.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isDark ? "text-white group-hover:text-blue-400" : "text-zinc-900 group-hover:text-blue-600"
                  }`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}>{s.desc}</p>
                </div>
                
                <div className={`border-t pt-6 transition-colors ${
                  isDark ? "border-zinc-800/50" : "border-zinc-150"
                }`}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f, i) => (
                      <li key={i} className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                        isDark ? "text-zinc-500" : "text-zinc-450"
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO / SHOWCASE SECTION */}
      <section id="portofolio" className={`py-24 border-t transition-colors ${
        isDark ? "border-zinc-900" : "border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Karya Pilihan</span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight transition-colors ${
                isDark ? "text-white" : "text-zinc-900"
              }`}>
                Eksplorasi Karya Saespace Studio
              </h2>
            </div>
            
            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {["all", "architecture", "interior", "renovation"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                      : (isDark 
                          ? "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white" 
                          : "bg-white text-zinc-600 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-350 shadow-sm"
                        )
                  }`}
                >
                  {tab === "all" ? "Semua" : tab === "architecture" ? "Arsitektur" : tab === "interior" ? "Interior" : "Renovasi"}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Portfolio */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={`${p.title}-${index}`}
                  className={`group relative aspect-[4/3] rounded-3xl overflow-hidden border transition-all duration-500 ${
                    isDark ? "border-zinc-900 bg-zinc-900" : "border-zinc-200 bg-white shadow-sm"
                  } cursor-pointer`}
                >
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 opacity-60 group-hover:opacity-85 transition-opacity duration-300 ${
                    isDark 
                      ? "bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" 
                      : "bg-gradient-to-t from-white via-white/50 to-transparent"
                  }`} />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1.5 block">
                      {p.category === "architecture" ? "Arsitektur" : p.category === "interior" ? "Desain Interior" : "Renovasi"}
                    </span>
                    <h3 className={`text-lg font-bold flex items-center justify-between transition-colors ${
                      isDark ? "text-white group-hover:text-blue-450" : "text-zinc-900 group-hover:text-blue-600"
                    }`}>
                      {p.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                    <p className={`text-xs mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-12">
            <button 
              onClick={() => handleWhatsApp("Halo Saespace, boleh dikirimkan katalog portofolio proyek-proyek terbaru?")}
              className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                isDark 
                  ? "border-zinc-800 hover:border-zinc-650 text-zinc-300 hover:text-white" 
                  : "border-zinc-200 hover:border-zinc-400 text-zinc-700 hover:text-zinc-955 bg-white shadow-sm"
              }`}
            >
              Minta Katalog Portofolio Lengkap
            </button>
          </div>

        </div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section id="proses" className={`py-24 border-t transition-colors duration-500 ${
        isDark ? "bg-zinc-900/10 border-zinc-900" : "bg-zinc-100/40 border-zinc-200"
      } relative`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/[0.01] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Proses Kerja</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-xl transition-colors ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Langkah Terencana Menuju Ruang Impian Anda
            </h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative p-6 rounded-2xl border flex flex-col justify-between group transition-all duration-300 ${
                  isDark 
                    ? "bg-zinc-950/50 border-zinc-900 hover:border-zinc-800" 
                    : "bg-white border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className={`text-4xl font-black transition-colors duration-300 mb-6 ${
                    isDark ? "text-zinc-800 group-hover:text-blue-500/20" : "text-zinc-200 group-hover:text-blue-600/10"
                  }`}>
                    {step.num}
                  </div>
                  <h3 className={`text-base font-bold mb-2 transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}>{step.title}</h3>
                  <p className={`text-xs leading-relaxed transition-colors ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className={`py-24 border-t transition-colors ${
        isDark ? "border-zinc-900" : "border-zinc-200"
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Pertanyaan Umum</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight transition-colors ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Tanya Jawab Seputar Saespace
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark 
                    ? "border-zinc-900 bg-zinc-950/50 hover:border-zinc-800" 
                    : "border-zinc-200 bg-white hover:border-zinc-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors focus:outline-none ${
                    isDark ? "text-white hover:text-blue-400" : "text-zinc-900 hover:text-blue-600"
                  }`}
                >
                  <span className="font-bold text-sm sm:text-base leading-relaxed pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-6 pt-0 text-xs sm:text-sm leading-relaxed border-t transition-colors ${
                        isDark ? "text-zinc-400 border-zinc-900/50" : "text-zinc-600 border-zinc-150"
                      }`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section className={`py-24 relative overflow-hidden border-t transition-colors ${
        isDark ? "border-zinc-900 bg-zinc-950" : "border-zinc-200 bg-stone-50"
      }`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="relative w-28 h-28 mx-auto mb-8 shadow-xl rounded-full">
            {/* Display "with bg (logo biru bg putih)" for light theme, and "black white" for dark theme */}
            <Image 
              src={isDark ? "/images/black-white.jpeg" : "/images/with-bg.png"} 
              alt="Saespace Studio Crest" 
              fill
              className="object-contain rounded-full border border-zinc-200/10"
            />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 transition-colors ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Siap Mewujudkan <br />
            <span className="text-blue-600 dark:text-blue-400">Ruang Impian</span> Anda?
          </h2>
          
          <p className={`text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 transition-colors ${
            isDark ? "text-zinc-400" : "text-zinc-650"
          }`}>
            Diskusikan rencana arsitektur, desain interior, renovasi, atau pembangunan Anda bersama tim profesional Saespace Studio. Kami siap menghadirkan solusi terbaik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin mulai berkonsultasi mengenai proyek hunian saya.")}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Mulai Konsultasi (WhatsApp)
            </button>
            <a 
              href="mailto:info@saespace.com"
              className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm border transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                isDark 
                  ? "border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white bg-zinc-900/50" 
                  : "border-zinc-200 hover:border-zinc-450 text-zinc-700 hover:text-zinc-950 bg-white shadow-sm"
              }`}
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Kept in deep elegant dark theme for premium signature look */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 relative z-10 text-zinc-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 flex flex-col items-start">
            <a href="#" className="relative w-40 h-14 flex items-center mb-6">
              <Image 
                src="/images/no-bg.png" 
                alt="Saespace Studio Logo" 
                fill 
                className="object-contain"
              />
            </a>
            <p className="text-zinc-550 text-xs leading-relaxed max-w-sm mb-6">
              Saespace Architecture & Interior Design Build menyediakan solusi perencanaan dan konstruksi fisik terpadu dengan standar kualitas estetika tinggi dan perencanaan presisi.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@saespace.com" 
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-6">Navigasi</h4>
            <ul className="space-y-3 text-xs">
              <li><a href="#tentang" className="text-zinc-500 hover:text-zinc-300 transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="text-zinc-500 hover:text-zinc-300 transition-colors">Layanan</a></li>
              <li><a href="#portofolio" className="text-zinc-500 hover:text-zinc-300 transition-colors">Portofolio</a></li>
              <li><a href="#proses" className="text-zinc-500 hover:text-zinc-300 transition-colors">Proses Kerja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-6">Informasi Kontak</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-zinc-500 leading-relaxed">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-zinc-500">Senin - Sabtu: 09:00 - 18:00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-650 text-xs">
            &copy; {new Date().getFullYear()} Saespace Studio. All rights reserved.
          </p>
          <p className="text-zinc-650 text-xs flex items-center gap-1">
            Crafted for <span className="text-zinc-500 font-bold">Saespace Studio</span>
          </p>
        </div>
      </footer>

    </div>
  );
}

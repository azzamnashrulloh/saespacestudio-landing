"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";
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
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Sync state with HTML className and localStorage
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const services = [
    {
      icon: <Compass className="w-8 h-8 text-blue-400" />,
      title: "Desain Arsitektur",
      desc: "Perencanaan arsitektur luar biasa untuk hunian dan komersial dengan detail presisi, estetika tinggi, dan efisiensi ruang optimal.",
      features: ["Gambar Kerja Detail (DED)", "Visualisasi 3D Realistis", "Analisis Tapak & Tata Ruang"]
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-blue-400" />,
      title: "Desain Interior",
      desc: "Penataan ruang dalam yang harmonis, estetik, fungsional, dan personal untuk merefleksikan karakter dan kenyamanan gaya hidup Anda.",
      features: ["Pemilihan Material & Furnitur", "Layout & Lighting Plan", "Custom Cabinetry & Wardrobe"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: "Renovasi Ruang",
      desc: "Transformasi ruang lama Anda menjadi modern, segar, dan lebih efisien tanpa menghilangkan nilai historis atau fungsi esensial.",
      features: ["Struktur & Facade Update", "Optimalisasi Fungsi Ruang", "Penyegaran Material & Finish"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-400" />,
      title: "Design & Build (Kontraktor)",
      desc: "Solusi menyeluruh dari tahap perancangan awal hingga pembangunan fisik siap huni. Satu pintu koordinasi demi efisiensi biaya dan waktu.",
      features: ["Manajemen Proyek Profesional", "Rencana Anggaran Transparan", "Jaminan Kualitas Kontrol Ketat"]
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
    window.open(`https://wa.me/6283107409486?text=${encoded}`, "_blank");
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-bg-main text-text-main font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative transition-colors duration-300`}>
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-10 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-nav-bg backdrop-blur-xl border-b border-card-border shadow-lg" 
            : "bg-nav-bg backdrop-blur-xl border-b border-card-border/50 md:bg-transparent md:backdrop-blur-none md:border-b-0"
        }`}
        style={{
          paddingTop: isScrolled 
            ? "calc(env(safe-area-inset-top, 0px) + 12px)" 
            : "calc(env(safe-area-inset-top, 0px) + 20px)",
          paddingBottom: isScrolled ? "12px" : "20px"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="relative w-36 h-12 flex items-center justify-start group">
            {/* Using the white contrast logo for high visibility */}
            <Image 
              src="/images/no-bg.png" 
              alt="Saespace Studio Logo" 
              fill
              sizes="144px"
              className={`object-contain transition-transform duration-300 group-hover:scale-105 opacity-95 group-hover:opacity-100 ${
                darkMode ? "brightness-0 invert" : "brightness-0"
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tentang" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors">Tentang Kami</a>
            <a href="#layanan" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors">Layanan</a>
            <a href="#portofolio" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors">Portofolio</a>
            <a href="#proses" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors">Proses</a>
            <a href="#faq" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors">Tanya Jawab</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full border border-card-border bg-card-bg text-text-main hover:text-text-title transition-all duration-300 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-main hover:text-text-title focus:outline-none p-2.5 rounded-lg bg-card-bg border border-card-border flex items-center justify-center transition-all duration-300 active:scale-95"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU ACCORDION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg-main/98 backdrop-blur-2xl z-50 px-6 flex flex-col justify-between overflow-y-auto"
            style={{
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 24px)",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 24px)"
            }}
          >
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between">
                <a href="#" className="relative w-36 h-12 flex items-center">
                  <Image 
                    src="/images/no-bg.png" 
                    alt="Saespace Studio Logo" 
                    fill 
                    sizes="144px"
                    className={`object-contain opacity-95 ${
                      darkMode ? "brightness-0 invert" : "brightness-0"
                    }`}
                  />
                </a>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2.5 rounded-lg bg-card-bg border border-card-border text-text-main hover:text-text-title flex items-center justify-center transition-all duration-300 active:scale-95"
                    aria-label="Toggle Theme"
                  >
                    {darkMode ? <Sun className="w-6 h-6 text-amber-400" /> : <Moon className="w-6 h-6 text-indigo-600" />}
                  </button>

                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-text-main hover:text-text-title p-2.5 rounded-lg bg-card-bg border border-card-border flex items-center justify-center transition-all duration-300 active:scale-95"
                    aria-label="Close Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-6 text-xl font-medium">
                <a 
                  href="#tentang" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-main hover:text-text-title py-2.5 border-b border-card-border transition-colors"
                >
                  Tentang Kami
                </a>
                <a 
                  href="#layanan" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-main hover:text-text-title py-2.5 border-b border-card-border transition-colors"
                >
                  Layanan
                </a>
                <a 
                  href="#portofolio" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-main hover:text-text-title py-2.5 border-b border-card-border transition-colors"
                >
                  Portofolio
                </a>
                <a 
                  href="#proses" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-main hover:text-text-title py-2.5 border-b border-card-border transition-colors"
                >
                  Proses
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-main hover:text-text-title py-2.5 border-b border-card-border transition-colors"
                >
                  Tanya Jawab
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-12 pb-6">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build");
                }}
                className="w-full py-4 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <Phone className="w-4 h-4" />
                Hubungi via WhatsApp
              </button>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 rounded-lg bg-zinc-900/40 border border-zinc-900">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:info@saespace.com" className="text-zinc-500 hover:text-white transition-colors p-2 rounded-lg bg-zinc-900/40 border border-zinc-900">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-dvh flex items-center justify-center pt-32 pb-16 md:pt-40 lg:pt-28 overflow-hidden">
        {/* Fullscreen background with premium dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpeg" 
            alt="Premium Interior Background" 
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 scale-105 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-bg-main/40" />
        </div>
 
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Architecture & Interior Build
            </div>
 
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-title leading-[1.1] mb-6">
              Mewujudkan Ruang <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Nyaman, Estetik & Fungsional
              </span>
            </h1>
 
            <p className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Saespace Architecture & Interior Design Build hadir untuk membantu mewujudkan hunian dan ruang usaha impian Anda. Melayani jasa arsitektur, desain interior, renovasi, hingga pembangunan dengan konsep modern dan detail yang terencana. Dari tahap desain hingga proses build, kami siap menghadirkan kenyamanan yang sesuai dengan karakter Anda.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Konsultasi Gratis Sekarang
              </button>
              <a 
                href="#portofolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm border border-card-border hover:border-text-muted text-text-main hover:text-text-title flex items-center justify-center gap-2 bg-card-bg backdrop-blur-sm transition-all duration-300 active:scale-95"
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
            <div className="relative p-8 rounded-3xl bg-card-bg backdrop-blur-xl border border-card-border shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Modern Design Preview" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
 
              <h3 className="text-lg font-bold text-text-title mb-2">Modern Living Space</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Kombinasi material alami, pencahayaan dramatis, dan pemanfaatan tata ruang maksimal untuk kenyamanan optimal.
              </p>
 
              <div className="grid grid-cols-3 gap-4 border-t border-card-border pt-6 text-center">
                <div>
                  <div className="text-xl font-bold text-blue-400">100%</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Estetis</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-400">100%</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Nyaman</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-400">100%</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Fungsional</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
 
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT SECTION */}
      <section id="tentang" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-zinc-800">
              <Image 
                src="/images/hero.jpeg" 
                alt="Saespace Studio Process" 
                fill 
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-card-bg/90 backdrop-blur-md border border-card-border">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">Our Philosophy</span>
                <p className="text-sm text-text-main leading-relaxed font-medium">
                  "Sebuah ruang harus menceritakan kisah pemiliknya dan melayani kebutuhan hidup mereka dengan sempurna."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Tentang Saespace</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-title tracking-tight leading-tight mb-6">
              Mewujudkan Visi Ruang Anda Menjadi Kenyataan Fisik yang Presisi
            </h2>
            
            <p className="text-text-main leading-relaxed mb-6">
              Kami percaya bahwa arsitektur dan interior bukan sekadar soal estetika visual, melainkan gabungan harmonis antara fungsionalitas harian, kenyamanan termal & spasial, serta refleksi kepribadian Anda.
            </p>
            <p className="text-text-main leading-relaxed mb-8">
              Dengan tim arsitek, desainer interior, dan tim kontraktor berpengalaman di bawah satu atap, Saespace memandu Anda melalui perjalanan bebas stres dari coretan kertas konsep pertama hingga pemasangan sekrup furnitur terakhir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-card-bg border border-card-border">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text-title text-sm">Konsep Modern</h4>
                  <p className="text-xs text-text-muted mt-1">Selalu relevan dengan tren masa kini dan mengedepankan efisiensi ruang.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-card-bg border border-card-border">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text-title text-sm">Detail Terencana</h4>
                  <p className="text-xs text-text-muted mt-1">Setiap sudut, lekukan, dan instalasi direncanakan dengan presisi tinggi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-card-bg border border-card-border">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text-title text-sm">Transparansi RAB</h4>
                  <p className="text-xs text-text-muted mt-1">Rincian biaya jujur dan transparan tanpa ada biaya siluman tersembunyi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-card-bg border border-card-border">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text-title text-sm">Satu Pintu Koordinasi</h4>
                  <p className="text-xs text-text-muted mt-1">Kami urus semuanya mulai dari blueprint desain hingga konstruksi selesai.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}
              className="px-6 py-3 rounded-full bg-text-title hover:bg-text-title/95 hover:scale-105 text-bg-main border border-card-border font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-md"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="layanan" className="py-24 bg-bg-main relative border-t border-border-main">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Layanan Kami</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-title tracking-tight leading-tight max-w-xl">
              Solusi Lengkap untuk Seluruh Kebutuhan Spasial Anda
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-card-bg border border-card-border hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 bg-bg-main border border-card-border rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-title mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                  <p className="text-text-main text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                
                <div className="border-t border-card-border/50 pt-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-text-muted font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
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
      <section id="portofolio" className="py-24 border-t border-border-main">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Karya Pilihan</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-title tracking-tight leading-tight">
                Eksplorasi Karya Saespace Studio
              </h2>
            </div>
            
            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {["all", "architecture", "interior", "renovation"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === tab 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                      : "bg-card-bg text-text-muted border border-card-border hover:text-text-title hover:border-blue-500/50"
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
                <Link
                  href={`/projects/${p.id}`}
                  key={`${p.title}-${index}`}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-card-border bg-card-bg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 block"
                >
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill 
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1.5 block">
                      {p.category === "architecture" ? "Arsitektur" : p.category === "interior" ? "Desain Interior" : "Renovasi"}
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center justify-between group-hover:text-blue-400 transition-colors">
                      {p.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                    <p className="text-zinc-200 text-xs mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-12">
            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}
              className="px-6 py-3 rounded-full border border-card-border hover:border-blue-500 text-text-title hover:bg-card-bg font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
            >
              Minta Katalog Portofolio Lengkap
            </button>
          </div>

        </div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section id="proses" className="py-24 bg-card-bg/20 relative border-t border-border-main">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Proses Kerja</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-title tracking-tight leading-tight max-w-xl">
              Langkah Terencana Menuju Ruang Impian Anda
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl bg-card-bg border border-card-border flex flex-col justify-between group hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="text-4xl font-black text-text-muted/20 group-hover:text-blue-500/20 transition-colors duration-300 mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-text-title mb-2">{step.title}</h3>
                  <p className="text-text-main text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-border-main">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Pertanyaan Umum</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-title tracking-tight leading-tight">
              Tanya Jawab Seputar Saespace
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-card-border bg-card-bg overflow-hidden transition-colors hover:border-blue-500/30 shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-text-title hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base leading-relaxed pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180" : ""}`} />
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
                      <div className="p-6 pt-0 text-text-main text-sm leading-relaxed border-t border-card-border/50">
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
      <section className="py-24 relative overflow-hidden border-t border-border-main bg-bg-main">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="relative w-28 h-28 mx-auto mb-8">
            <Image 
              src="/images/black-white.jpeg" 
              alt="Saespace Studio Crest" 
              fill
              sizes="112px"
              className="object-contain rounded-full shadow-2xl"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-title tracking-tight leading-tight mb-6">
            Siap Mewujudkan <br />
            <span className="text-blue-400">Ruang Impian</span> Anda?
          </h2>
          
          <p className="text-text-main text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Diskusikan rencana arsitektur, desain interior, renovasi, atau pembangunan Anda bersama tim profesional Saespace Studio. Kami siap menghadirkan solusi terbaik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handleWhatsApp("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Mulai Konsultasi (WhatsApp)
            </button>
            <a 
              href="mailto:info@saespace.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm border border-card-border hover:border-blue-500 text-text-title flex items-center justify-center gap-2 bg-card-bg transition-all duration-300 active:scale-95 shadow-sm"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg-main border-t border-border-main py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 flex flex-col items-start">
            <a href="#" className="relative w-40 h-14 flex items-center mb-6">
              <Image 
                src="/images/no-bg.png" 
                alt="Saespace Studio Logo" 
                fill 
                sizes="160px"
                className={`object-contain transition-all duration-300 ${
                  darkMode ? "brightness-0 invert opacity-95" : "brightness-0 opacity-80"
                }`}
              />
            </a>
            <p className="text-text-muted text-xs leading-relaxed max-w-sm mb-6">
              Saespace Architecture & Interior Design Build menyediakan solusi perencanaan dan konstruksi fisik terpadu dengan standar kualitas estetika tinggi dan perencanaan presisi.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-card-bg border border-card-border flex items-center justify-center text-text-muted hover:text-text-title hover:border-blue-500/50 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@saespace.com" 
                className="w-9 h-9 rounded-full bg-card-bg border border-card-border flex items-center justify-center text-text-muted hover:text-text-title hover:border-blue-500/50 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-title text-xs uppercase tracking-wider mb-6">Navigasi</h4>
            <ul className="space-y-3 text-xs">
              <li><a href="#tentang" className="text-text-muted hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="text-text-muted hover:text-blue-400 transition-colors">Layanan</a></li>
              <li><a href="#portofolio" className="text-text-muted hover:text-blue-400 transition-colors">Portofolio</a></li>
              <li><a href="#proses" className="text-text-muted hover:text-blue-400 transition-colors">Proses Kerja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-title text-xs uppercase tracking-wider mb-6">Informasi Kontak</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-text-muted">Senin - Sabtu: 09:00 - 18:00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-border-main pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Saespace Studio. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            Crafted for <span className="text-text-title font-bold">Saespace Studio</span>
          </p>
        </div>
      </footer>


    </div>
  );
}

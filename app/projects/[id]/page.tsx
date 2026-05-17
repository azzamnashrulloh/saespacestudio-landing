"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Sun, 
  Moon, 
  ChevronLeft, 
  ChevronRight,
  Compass,
  Calendar,
  MapPin,
  Sparkles
} from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  // Find project by param ID
  const project = projects.find(p => p.id === id);

  const [darkMode, setDarkMode] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayTempPaused = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Dynamic Horizontal Presenting Particle System Hook
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      maxAlpha: number;
      color: string;
      phase: number;
      speed: number;
    }> = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      initParticles();
    };

    const initParticles = () => {
      const count = 90;
      particles = [];
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      
      // Dynamic sapphire/sky blue tone based on active theme
      const colorPrefix = darkMode ? "rgba(96, 165, 250, " : "rgba(37, 99, 235, ";

      for (let i = 0; i < count; i++) {
        // Explode outward horizontally (left or right)
        const angle = (Math.random() > 0.5 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.15;
        const initialSpeed = 14 + Math.random() * 24; // Rapid presentation velocity
        
        particles.push({
          x: w / 2 + (Math.random() - 0.5) * 60,
          y: h / 2 + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * initialSpeed,
          vy: (Math.random() - 0.5) * 1.5,
          radius: 0.8 + Math.random() * 2.2,
          alpha: 0.05,
          maxAlpha: 0.2 + Math.random() * 0.5,
          color: colorPrefix,
          phase: Math.random() * Math.PI * 2,
          speed: 0.01 + Math.random() * 0.02
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        
        // Rapid presentation spreads out horizontally & rapidly decelerates
        if (speed > 0.5) {
          p.vx *= 0.93; 
          p.vy *= 0.93;
        } else {
          // Ambient gentle floating phase
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
          
          const maxFloat = 0.5;
          p.vx = Math.max(-maxFloat, Math.min(maxFloat, p.vx));
          p.vy = Math.max(-maxFloat, Math.min(maxFloat, p.vy));
        }

        p.x += p.vx;
        p.y += p.vy;

        // Opacity transition (initial fade-in, then breathing oscillation)
        if (p.alpha < p.maxAlpha) {
          p.alpha += 0.03;
        } else {
          p.phase += p.speed;
          p.alpha = p.maxAlpha + Math.sin(p.phase) * 0.12;
        }

        // Wrap around borders
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowBlur = p.radius * 3.5;
        ctx.shadowColor = darkMode ? "rgb(96, 165, 250)" : "rgb(37, 99, 235)";
        ctx.fillStyle = `${p.color}${Math.max(0.01, Math.min(1, p.alpha))})`;
        ctx.fill();
      });

      ctx.shadowBlur = 0; // reset for rendering efficiency
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [id, darkMode]);

  // Carousel Auto Play implementation
  useEffect(() => {
    if (isPlaying && project && project.images.length > 1) {
      timerRef.current = setInterval(() => {
        setActiveIdx((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
      }, 4000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Proyek Tidak Ditemukan</h2>
        <Link 
          href="/" 
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Calculate 3D Card transformations along the circular track
  const getCardStyle = (index: number) => {
    const total = project.images.length;
    let diff = index - activeIdx;
    
    // Wrap differences for endless carousel track styling
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;
    
    const isActive = diff === 0;
    const absDiff = Math.abs(diff);

    // Dynamic scale, horizontal position, 3D Y-rotation tilt, z-index and opacity
    const scale = isActive ? 1.12 : 0.85 - absDiff * 0.08;
    const xTranslation = `calc(${diff} * var(--carousel-gap))`;
    const rotateY = diff * -25; // 3D perspective angle tilt
    const zIndex = 30 - absDiff * 5;
    const opacity = isActive ? 1 : 0.55 - absDiff * 0.15;
    const blur = isActive ? "none" : `blur(${absDiff * 1.5}px)`;

    return {
      scale,
      x: xTranslation,
      rotateY,
      zIndex,
      opacity,
      filter: blur,
      isActive
    };
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-bg-main text-text-main font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative transition-colors duration-300`}>
      
      {/* Fullscreen background backdrop image similar to homepage hero */}
      <div className="absolute top-0 left-0 right-0 z-0 h-[680px] overflow-hidden pointer-events-none">
        <Image 
          src={project.images[0]} 
          alt={`${project.title} Backdrop`} 
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-25 dark:opacity-20 scale-105 filter blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/10 via-transparent to-transparent" />
      </div>

      {/* HEADER SECTION */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-nav-bg backdrop-blur-md border-b border-border-main py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/#portofolio"
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card-bg border border-card-border hover:border-blue-500/50 text-text-title font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            Kembali
          </Link>

          <Link href="/">
            <Image 
              src="/images/no-bg.png"
              alt="Saespace Studio"
              width={100}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${
                darkMode ? "brightness-0 invert" : "brightness-0"
              }`}
            />
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-card-bg border border-card-border text-text-title hover:text-blue-500 transition-colors shadow-sm cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
          </button>
        </div>
      </header>

      {/* MAIN CAROUSEL AREA */}
      <main className="pt-32 pb-16 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Project Intro */}
        <div className="text-center max-w-2xl mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">
            Detail Portofolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-title tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto" />
        </div>

        {/* 3D Curved Interactive Carousel Track */}
        <div 
          className="relative w-full h-[350px] md:h-[480px] flex items-center justify-center overflow-hidden py-10 z-10 [--carousel-gap:145px] sm:[--carousel-gap:220px] md:[--carousel-gap:280px]"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => {
            if (isPlaying) {
              setIsPlaying(false);
              autoplayTempPaused.current = true;
            }
          }}
          onMouseLeave={() => {
            if (autoplayTempPaused.current) {
              setIsPlaying(true);
              autoplayTempPaused.current = false;
            }
          }}
        >
          {/* Presenting Particles Canvas Backdrop */}
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
          />

          {/* Glowing Track Baseline ("Jalur Carousel") */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-0.5 opacity-30 pointer-events-none z-0">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] rounded-full" />
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[6px] -mt-0.5 rounded-full" />
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            {project.images.map((imgUrl, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: style.scale,
                    x: style.x,
                    rotateY: style.rotateY,
                    opacity: style.opacity,
                    filter: style.filter
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  style={{ zIndex: style.zIndex }}
                  onClick={() => setActiveIdx(index)}
                  className={`absolute w-[82vw] h-[61.5vw] sm:w-[380px] sm:h-[285px] md:w-[500px] md:h-[375px] rounded-3xl overflow-hidden shadow-2xl border cursor-pointer select-none transition-colors duration-300 ${
                    style.isActive 
                      ? "border-blue-500 shadow-blue-500/10" 
                      : "border-card-border hover:border-zinc-500"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Image ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 500px"
                    priority={index === 0}
                  />
                  {/* Subtle glass overlay for inactive cards */}
                  {!style.isActive && (
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex items-center gap-4 mt-6 z-20">
          <button
            onClick={() => setActiveIdx((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
            className="p-3 rounded-full bg-card-bg border border-card-border text-text-title hover:text-white hover:bg-blue-600 transition-all active:scale-90 cursor-pointer shadow-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md ${
              isPlaying 
                ? "bg-blue-600 text-white hover:bg-blue-500" 
                : "bg-card-bg border border-card-border text-text-title hover:text-white"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Pause Auto
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Play Auto
              </>
            )}
          </button>

          <button
            onClick={() => setActiveIdx((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
            className="p-3 rounded-full bg-card-bg border border-card-border text-text-title hover:text-white hover:bg-blue-600 transition-all active:scale-90 cursor-pointer shadow-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Image Page Indicators */}
        <div className="flex justify-center gap-1.5 mt-6 z-20">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIdx(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === index ? "w-6 bg-blue-500" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* PROJECT DETAILS & META INFO */}
        <div className="w-full max-w-4xl mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Description */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-card-bg border border-card-border shadow-sm">
            <h3 className="text-xl font-bold text-text-title mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Tentang Proyek
            </h3>
            <p className="text-text-main text-sm sm:text-base leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Metadata Card */}
          <div className="p-8 rounded-3xl bg-card-bg border border-card-border shadow-sm flex flex-col gap-6">
            <h3 className="text-lg font-bold text-text-title border-b border-border-main pb-3">
              Informasi Desain
            </h3>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Kategori</span>
                <span className="text-xs sm:text-sm font-semibold text-text-title capitalize">{project.category} Design</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Lokasi</span>
                <span className="text-xs sm:text-sm font-semibold text-text-title">Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Tahun</span>
                <span className="text-xs sm:text-sm font-semibold text-text-title">2026</span>
              </div>
            </div>

            <Link
              href={`https://wa.me/6283107409486?text=${encodeURIComponent("Halo Saespace, saya ingin bertanya perihal Arsitektur Interior Design & Build")}`}
              target="_blank"
              className="mt-2 w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              Konsultasi Desain Serupa
            </Link>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border-main py-12 mt-16 bg-card-bg/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Saespace Studio. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Crafted for <span className="text-text-title font-semibold">Saespace Studio</span>
          </p>
        </div>
      </footer>

    </div>
  );
}

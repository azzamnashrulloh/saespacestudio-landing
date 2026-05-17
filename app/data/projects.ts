export interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  img: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "warm-minimalist-bedroom",
    title: "Warm Minimalist Bedroom",
    category: "interior",
    desc: "Nuansa netral yang hangat dipadu desain minimalis bikin ruang terasa lebih luas dan rapi. Cocok banget untuk anak atau remaja yang butuh tempat istirahat sekaligus ruang belajar. Less space, more comfort. ✨🤍",
    img: "/images/projects/Residential/model1/res-1.jpeg",
    images: [
      "/images/projects/Residential/model1/res-1.jpeg",
      "/images/projects/Residential/model1/res-2.jpeg",
      "/images/projects/Residential/model1/res-3.jpeg",
      "/images/projects/Residential/model1/res-4.jpeg",
      "/images/projects/Residential/model1/res-5.jpeg"
    ]
  },
  {
    id: "urban-blueprint-industrial-tropis",
    title: "Urban Blueprint: Industrial Tropis",
    category: "architecture",
    desc: "Tampilan 'Blueprint' dari hunian masa depan. Lihat bagaimana arsitektur minimalis bertemu dengan material beton ekspos yang tangguh. Detail yang presisi dan tata ruang yang terbuka membuat rumah ini terasa luas dan terhubung dengan alam melalui taman indoor dan balkon. 🌱🧱",
    img: "/images/projects/Residential/model2/res-2-1.jpeg",
    images: [
      "/images/projects/Residential/model2/res-2-1.jpeg",
      "/images/projects/Residential/model2/res-2-2.jpeg",
      "/images/projects/Residential/model2/res-2-3.jpeg"
    ]
  },
  {
    id: "luxurious-walnut-residence",
    title: "Luxurious Walnut Residence",
    category: "interior",
    desc: "Menghadirkan harmoni sempurna antara estetika visual dan kenyamanan hakiki. Dari lekukan sofa sculptural di ruang keluarga, kehangatan material dark walnut di dapur premium, hingga ketenangan kamar utama dengan tekstur velvet yang lembut. Setiap sudut dirancang dengan detail material kelas atas. ✨",
    img: "/images/projects/Residential/model3/res-3-1.jpeg",
    images: [
      "/images/projects/Residential/model3/res-3-1.jpeg",
      "/images/projects/Residential/model3/res-3-2.jpeg",
      "/images/projects/Residential/model3/res-3-3.jpeg"
    ]
  },
  {
    id: "serene-japandi-bedroom",
    title: "Serene Japandi Bedroom",
    category: "interior",
    desc: "Menggabungkan ketenangan gaya Jepang dengan kehangatan desain Skandinavia. Fokus utama desain ini adalah menciptakan ruang istirahat yang minimal, hangat, dan nyaman visual. Palet warna netral dan material kayu natural dipilih untuk memberikan suasana santai (relax) setelah aktivitas seharian. 🌿",
    img: "/images/projects/Residential/model4/res-4-1.jpeg",
    images: [
      "/images/projects/Residential/model4/res-4-1.jpeg",
      "/images/projects/Residential/model4/res-4-2.jpeg",
      "/images/projects/Residential/model4/res-4-3.jpeg",
      "/images/projects/Residential/model4/res-4-4.jpeg"
    ]
  },
  {
    id: "modern-healing-clinic",
    title: "Modern Healing Clinic",
    category: "renovation",
    desc: "Interior rumah sakit/klinik bukan hanya soal fungsi, tapi juga tentang rasa nyaman. Dominasi material kayu oak, pencahayaan hangat, dan sentuhan hijau tropical menciptakan ambience yang lebih santai (relaxing) dan menyambut hangat (welcoming) bagi pasien maupun pengunjung. 🌱✨",
    img: "/images/projects/RumahSakit/rs.png",
    images: [
      "/images/projects/RumahSakit/rs.png",
      "/images/projects/RumahSakit/rs-2.png",
      "/images/projects/RumahSakit/rs-3.png",
      "/images/projects/RumahSakit/rs-4.png",
      "/images/projects/RumahSakit/rs-5.png"
    ]
  }
];

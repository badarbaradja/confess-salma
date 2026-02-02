"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/Marquee";
import PhotoCard from "@/components/PhotoCard";
import confetti from "canvas-confetti"; // Import confetti

// Komponen Kelopak Bunga (Background)
const FlowerPetal = ({ className, delay }: { className: string, delay: number }) => (
    <motion.svg 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
        className={`absolute opacity-30 mix-blend-screen pointer-events-none ${className}`}
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [-20, 20, -20], rotate: [0, 45, 0], x: [-10, 10, -10] }}
        transition={{ duration: 10 + delay, repeat: Infinity, ease: "easeInOut", delay: delay }}
    >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.75 3c1.99 0 3.751 1.08 4.75 2.735A5.512 5.512 0 0117.25 3c3.036 0 5.5 2.322 5.5 5.25 0 3.925-2.438 7.111-4.739 9.256a25.181 25.181 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </motion.svg>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // State
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false); // State untuk tracking jawaban

  // Fungsi Tombol No Kabur
  const moveButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoBtnPosition({ x: randomX, y: randomY });
    setIsHovered(true);
  };

  // Fungsi Saat Klik Yes
  const handleYesClick = () => {
    setIsAccepted(true);
    
    // Tembakkan Confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white overflow-hidden selection:bg-salma-pink selection:text-slate-900 relative pb-20">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-salma-purple rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30"></div>
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-salma-blue rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-salma-pink rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-30"></div>
        <FlowerPetal className="w-24 h-24 text-salma-pink top-20 left-10" delay={0} />
        <FlowerPetal className="w-32 h-32 text-salma-purple top-1/2 right-20" delay={2} />
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative z-10 px-4">
        <motion.div style={{ y: yText, opacity: opacityText }} className="text-center">
          <h2 className="text-sm md:text-xl font-light mb-6 tracking-[0.3em] text-salma-blue uppercase">To: Salmahita Aditya Pradilla</h2>
          <h1 className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 leading-tight drop-shadow-sm">
            It's Been<br />a Journey.
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-12 animate-bounce">
          <p className="text-xs tracking-[0.5em] opacity-60 text-salma-pink">SCROLL SLOWLY</p>
        </motion.div>
      </section>

      <section className="py-10 z-10 relative">
        <Marquee text="IN KESMAS WE MEGA TRUST" />
      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10 space-y-40">
        <div className="flex flex-col md:flex-row items-center gap-12 relative">
           <motion.div 
             initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
             className="flex-1 space-y-6"
           >
             <h3 className="text-4xl font-bold text-salma-pink">Ingat KUI 2023?</h3>
             <p className="text-lg leading-relaxed text-slate-300 font-light">
               Rasanya baru kemarin kita berjuang bareng di bimbel. Belajar bareng, pusing bareng, sampai saling ledek-ledekan (yang kadang kelewatan haha). 
               Masa-masa itu bukan cuma soal masuk kampus, tapi momen di mana aku sadar: <br/>
               <span className="text-white italic">"Seru banget ya kalau bisa terus berjuang sama orang ini."</span>
             </p>
           </motion.div>
           <div className="md:-rotate-3 transform transition-transform hover:rotate-0">
                <PhotoCard src="/foto-aksi.jpg" rotate="left" alt="Momen kita" />
           </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative">
           <div className="md:rotate-3 transform transition-transform hover:rotate-0">
                <PhotoCard src="/foto-dewasa.jpg" rotate="right" alt="Salma yang anggun" />
           </div>
           <motion.div 
             initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
             className="flex-1 space-y-6 text-right"
           >
             <h3 className="text-4xl font-bold text-salma-purple">More Than Just "Pretty"</h3>
             <p className="text-lg leading-relaxed text-slate-300 font-light">
               Setahun kenal kamu, dari sekadar becanda receh sampai <i>deep talk</i> via call sampai malam. 
               Aku selalu takjub sama caramu berbagi cerita (sharing), periangnya kamu, dan kebaikanmu ke orang lain.
               <br/><br/>
               Kamu itu paket lengkap, Sal. Dewasa, mandiri, berprestasi, tapi tetep bisa bikin aku ketawa lepas.
               <strong className="block text-salma-blue mt-2 text-xl">I'm so proud of you.</strong>
             </p>
           </motion.div>
        </div>
      </section>

      {/* POEM SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center relative z-10 py-20 px-4">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-0"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}
          className="relative z-10 max-w-2xl text-center space-y-12"
        >
          <div className="space-y-6 text-lg md:text-xl font-serif text-slate-200 leading-loose italic">
            <p>Aku tahu rasanya ragu membuka hati lagi.<br/>Takut salah orang, takut jatuh di lubang yang sama.<br/>Dan aku tahu, kamu juga merasakannya.</p>
            <p>Kita bukan dua orang yang datang tanpa cerita.<br/>Ada luka yang pernah kita simpan lama,<br/>ada takut yang membuat kita berjalan pelan.</p>
            <p className="text-salma-pink font-medium">Aku mengenalmu sudah lama, tapi beberapa bulan ini rasanya berbeda.</p>
            <p>Kamu tidak pernah berusaha mengubah hidupku,<br/>tapi entah bagaimana,<br/>hari-hariku jadi lebih hidup sejak kamu ada.</p>
            <p>Aku ingin memilih kamu,<br/>bukan karena aku takut sendiri,<br/>tapi karena bersamamu aku berani mencoba lagi.</p>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-salma-pink to-transparent mx-auto"></div>
          <div className="text-sm font-sans tracking-widest text-slate-400 uppercase">
            <p>I promise you this, whatever happens today,<br/>I'm not going anywhere.</p>
            <p className="mt-4">Everything will fall into place,<br/>just like you always do - beautiful, softly in your own time.</p>
          </div>
        </motion.div>
      </section>

      {/* FINAL QUESTION SECTION */}
      <section className="h-screen flex flex-col justify-center items-center relative z-10 px-4 text-center space-y-8">
        
        {!isAccepted ? (
          /* TAMPILAN SEBELUM DIJAWAB */
          <>
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-salma-red via-salma-pink to-salma-purple"
            >
              Will you be my girlfriend?
            </motion.h2>
            
            <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center h-40 w-full max-w-md">
               {/* Tombol YES */}
               <button 
                 onClick={handleYesClick}
                 className="z-20 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300"
               >
                 Yes, I will 💐
               </button>

               {/* Tombol NO */}
               <motion.button
                 animate={noBtnPosition}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 onMouseEnter={moveButton}
                 onClick={moveButton}
                 className="px-10 py-4 rounded-full bg-slate-700 text-slate-300 font-bold text-xl shadow-lg cursor-pointer"
                 style={{ position: isHovered ? 'absolute' : 'relative' }}
               >
                 No
               </motion.button>
            </div>
            <p className="text-sm opacity-40 mt-10">(Tombol "No" nya lagi rusak kayaknya 😝)</p>
          </>
        ) : (
          /* TAMPILAN SETELAH DIJAWAB YES (MOMEN KUNCI) */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-salma-pink">I Knew It. ❤️</h2>
            <div className="w-full h-px bg-white/20 my-8"></div>
            <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide animate-pulse">
              Sekarang, coba lihat aku...
            </p>
          </motion.div>
        )}

      </section>

    </main>
  );
}
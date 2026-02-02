"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhotoCard({ src, rotate, alt }: { src: string, rotate: string, alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate === 'left' ? -10 : 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotate === 'left' ? -3 : 3 }}
      transition={{ duration: 1, type: 'spring' }}
      viewport={{ once: true, margin: "-100px" }}
      // Efek melayang pelan
      animate={{ 
        y: [0, -15, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
       }}
      className={`relative w-64 h-80 md:w-72 md:h-96 bg-white p-3 shadow-2xl shadow-salma-pink/30 rounded-lg transform hover:scale-105 transition-all duration-500 z-20 border-b-8 border-r-8 border-white/50`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-sm">
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover filter sepia-[0.2] hover:sepia-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </motion.div>
  );
}
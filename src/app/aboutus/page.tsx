"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "The Trust Problem in Web3",
      content:
        "With Web3 innovations come new risks. Traditional trust systems don’t work in decentralized environments. Pseudonymity, fraud, rug pulls—these are daily hurdles in the Web3 space.",
    },
    {
      title: "Introducing Truveron",
      content:
        "TRUVERON bridges the trust gap with AI-powered, decentralized reputation scores. We analyze on-chain activity, behavioral patterns, and external data to deliver transparent trust metrics.",
    },
    {
      title: "Why It Matters",
      content:
        "From DeFi lending to NFT trading and DAO voting, trust is everything. With Truveron, users and businesses can make informed decisions, reducing fraud and boosting participation.",
    },
    {
      title: "A Vision for Safer Web3",
      content:
        "We believe trust should be decentralized, transparent, and resistant to manipulation. Truveron is building the backbone of a safer, more inclusive decentralized economy.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 sm:px-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
          About Truveron
        </h1>

        {/* Slide Animation */}
        <div className="relative h-72 sm:h-60">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                index === currentSlide
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
              className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg text-gray-300 px-4 sm:px-10">
                {slide.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Bubbles */}
        <div className="mt-12 flex justify-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600 hover:bg-blue-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Image Background Reveal */}
      <div className="absolute top-0 right-0 opacity-10">
        <Image
          src="/bg-network.png"
          alt="network background"
          width={600}
          height={600}
          className="hidden md:block"
        />
      </div>
    </section>
  );
}

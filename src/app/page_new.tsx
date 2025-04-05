"use client";  // This marks the component as a client component

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu visibility
  const [isMobile, setIsMobile] = useState(false); // State to track the screen size

  // Set the screen size on mount and whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px as the breakpoint for mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="TRUVERON Logo"
            width={350}
            height={213}
            className="mr-4 max-w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setMenuOpen((prev) => !prev)} // Toggle state on each click
        >
          {/* Hamburger Icon */}
          <div className="w-8 h-8 flex flex-col justify-between items-center">
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </div>
        </button>

        {/* Navbar Menu */}
        <nav aria-label="Main Navigation">
          <ul
            className={`md:flex md:space-x-6 text-black font-medium transition-all duration-300 transform ${
              menuOpen ? "translate-y-0 opacity-100" : "opacity-0 md:opacity-100"
            } ${isMobile ? 'absolute' : 'relative'} w-full md:w-auto h-screen md:h-auto flex flex-col items-center justify-center md:flex-row`}
          >
            {["home", "features", "about", "contact"].map((section) => (
              <li key={section} className="mb-6 md:mb-0">
                <a
                  href={`#${section}`}
                  className="block px-6 py-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
            
            {/* Close Button for Mobile */}
            {menuOpen && isMobile && (
              <li className="absolute top-4 right-4">
                <button
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className="text-black text-2xl"
                >
                  &times;
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 sm:px-10 bg-gradient-to-b from-blue-950 to-black overflow-hidden"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-white max-w-3xl">
          Empowering Web3 with AI-driven Decentralized Reputation & Verification
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10">
          A new trust layer for DeFi, NFTs, DAOs, and beyond.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#features"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
          <button className="border border-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all">
            Join Waitlist
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all">
            Connect Wallet
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 sm:px-10 bg-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Why TRUVERON?</h2>
          <p className="text-gray-300 text-lg mb-12">
            TRUVERON bridges the Web3 trust gap with AI, blockchain analytics, and decentralized identity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
                title: "Decentralized",
                desc: "No central authority. Trust is computed on-chain and open.",
              },
              {
                title: "AI-Powered",
                desc: "Real-time insights from machine learning models.",
              },
              {
                title: "Secure & Transparent",
                desc: "Verifiable, tamper-resistant reputation scores.",
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/10 shadow-md hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-10 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">About TRUVERON</h2>
          <p className="text-gray-300 text-lg">
            TRUVERON is your decentralized reputation oracle. We provide trust metrics powered by blockchain data and AI so you can make confident decisions in Web3.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 sm:px-10 bg-gradient-to-b from-blue-800 to-black text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-gray-300 text-lg mb-8">
            For inquiries, collaborations, or support, reach out to us.
          </p>
          <a
            href="mailto:support@truveron.com"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 px-6 sm:px-10 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TRUVERON. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

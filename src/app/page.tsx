import Image from "next/image";

// pages/index.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-6 bg-white">
        <div className="flex items-center">
          {/* Logo */}
          <Image
            src="/logo.png" // Use the correct path here
            alt="TRUVERON Logo"
            width={350} // Adjusted logo size
            height={213} // Adjusted logo size
            className="mr-4"
          />
        </div>
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 text-black">
            <li>
              <a href="#home" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-10 bg-gradient-to-b from-blue-800 to-black">
       
      <h2 className="text-2xl sm:text-5xl font-bold mb-5 text-white">
  Empowering Web3 with AI-powered Decentralized Reputation and Verification Oracle.
</h2>

        <a
          href="#features"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
        >
          Learn More
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 sm:px-10 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Why TRUVERON?</h2>
          <p className="text-gray-400 text-lg mb-8">
            TRUVERON (TRV) bridges the trust gap in Web3 using AI, blockchain analytics, and identity authentication.
            We assign decentralized reputation scores to wallets, smart contracts, and dApps to power secure and informed decisions across DeFi, NFTs, DAOs, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto text-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-2">Decentralized</h3>
            <p className="text-gray-400 text-sm">No central authority. Trust is computed on-chain and open.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-400 text-sm">Advanced ML models analyze patterns and interactions for real-time scoring.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Transparent</h3>
            <p className="text-gray-400 text-sm">Reputation logic is verifiable and resistant to manipulation.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 sm:px-10 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">About TRUVERON</h2>
          <p className="text-gray-400 text-lg mb-8">
            TRUVERON is designed to provide real-time reputation scores to participants in the decentralized ecosystem. By analyzing blockchain interactions, AI, and identity mechanisms, TRUVERON empowers Web3 users to make data-driven, trustworthy decisions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 sm:px-10 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-gray-400 text-lg mb-8">
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

      {/* Footer Section */}
      <footer className="bg-black py-6 px-6 sm:px-10 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TRUVERON. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

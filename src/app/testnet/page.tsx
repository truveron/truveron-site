'use client'; // This ensures the component is client-side only

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit'; // optional
import Head from 'next/head';
import Image from 'next/image';
import { useAccount } from 'wagmi'; // You might be using this hook for wagmi functionality

export default function TestnetDashboard() {
  const { isConnected } = useAccount(); // Example: Check if the user is connected

  return (
    <>
      <Head>
        <title>Truveron Testnet Dashboard</title>
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Truveron Logo"
          width={300}
          height={200}
          className="object-contain"
        />

          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium hover:underline">
              Home
            </a>
            <a href="/docs" className="text-sm font-medium hover:underline">
              Docs
            </a>
            {/* Only show ConnectButton when not connected */}
            {!isConnected && <ConnectButton />}
          </div>
        </nav>

        {/* Main Dashboard */}
        <div className="max-w-4xl mx-auto py-10 px-6">
          <h1 className="text-2xl font-semibold mb-4">Wallet Reputation Checker</h1>

          {/* Wallet Input Form */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <label className="block text-sm font-medium">Enter Wallet Address:</label>
            <input
              type="text"
              placeholder="0x123...abc"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Run Reputation Scan
            </button>
          </div>

          {/* Results Box */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Reputation Score:</h2>
            <p className="text-gray-700">Score: 82 (Low Risk)</p>
            <p className="text-gray-500 text-sm">Last updated: 2 mins ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

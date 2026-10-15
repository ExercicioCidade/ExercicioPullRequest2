import React from 'react'
import Header from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-black uppercase tracking-wider text-center">
          Bem-vindo à Temporada
        </h1>
      </main>
    </div>
  );
}
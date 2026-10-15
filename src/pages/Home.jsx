
import React from 'react';
import { useEffect, useState } from "react"

export default function Home() {
    return (
      const bicicletas = [
  { id: 1, title: "Bicicleta Um", description: "First item description.", price: 1000.00 },
  { id: 2, title: "Bicicleta Dois", description: "Second item description.", price: 1500.00 },
  { id: 3, title: "Bicicleta Três", description: "Third item description.", price: 3000.00 },
  { id: 4, title: "Bicicleta Quatro", description: "Fourth item description.", price: 2500.00 },
  { id: 5, title: "Bicicleta Cinco", description: "Fifth item description.", price: 3500.00 },
  { id: 6, title: "Bicicleta Seis", description: "Sixth item description.", price: 2000.00 },
];
        <div className="min-h-[calc(100vh-5rem)] bg-[#070d1b] text-white flex flex-col justify-center items-center px-4 py-16">
            <div className="max-w-4xl text-center space-y-6">
                <span className="bg-[#e10600] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full transform -skew-x-12 inline-block shadow-md">
                    Performance Extrema
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">
                    O Futuro do <span className="text-[#e10600]">Ciclismo</span> de Competição
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Engenharia de precisão, aerodinâmica avançada e velocidade pura projetadas para dominar qualquer terreno.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#produtos"
                        className="bg-[#e10600] hover:bg-red-700 text-white font-extrabold uppercase px-8 py-3.5 rounded transition-all shadow-lg tracking-wider text-sm"
                    >
                        Ver Catálogo
                    </a>
                    <a
                        href="#historia"
                        className="border-2 border-white/20 hover:border-[#e10600] text-white font-extrabold uppercase px-8 py-3.5 rounded transition-all tracking-wider text-sm"
                    >
                        Nossa História
                    </a>
                </div>
            </div>
        </div>
      
    <div className="bg-[#070b1b]">
        <h4 className="p-4 text-lg font-bold text-white">Conheça nossos produtos!</h4>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bicicletas.map((bicicleta) => (
            <div
            key={bicicleta.id}
            className="rounded-xl border border-gray-200 bg-[#070b1b] p-5 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-white">
                    {bicicleta.title}
                </h3>

                <p className="text-sm text-gray-300">
                    {bicicleta.description}
                </p>

                <p className="text-xl text-gray-300 text-center mt-4 font-bold">
                    R${bicicleta.price}
                </p>
                <div className="mt-2 flex justify-center">
                    <button className="w-1/2 rounded-2xl bg-red-500 px-4 py-1 text-lg font-semibold text-white hover:bg-red-700">
                        Comprar
                    </button>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}
    );
}

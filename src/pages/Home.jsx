import React from 'react';

export default function Home() {
    return (
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
    );
}
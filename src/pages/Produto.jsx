import React from 'react';

export default function Produtos() {
    const bikes = [
        { name: 'RBR Apex Pro-X', type: 'Speed / Estrada', desc: 'Estrutura em fibra de carbono ultraleve desenvolvida em túnel de vento.' },
        { name: 'RBR Trail V8', type: 'Mountain Bike', desc: 'Suspensão de alto desempenho e absorção de impacto extrema para trilhas agressivas.' },
        { name: 'RBR Chrono Aero', type: 'Contra-Relógio / Triathlon', desc: 'Geometria aerodinâmica agressiva focada em cortar a resistência do ar.' }
    ];

    return (
        <div className="min-h-[calc(100vh-5rem)] bg-[#070d1b] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider">Nossos <span className="text-[#e10600]">Produtos</span></h2>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Máquinas de alta performance inspiradas nas pistas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bikes.map((bike, index) => (
                        <div key={index} className="bg-[#0b132b] border border-gray-800 rounded-lg p-6 flex flex-col justify-between hover:border-[#e10600] transition-all shadow-xl group">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider bg-[#e10600]/20 text-[#e10600] px-2.5 py-1 rounded">
                                    {bike.type}
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-wide mt-4 mb-2 group-hover:text-[#e10600] transition-colors">{bike.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{bike.desc}</p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Sob Encomenda</span>
                                <button className="bg-[#e10600] hover:bg-red-700 text-white text-xs font-bold uppercase px-4 py-2 rounded transition-all">
                                    Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
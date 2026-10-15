import React from 'react';

export default function Historia() {
    return (
        <div className="min-h-[calc(100vh-5rem)] bg-[#070d1b] text-white py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider">Nossa <span className="text-[#e10600]">História</span></h2>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">A paixão pela velocidade levada de duas rodas</p>
                </div>

                <div className="bg-[#0b132b] border-l-4 border-[#e10600] p-8 rounded-r-lg shadow-xl space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Da Pista para o Asfalto</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Nascida da mesma obsessão por aerodinâmica, leveza e engenharia de ponta que domina os circuitos de automobilismo, a <strong className="text-white">BIKES Racing</strong> surgiu para redefinir o que é possível sobre duas rodas. Cada componente é testado sob as condições mais extremas para garantir vitórias nas pistas e desempenho inigualável na estrada.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-[#0b132b] p-6 rounded border border-gray-800">
                        <span className="block text-4xl font-black text-[#e10600]">100%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block">Fibra de Carbono</span>
                    </div>
                    <div className="bg-[#0b132b] p-6 rounded border border-gray-800">
                        <span className="block text-4xl font-black text-[#e10600]">15+</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block">Títulos Conquistados</span>
                    </div>
                    <div className="bg-[#0b132b] p-6 rounded border border-gray-800">
                        <span className="block text-4xl font-black text-[#e10600]">0.0s</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block">Compromisso com o Limite</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
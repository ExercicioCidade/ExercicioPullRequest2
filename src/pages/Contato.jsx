import React, { useState } from 'react';

export default function Contato() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <div className="min-h-[calc(100vh-5rem)] bg-[#070d1b] text-white py-16 px-4">
            <div className="max-w-2xl mx-auto bg-[#0b132b] border border-gray-800 rounded-xl p-8 shadow-2xl">
                <div className="text-center mb-8 space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-wider">Fale <span className="text-[#e10600]">Conosco</span></h2>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Entre em contato com a nossa equipa técnica</p>
                </div>

                {enviado ? (
                    <div className="bg-emerald-950/50 border border-emerald-500/50 text-emerald-300 p-6 rounded text-center space-y-2">
                        <h3 className="font-bold uppercase tracking-wide text-lg">Mensagem Enviada!</h3>
                        <p className="text-sm text-gray-300">A nossa equipa entrará em contacto em breve.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Nome Completo</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-[#070d1b] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e10600] transition-colors text-sm"
                                placeholder="Ex: Max Verstappen"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">E-mail</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-[#070d1b] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e10600] transition-colors text-sm"
                                placeholder="exemplo@bikesracing.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Mensagem</label>
                            <textarea
                                rows="4"
                                required
                                className="w-full bg-[#070d1b] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e10600] transition-colors text-sm"
                                placeholder="Escreva a sua mensagem..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#e10600] hover:bg-red-700 text-white font-extrabold uppercase tracking-wider py-3.5 rounded transition-all shadow-lg text-sm"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
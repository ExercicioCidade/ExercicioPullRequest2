import React, { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#0b132b] text-white border-b-2 border-[#e10600] sticky top-0 z-50 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo / Identidade */}
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <div className="bg-[#e10600] text-white font-black text-xl px-3 py-1 rounded tracking-wider uppercase transform -skew-x-12 shadow-md">
                            BIKES
                        </div>
                        <span className="text-xl font-extrabold tracking-widest uppercase text-white">
                            Racing<span className="text-[#e10600]">.</span>
                        </span>
                    </div>

                    {/* Navegação Desktop */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider uppercase">
                        <a href="#home" className="hover:text-[#e10600] transition-colors">Início</a>
                        <a href="#team" className="hover:text-[#e10600] transition-colors">Equipa</a>
                        <a href="#calendar" className="hover:text-[#e10600] transition-colors">Calendário</a>
                        <a href="#news" className="hover:text-[#e10600] transition-colors">Notícias</a>
                    </nav>

                    {/* Botão de Ação (CTA) */}
                    <div className="hidden md:block">
                        <a
                            href="#join"
                            className="bg-[#e10600] hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded transition-all shadow-md uppercase tracking-wider text-xs transform hover:-translate-y-0.5"
                        >
                            Aceder ao Pit
                        </a>
                    </div>

                    {/* Botão de Menu Mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Menu"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile desdobrável */}
            {isOpen && (
                <div className="md:hidden bg-[#070d1b] border-t border-gray-800 px-4 pt-4 pb-6 space-y-3 font-semibold uppercase text-sm tracking-wider">
                    <a href="#home" className="block text-gray-300 hover:text-[#e10600] py-2">Início</a>
                    <a href="#team" className="block text-gray-300 hover:text-[#e10600] py-2">Produtos</a>
                    <a href="#calendar" className="block text-gray-300 hover:text-[#e10600] py-2">História</a>
                    <a href="#news" className="block text-gray-300 hover:text-[#e10600] py-2">Fale conosco</a>
                    <div className="pt-2">
                        <a
                            href="#join"
                            className="block text-center bg-[#e10600] hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded transition-all uppercase tracking-wider text-xs"
                        >
                            Aceder ao Pit
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
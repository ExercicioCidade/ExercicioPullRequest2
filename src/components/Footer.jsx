const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-b from-[#070d1b] to-[#ff251e] ">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

                <div className="sm:col-span-2 lg:col-span-1">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                        🚲 Bikes Racing
                    </h2>

                    <p className="mt-4 max-w-xs text-sm leading-6 opacity-80 text-white">
                        Bicicletas que fazem você viver grandes aventuras!
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 text-white">
                        <a
                            href="#"
                            className="rounded-full border border-current px-4 py-2 text-xs transition hover:-translate-y-0.5"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="rounded-full border border-current px-4 py-2 text-xs transition hover:-translate-y-0.5"
                        >
                            TikTok
                        </a>

                        <a
                            href="#"
                            className="rounded-full border border-current px-4 py-2 text-xs transition hover:-translate-y-0.5"
                        >
                            YouTube
                        </a>
                    </div>
                </div>

                <div className="text-white">
                    <h3 className="mb-5 text-sm font-semibold">
                        Ajuda
                    </h3>

                    <ul className="space-y-3 text-sm opacity-70">
                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                Perguntas frequentes
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                Trocas e devoluções
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                Prazo de entrega
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                Formas de pagamento
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-white">
                    <h3 className="mb-5 text-sm font-semibold">
                        Atendimento
                    </h3>

                    <ul className="space-y-3 text-sm opacity-70">
                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                WhatsApp: 📞 (11) 99999-9999
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:opacity-100">
                                E-mail:✉️ contato@planetabrinq.com
                            </a>
                        </li>

                        <li>
                            <span>
                                📅 Seg — Sex, 9h às 18h
                            </span>
                        </li>
                    </ul>
                </div>


            </div>

            <div className="border-t border-current mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-xs lg:flex-row lg:items-center lg:justify-between lg:px-8 text-white">

                <div className="flex flex-wrap gap-4 opacity-70 text-white">
                    <span>🔒 Compra segura</span>
                    <span>💳 Pix e cartões</span>
                </div>

                <div className="flex flex-wrap gap-4 opacity-70">
                    <a href="#" className="transition hover:opacity-100 text-white">
                        Política de Privacidade
                    </a>

                    <a href="#" className="transition hover:opacity-100 text-white">
                        Termos de Uso
                    </a>

                    <a href="#" className="transition hover:opacity-100 text-white">
                        Cookies
                    </a>
                </div>

                <p className="opacity-70 text-white">
                    &copy; 2026 Bikes Racing. Todos os direitos reservados.
                </p>

            </div>
        </footer>
    )
}

export default Footer
import { useEffect, useState } from "react"

const Home = () => {

    const bicicletas = [
  { id: 1, title: "Bicicleta Um", description: "First item description." },
  { id: 2, title: "Bicicleta Dois", description: "Second item description." },
  { id: 3, title: "Bicicleta Três", description: "Third item description." },
  { id: 4, title: "Bicicleta Quatro", description: "Fourth item description." },
  { id: 5, title: "Bicicleta Cinco", description: "Fifth item description." },
  { id: 6, title: "Bicicleta Seis", description: "Sixth item description." },
];

return (
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
                <div className="mt-4 flex justify-center">
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

export default Home
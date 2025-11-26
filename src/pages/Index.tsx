"use client";

import { MadeWithDyad } = "@/components/made-with-dyad";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  // Lunes 1ro de Diciembre a las 7:45 de la mañana (Córdoba, Argentina)
  // Córdoba (ART) es UTC-3. Así que 7:45 AM ART es 10:45 AM UTC.
  const targetDate = new Date('2025-12-01T10:45:00Z'); 

  return (
    <div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Efecto de iluminación de fondo como un punto de luz celeste que se mueve */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent filter blur-3xl opacity-70 animate-light-point-move"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-white text-3xl md:text-5xl font-cinzel-decorative mb-8 animate-fade-in">
          PREPÁRATE PARA EL EVENTO
        </h2>
        <CountdownTimer targetDate={targetDate} />
        <p className="text-white text-xl md:text-3xl mt-8 font-lora animate-celeste-wave">
          ¡La cuenta regresiva ha comenzado!
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
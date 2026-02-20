"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DESKTOP_ITEMS = [
  { id: 1, type: "logo", src: "/images/joelazul.jpeg", alt: "Logo Joel Lima", className: "col-span-2 row-span-2" },
  { id: 3, type: "office", src: "/images/escritorio1.jpg", alt: "Escritório Vista 1", className: "" },
  { id: 4, type: "office", src: "/images/escritorio2.jpg", alt: "Escritório Vista 2", className: "" },
  { id: 7, type: "office", src: "/images/escritorio3.jpg", alt: "Escritório Vista 3", className: "" },
  { id: 8, type: "office", src: "/images/escritorio4.jpg", alt: "Escritório Vista 4", className: "" },
];

const MOBILE_ITEMS = [
  { id: 1, type: "logo", src: "/images/joelazul.jpeg", alt: "Logo Joel Lima", className: "col-span-2" },
];

export default function PuzzleHero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[75vh] bg-gradient-to-b from-white to-neutral-50 flex items-start justify-center overflow-visible pt-3 md:pt-5 pb-20 px-6">

      {/* Background Decorative Element - Premium Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      {/* Desktop Grid - Premium Refinement */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-[0.05rem] max-w-7xl w-full aspect-[2/1] relative z-10">
        {DESKTOP_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
            className={cn("group relative flex items-center justify-center", item.className)}
          >
            {/* Glass Card Container - Clean Style with precision sizing */}
            <div className="relative w-[98%] h-[99%] rounded-[1rem] bg-white border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(4,120,87,0.15)] transition-all duration-500 overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-1000 ease-out",
                    item.type === "office" ? "group-hover:scale-110" : "group-hover:scale-[1.9]"
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Premium Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Grid - Premium Refinement */}
      <div className="grid md:hidden grid-cols-2 gap-[0.25rem] w-full aspect-square relative z-10">
        {MOBILE_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={cn("flex items-center justify-center", item.className)}
          >
            <div className="relative w-[98%] h-[99%] rounded-[1rem] bg-white border border-white/50 shadow-lg overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay Title - Ultra Premium Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-[-3rem] md:bottom-[-7.5rem] z-30 flex flex-col items-center"
      >
        <div className="bg-white/90 backdrop-blur-xl text-secondary px-12 md:px-20 py-8 md:py-10 shadow-[0_30px_60px_rgba(30,58,138,0.15)] text-center border-t-4 border-primary rounded-2xl border-b border-white/50">
          <h1 className="text-3xl md:text-6xl font-extralight tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none">
            Joel Lima <span className="font-bold text-secondary">Advocacia</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6 opacity-80" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-gray-500 uppercase flex items-center justify-center gap-4">
            Direito Previdenciário <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Direito Civil
          </p>
        </div>
      </motion.div>
    </section>
  );
}

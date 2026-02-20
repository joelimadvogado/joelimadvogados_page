"use client";

import PuzzleHero from "@/components/PuzzleHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { MessageCircle, Instagram, ArrowRight, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/siteData";
import InstagramHighlights from "@/components/InstagramHighlights";

export default function Home() {
  const { hero } = SITE_DATA.home;

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* 1. Hero Section */}
      <PuzzleHero />

      <Navbar />

      {/* 3. Highlights - Reel/Instagram */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex-grow relative overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-primary/10 rounded-lg text-primary"><Scale size={20} /></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{hero.tag}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extralight text-secondary leading-[1.1]">
                {hero.title[0]} <br />
                <span className="font-serif italic font-bold text-primary">{hero.title[1]}</span>
              </h2>
              <p className="text-lg text-gray-500 font-light max-w-md border-l-2 border-primary/30 pl-6">
                {hero.description}
              </p>
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] space-y-6 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={80} className="text-primary" />
              </div>

              <p className="text-xl font-medium text-gray-800 leading-snug relative z-10">
                {/* Manual tag splitting for highlighting */}
                {hero.highlight.split("direito imediato")[0]}
                <strong className='text-primary underline decoration-primary/30 underline-offset-4'>direito imediato</strong>
                {hero.highlight.split("direito imediato")[1]}
              </p>
              <p className="text-sm opacity-70 leading-relaxed">
                {hero.highlightSub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                href={SITE_DATA.contacts.whatsappLink}
                variant="primary"
              >
                <MessageCircle size={18} />
                Consultoria via WhatsApp
              </Button>
              <Button
                href={SITE_DATA.links.contact}
                variant="outline"
              >
                Ver Canais de Contato
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end scale-100 md:scale-95 origin-right"
          >
            {/* Phone Frame Mockup - Slightly larger but still safe */}
            <div className="relative aspect-[9/16] w-full max-w-[330px] bg-neutral-900 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(30,58,138,0.25)] border-[12px] border-white ring-1 ring-gray-200 group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-brand-white p-6 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <Instagram size={40} className="text-primary" />
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{SITE_DATA.contacts.instagram}</p>
                  <h3 className="text-2xl font-light">Entenda seus <br /> <span className="font-bold text-white">Direitos</span></h3>
                </div>

                <p className="text-xs opacity-60 max-w-[200px] leading-relaxed">
                  Assista aos nossos vídeos explicativos e fique por dentro das atualizações previdenciárias.
                </p>

                <Button
                  href={SITE_DATA.links.instagram}
                  variant="ghost"
                  className="text-white border border-white/20 hover:bg-white hover:text-black py-2 px-6"
                >
                  Ver no Instagram
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <FloatingBadge
              icon={<ShieldCheck size={20} />}
              title="Aposentadoria"
              status="Aprovada"
              className="top-20 -right-4 md:-right-10"
              color="green"
            />

            <FloatingBadge
              icon={<Scale size={20} />}
              title="Revisão"
              status="Deferida"
              className="bottom-32 -left-4 md:-left-10"
              color="blue"
            />
          </motion.div>
        </div>
      </section>

      <InstagramHighlights />
      <Footer />
    </main>
  );
}

function FloatingBadge({ icon, title, status, className, color }: { icon: React.ReactNode, title: string, status: string, className: string, color: 'green' | 'blue' }) {
  const colors = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600"
  };

  return (
    <motion.div
      animate={{ y: [0, color === 'green' ? -10 : 10, 0] }}
      transition={{ duration: color === 'green' ? 4 : 5, repeat: Infinity, ease: "easeInOut", delay: color === 'green' ? 0 : 1 }}
      className={`absolute bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 z-20 ${className}`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-800">{title}</p>
        <p className="text-[10px] text-gray-500">{status}</p>
      </div>
    </motion.div>
  );
}

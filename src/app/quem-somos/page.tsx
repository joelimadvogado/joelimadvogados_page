"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/siteData";

export default function QuemSomos() {
    const { office, links } = SITE_DATA;

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            <div className="flex-grow py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto space-y-16">
                    <header className="text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
                        >
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Nossa História</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-extralight text-secondary uppercase tracking-tighter">
                            {office.name.split(' ')[0]} {office.name.split(' ')[1]} <span className="font-bold">{office.name.split(' ')[2]}</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-primary mx-auto"></div>
                    </header>

                    <section className="space-y-8 text-gray-700 leading-relaxed text-lg">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                            O escritório nasceu do propósito de oferecer uma advocacia humanizada, técnica e estratégica.
                            Fundado por Joel Lima, profissional com sólida experiência em {office.specialties.join(' e ')},
                            nosso escritório se destaca pelo compromisso inabalável com a ética e os resultados de nossos clientes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-16">
                            <div className="group p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500">
                                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    ⚖️
                                </div>
                                <h3 className="font-bold text-secondary text-2xl mb-4 group-hover:text-primary transition-colors">Nossa Missão</h3>
                                <p className="text-sm opacity-80 leading-relaxed italic">"Defender os direitos dos cidadãos com agilidade e transparência, garantindo que a justiça seja acessível e compreensível para todos."</p>
                            </div>
                            <div className="group p-10 rounded-[2rem] bg-secondary text-white shadow-xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white">
                                    🎯
                                </div>
                                <h3 className="font-bold text-white text-2xl mb-4 group-hover:text-primary transition-colors">Nossa Visão</h3>
                                <p className="text-sm opacity-80 leading-relaxed">Ser referência regional em soluções jurídicas preventivas e contenciosas, pautando-se sempre pela inovação e excelência no atendimento personalizado.</p>
                            </div>
                        </div>

                        <div className="space-y-8 bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h2 className="text-3xl font-bold text-secondary flex items-center gap-4">
                                <span className="w-1.5 h-8 bg-primary block"></span>
                                Experiência Comprovada
                            </h2>
                            <p className="opacity-90">
                                Com anos de atuação dedicada, nossa equipe possui profundo conhecimento das nuances do sistema jurídico
                                brasileiro. No campo <strong className="text-primary tracking-wide">{office.specialties[1].split(' ')[1]}</strong>, auxiliamos centenas de segurados a conquistarem seus direitos de forma digna.
                            </p>
                            <p className="opacity-90">
                                No <strong className="text-primary tracking-wide">{office.specialties[0]}</strong>, atuamos com maestria em contratos complexos, responsabilidade civil e soluções extrajudiciais que visam economia e rapidez para nossos parceiros.
                            </p>
                        </div>
                    </section>

                    <div className="text-center pt-8">
                        <Button
                            href={links.contact}
                            variant="primary"
                            className="rounded-full px-12 py-5"
                        >
                            Falar com a Equipe
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

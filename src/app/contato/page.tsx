"use client";

import { Phone, Mail, Instagram, MessageCircle, Send, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/siteData";
import ContactForm from "@/components/form/ContactForm";

export default function Contato() {
    const { contacts, office } = SITE_DATA;

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            <div className="flex-grow py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-20 space-y-6">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] bg-primary/5 px-4 py-2 border border-primary/10 rounded-full">Disponibilidade Imediata</span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-secondary tracking-tight uppercase">
                            Canais de <span className="font-bold">Atendimento</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto italic">
                            "Estamos prontos para ouvir sua história e oferecer o rigor técnico que o seu caso exige."
                        </p>
                    </header>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Contact Hub Cards */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            <ContactCard
                                icon={<MessageCircle className="text-primary" size={32} />}
                                title="WhatsApp Jurídico"
                                value={contacts.phone}
                                description="Agilidade total para consultas imediatas e envio de evidências."
                                href={contacts.whatsappLink}
                                isPrimary
                            />
                            <ContactCard
                                icon={<Phone className="text-secondary" size={32} />}
                                title="Atendimento Fixo"
                                value={contacts.phone}
                                description="Suporte administrativo e institucional direto."
                                href={`tel:${contacts.phone.replace(/\D/g, '')}`}
                            />
                            <ContactCard
                                icon={<Mail className="text-blue-600" size={32} />}
                                title="Correio Eletrônico"
                                value={contacts.email}
                                description="Formalização de contratos e envio de documentação oficial."
                                href={`mailto:${contacts.email}`}
                            />
                            <ContactCard
                                icon={<Instagram className="text-pink-600" size={32} />}
                                title="Instagram"
                                value={contacts.instagram}
                                description="Acompanhe novidades jurídicas e informativos diários."
                                href={SITE_DATA.links.instagram}
                            />
                        </div>

                        {/* Sidebar with Glassmorphic design */}
                        <div className="sticky top-24 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] space-y-12">
                            <div className="space-y-6">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-secondary">Sede Física</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                        {office.address.street}, {office.address.complement}<br />
                                        Centro, {office.address.city} - {office.address.state}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Clock size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-secondary">Plantão Jurídico</h3>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Segunda a Sexta: {office.openingHours.weekdays}<br />
                                        {office.openingHours.weekends}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="lg:col-span-3 mt-12">
                            <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-primary block"></span>
                                Envie uma Mensagem Direta
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function ContactCard({ icon, title, value, description, isPrimary, href }: any) {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px] ${isPrimary ? 'ring-2 ring-primary/20' : ''}`}
        >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={24} className="text-gray-300" />
            </div>

            <div className="space-y-6">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-secondary mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{description}</p>
                </div>
            </div>

            <p className="text-lg font-bold text-gray-900 border-t border-gray-50 pt-6 mt-6">{value}</p>
        </a>
    );
}

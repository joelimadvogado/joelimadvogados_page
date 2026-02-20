import Link from "next/link";
import { Phone, Mail, Instagram, MessageCircle, Send, Globe } from "lucide-react";
import { SITE_DATA } from "@/content/siteData";

export default function Footer() {
    const { office, contacts, links } = SITE_DATA;

    return (
        <footer className="bg-secondary text-brand-white pt-20 pb-12 px-6 border-t-[12px] border-primary relative overflow-hidden">
            {/* Subtle decorative pattern or glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 relative z-10">
                <div className="space-y-8 lg:max-w-sm">
                    <div className="space-y-4">
                        <h3 className="font-bold text-3xl tracking-tight text-white uppercase">
                            {office.name.split(' ')[0]} {office.name.split(' ')[1]} <span className="text-primary">{office.name.split(' ')[2]}</span>
                        </h3>
                        <div className="w-12 h-1 bg-primary"></div>
                    </div>
                    <p className="text-white/60 text-base leading-relaxed">
                        {office.description}
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<Instagram size={18} />} href={links.instagram} label="Instagram" />
                        <SocialIcon icon={<Send size={18} />} href="#" label="Telegram" />
                        <SocialIcon icon={<MessageCircle size={18} />} href={contacts.whatsappLink} label="WhatsApp" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Contatos Oficiais</h4>
                        <div className="space-y-6">
                            <ContactItem
                                icon={<Phone size={18} className="text-primary" />}
                                label="Telefone Principal"
                                value={contacts.phone}
                                href={`tel:${contacts.phone.replace(/\D/g, '')}`}
                            />
                            <ContactItem
                                icon={<MessageCircle size={18} className="text-primary" />}
                                label="WhatsApp Jurídico"
                                value={contacts.phone}
                                href={contacts.whatsappLink}
                            />
                            <ContactItem
                                icon={<Mail size={18} className="text-primary" />}
                                label="E-mail Institucional"
                                value={contacts.email}
                                href={`mailto:${contacts.email}`}
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Links Rápidos</h4>
                        <ul className="space-y-4">
                            <FooterLink href={links.home} label="Início" />
                            <FooterLink href={links.about} label="Sobre o Escritório" />
                            <FooterLink href={links.contact} label="Canais de Atendimento" />
                            <FooterLink href={links.services} label="Áreas de Atuação" />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] font-medium">
                <span>© {new Date().getFullYear()} {office.fullName}. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                    <span className="hover:text-primary transition-colors cursor-pointer text-gray-400">Termos de Uso</span>
                    <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors text-gray-400">Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group cursor-pointer"
        >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all border border-white/10">
                {icon}
            </div>
            <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</span>
                <span className="block text-sm text-white/80 group-hover:text-primary transition-colors">{value}</span>
            </div>
        </a>
    );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link href={href} className="text-sm text-white/50 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                {label}
            </Link>
        </li>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE_DATA } from "@/content/siteData";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const { links } = SITE_DATA;
    const [isStuck, setIsStuck] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = pathname === "/" ? 600 : 20;
            setIsStuck(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const NAV_LINKS = [
        { name: "Início", href: links.home },
        { name: "Quem Somos", href: links.about },
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: links.contact },
    ];

    // Determinar o spacing dinâmico
    // Desktop: 0.75rem (não fixo) -> 0.25rem (fixo)
    // Mobile: 0.45rem
    const currentSpacing = isStuck ? "0.25rem" : "1rem";

    return (
        <>
            {/* 1. Desktop Navbar (Hidden on Mobile) */}
            <nav
                style={{ "--spacing": currentSpacing } as React.CSSProperties}
                className={cn(
                    "w-full sticky top-0 z-50 transition-all duration-500 hidden md:block",
                    isStuck
                        ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
                        : "bg-transparent border-b border-transparent py-10"
                )}
            >
                <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                                pathname === link.href
                                    ? "text-secondary font-bold"
                                    : "text-gray-500"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* 2. Mobile Floating Menu Button (Hidden on Desktop) */}
            <div className="md:hidden">
                {/* Mobile Top Bar (Transparent or minimal) */}
                {!isStuck && (
                    <div className="w-full h-16 pointer-events-none" />
                )}

                {/* Floating Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="fixed top-8 right-8 z-[60] w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 border border-white/10"
                    aria-label="Abrir Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Fullscreen Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[55] bg-secondary flex flex-col items-center justify-center p-8 text-center"
                        >
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

                            <div className="flex flex-col gap-10">
                                {NAV_LINKS.map((link, idx) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "text-2xl uppercase tracking-[0.2em] transition-colors",
                                                pathname === link.href ? "text-primary font-bold" : "text-white/70"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-20 pt-10 border-t border-white/10 w-full"
                            >
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Joel Lima Advocacia</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

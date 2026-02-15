"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE_DATA } from "@/content/siteData";

export default function Navbar() {
    const pathname = usePathname();
    const { links } = SITE_DATA;

    const NAV_LINKS = [
        { name: "Início", href: links.home },
        { name: "Quem Somos", href: links.about },
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: links.contact },
    ];

    return (
        <nav className="w-full bg-brand-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex justify-center h-16 items-center gap-8">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                            pathname === link.href ? "text-secondary font-bold" : "text-gray-500"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

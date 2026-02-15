"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
    href?: string;
}

export default function Button({
    children,
    variant = "primary",
    className,
    href,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-[10px] transition-all rounded-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white shadow-[0_10px_25px_rgba(4,120,87,0.25)] hover:shadow-[0_20px_40px_rgba(4,120,87,0.35)] hover:bg-emerald-800 focus:ring-primary",
        secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-opacity-90 focus:ring-secondary",
        outline: "bg-white border border-gray-200 text-secondary hover:bg-gray-50 hover:border-secondary focus:ring-gray-200",
        ghost: "bg-transparent text-secondary hover:bg-gray-50 focus:ring-gray-100",
    };

    const finalClassName = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <a href={href} className={finalClassName} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {children}
            </a>
        );
    }

    return (
        <button className={finalClassName} {...props}>
            {children}
        </button>
    );
}

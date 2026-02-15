"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/content/blogData";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function Blog() {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            <div className="flex-grow py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-16">
                    <header className="text-center space-y-6">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] bg-primary/5 px-4 py-2 border border-primary/10 rounded-full">Atualizações Jurídicas</span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-secondary tracking-tight uppercase">
                            Blog & <span className="font-bold">Artigos</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto italic">
                            "Informação é o primeiro passo para garantir seus direitos. Acompanhe nossas análises."
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for image - in real app would be Next Image */}
                                    <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-secondary/20 font-bold text-4xl">
                                        ⚖️
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow space-y-4">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-primary font-bold text-sm tracking-wide group-hover:underline decoration-primary/30 underline-offset-4">
                                        Ler Artigo Completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

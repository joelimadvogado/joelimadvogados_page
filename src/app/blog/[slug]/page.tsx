import { BLOG_POSTS } from "@/content/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

// Correctly typing params as a Promise for Next.js 15+
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <article className="flex-grow pb-24">
                {/* Header */}
                <div className="bg-neutral-50 py-20 px-6 border-b border-gray-100">
                    <div className="max-w-3xl mx-auto space-y-8 text-center">
                        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-4">
                            <ArrowLeft size={16} className="mr-2" /> Voltar para o Blog
                        </Link>

                        <div className="flex items-center justify-center gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] uppercase tracking-widest font-bold">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime} leitura</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <div
                        className="prose prose-lg prose-headings:font-bold prose-headings:text-secondary prose-p:text-gray-600 prose-a:text-primary prose-strong:text-secondary max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer do Artigo */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Compartilhe:</p>
                        <div className="flex gap-4">
                            <ShareButton icon={<Facebook size={18} />} label="Facebook" />
                            <ShareButton icon={<Linkedin size={18} />} label="LinkedIn" />
                            <ShareButton icon={<Twitter size={18} />} label="Twitter" />
                            <ShareButton icon={<Share2 size={18} />} label="Copiar Link" />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-secondary rounded-[2.5rem] p-12 text-center space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-white relative z-10">Precisa de orientação sobre este tema?</h3>
                        <p className="text-white/70 max-w-xl mx-auto relative z-10">
                            Nossa equipe de especialistas está pronta para analisar o seu caso com a atenção que ele merece.
                        </p>
                        <div className="relative z-10 pt-4">
                            <Button href="/contato" variant="primary">Agendar Consulta</Button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

function ShareButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <button
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
            title={label}
            aria-label={label}
        >
            {icon}
        </button>
    )
}

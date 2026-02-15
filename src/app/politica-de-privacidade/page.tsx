"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/content/siteData";

export default function PoliticaPrivacidade() {
    const { office } = SITE_DATA;

    return (
        <main className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <article className="flex-grow py-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:text-secondary prose-p:text-gray-600">
                    <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
                    <p className="text-sm text-gray-400 mb-12 italic">Última atualização: 15 de fevereiro de 2026</p>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">1. Introdução</h2>
                        <p>
                            O escritório <strong>{office.fullName}</strong> valoriza a privacidade de seus usuários e clientes. Esta política descreve como coletamos e utilizamos suas informações quando você utiliza nosso site.
                        </p>

                        <h2 className="text-2xl font-bold">2. Coleta de Dados</h2>
                        <p>
                            Coletamos informações que você fornece voluntariamente através de nossos formulários de contato e links de WhatsApp. Isso pode incluir seu nome, e-mail e número de telefone.
                        </p>

                        <h2 className="text-2xl font-bold">3. Finalidade</h2>
                        <p>
                            Seus dados são utilizados exclusivamente para:
                        </p>
                        <ul>
                            <li>Responder às suas solicitações de consulta jurídica.</li>
                            <li>Enviar informações relevantes sobre seu caso.</li>
                            <li>Melhorar sua experiência em nosso site.</li>
                        </ul>

                        <h2 className="text-2xl font-bold">4. Segurança</h2>
                        <p>
                            Implementamos medidas técnicas de segurança para proteger seus dados contra acessos não autorizados. Seus dados nunca serão vendidos para terceiros.
                        </p>

                        <h2 className="text-2xl font-bold">5. Seus Direitos</h2>
                        <p>
                            De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através do e-mail <strong>{SITE_DATA.contacts.email}</strong>.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}

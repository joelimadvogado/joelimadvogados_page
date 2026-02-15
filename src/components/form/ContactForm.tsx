"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail, type FormState } from "@/app/actions/sendEmail";
import Button from "@/components/ui/Button";
import { Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialState: FormState = {
    success: false,
    message: "",
    errors: {},
};

export default function ContactForm() {
    const [state, formAction] = useActionState(sendEmail, initialState);

    return (
        <form action={formAction} className="space-y-6 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider block">
                    Nome Completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ex: João da Silva"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                />
                <ValidationError error={state?.errors?.name} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider block">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                    />
                    <ValidationError error={state?.errors?.email} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider block">
                        Telefone / WhatsApp
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(XX) 99999-9999"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                    />
                    <ValidationError error={state?.errors?.phone} />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider block">
                    Mensagem
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente sua dúvida..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                />
                <ValidationError error={state?.errors?.message} />
            </div>

            <div className="pt-4">
                <SubmitButton />
            </div>

            <AnimatePresence>
                {state?.message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-xl text-center text-sm font-medium ${state.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                    >
                        {state.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="primary"
            disabled={pending}
            className="w-full py-4 text-sm"
        >
            {pending ? (
                <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Enviando...
                </>
            ) : (
                <>
                    Enviar Mensagem <Send size={18} />
                </>
            )}
        </Button>
    );
}

function ValidationError({ error }: { error?: string[] }) {
    if (!error || error.length === 0) return null;
    return <p className="text-xs text-red-500 font-medium ml-1">{error[0]}</p>;
}

"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().min(10, { message: "Telefone inválido" }), // Simples validação de comprimento
    message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

export type FormState = {
    success?: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
};

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    // Simulação de envio de e-mail (aqui entraria Resend/Nodemailer)
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("E-mail enviado com sucesso:", result.data);

    return {
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    };
}

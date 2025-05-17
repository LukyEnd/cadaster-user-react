import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .max(50, { message: 'O nome não pode ter mais de 50 caracteres' })
    .regex(/^[a-zA-ZÀ-ÿ\s]*$/, { message: 'O nome pode conter apenas letras e espaços' }),
  
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório' })
    .email({ message: 'Digite um endereço de e-mail válido' }),
  
    phone: z
      .string()
      .min(1, { message: 'O telefone é obrigatório' })
      .refine((val) =>
        /^(\(\d{2}\)\s?)?(9\d{4}|\d{4})-?\d{4}$/.test(val),
        { message: 'Digite um número de telefone válido' }
      ),
  
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
    .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
    .regex(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
  
  confirmPassword: z.string().min(1, { message: 'Por favor, confirme sua senha' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ['confirmPassword'],
});
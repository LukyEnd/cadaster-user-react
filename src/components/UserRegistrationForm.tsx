import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from './FormInput';
import PhoneInput from './PhoneInput';
import PasswordInput from './PasswordInput';
import SuccessMessage from './SuccessMessage';
import { userSchema } from '../utils/validation';

type FormData = z.infer<typeof userSchema>;

const UserRegistrationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormData) => {
    // Simula chamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Formulário enviado:', data);
    reset();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SuccessMessage onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl"
    >
      <FormInput
        label="Nome Completo"
        type="text"
        placeholder="Lucas Sanches"
        error={errors.name?.message}
        {...register('name')}
      />
      
      <FormInput
        label="Endereço de E-mail"
        type="email"
        placeholder="lucas@exemplo.com"
        error={errors.email?.message}
        {...register('email')}
      />
      
      <PhoneInput
        label="Número de Telefone"
        error={errors.phone?.message}
        {...register('phone')}
      />
      
      <PasswordInput
        label="Senha"
        placeholder="Crie uma senha"
        error={errors.password?.message}
        showRequirements
        {...register('password')}
      />
      
      <PasswordInput
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Criando Conta...
          </>
        ) : 'Criar Conta'}
      </button>
    </form>
  );
};

export default UserRegistrationForm
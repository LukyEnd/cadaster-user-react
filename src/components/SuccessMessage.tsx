import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fadeScale">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Cadastro Realizado!</h2>
      <p className="text-gray-600 mb-6">
        Sua conta foi criada com sucesso. Você já pode fazer login com suas credenciais.
      </p>
      
      <button
        onClick={onReset}
        className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Cadastrar Outra Conta
      </button>
    </div>
  );
};

export default SuccessMessage;
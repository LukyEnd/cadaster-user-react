import UserRegistrationForm from './components/UserRegistrationForm';
import { UserPlus } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mb-4 shadow-lg">
            <UserPlus size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Criar sua Conta</h1>
          <p className="text-gray-600">Preencha os dados abaixo para começar</p>
        </div>
        
        <UserRegistrationForm />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Ao se cadastrar, você concorda com nossos <a href="#" className="text-indigo-600 hover:underline">Termos de Serviço</a> e <a href="#" className="text-indigo-600 hover:underline">Política de Privacidade</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
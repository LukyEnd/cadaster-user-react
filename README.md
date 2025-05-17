# Formulário de Cadastro de Usuário

Um formulário de cadastro de usuário moderno e responsivo construído com React, TypeScript e Tailwind CSS. O projeto inclui validação de campos em tempo real, máscaras de input e feedback visual para o usuário.

<img width="1260" alt="image" src="https://github.com/user-attachments/assets/003994a9-eb45-4a5b-9760-cf739ed74389" />


## Funcionalidades

- ✨ Interface moderna e responsiva
- 📱 Suporte para dispositivos móveis
- ✅ Validação em tempo real dos campos
- 🎭 Máscara para telefone
- 🔒 Validação de força de senha
- 👁️ Visualização de senha
- 🎯 Feedback visual para erros
- 💫 Animações suaves
- 🌈 Design com gradientes e sombras

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod (validação)
- React Input Mask
- Lucide React (ícones)

## Requisitos do Sistema

- Node.js 18.0 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/LukyEnd/cadaster-user-react.git
cd formulario-cadastro
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── components/         # Componentes React
  │   ├── FormInput.tsx      # Input base
  │   ├── PasswordInput.tsx  # Input de senha com requisitos
  │   ├── PhoneInput.tsx     # Input com máscara de telefone
  │   └── SuccessMessage.tsx # Mensagem de sucesso
  ├── utils/             # Utilitários
  │   └── validation.ts  # Esquemas de validação Zod
  ├── App.tsx           # Componente principal
  └── main.tsx         # Ponto de entrada
```

## Validações

O formulário inclui as seguintes validações:

- **Nome**: 
  - Mínimo de 3 caracteres
  - Máximo de 50 caracteres
  - Apenas letras e espaços

- **E-mail**: 
  - Formato válido de e-mail
  - Campo obrigatório

- **Telefone**: 
  - Formato brasileiro: (99) 99999-9999
  - Campo obrigatório

- **Senha**: 
  - Mínimo de 8 caracteres
  - Pelo menos uma letra maiúscula
  - Pelo menos uma letra minúscula
  - Pelo menos um número

## Personalização

O projeto utiliza Tailwind CSS para estilização, permitindo fácil personalização através do arquivo `tailwind.config.js`.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

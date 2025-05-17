import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showRequirements?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, showRequirements, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const value = props.value as string || '';
    
    const hasMinLength = value?.length >= 8;
    const hasUpperCase = /[A-Z]/.test(value || '');
    const hasLowerCase = /[a-z]/.test(value || '');
    const hasNumber = /[0-9]/.test(value || '');
    
    return (
      <div className="mb-6">
        <label 
          htmlFor={props.id || props.name} 
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-800 transition-colors duration-200 ease-in-out pr-12
              ${error 
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                : 'border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              }`}
            {...props}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} className="text-gray-500" />
            ) : (
              <Eye size={20} className="text-gray-500" />
            )}
          </button>
        </div>
        
        {showRequirements && (
          <div className="mt-2 space-y-1 text-sm">
            <RequirementItem met={hasMinLength}>Mínimo de 8 caracteres</RequirementItem>
            <RequirementItem met={hasUpperCase}>Pelo menos uma letra maiúscula</RequirementItem>
            <RequirementItem met={hasLowerCase}>Pelo menos uma letra minúscula</RequirementItem>
            <RequirementItem met={hasNumber}>Pelo menos um número</RequirementItem>
          </div>
        )}
        
        {error && (
          <p className="mt-2 text-sm text-red-600 animate-fadeIn">
            {error}
          </p>
        )}
      </div>
    );
  }
);

const RequirementItem: React.FC<{met: boolean; children: React.ReactNode}> = ({ met, children }) => (
  <div className="flex items-center transition-opacity duration-300">
    {met ? (
      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
    ) : (
      <X size={16} className="text-gray-400 mr-2 flex-shrink-0" />
    )}
    <span className={met ? "text-green-700" : "text-gray-500"}>
      {children}
    </span>
  </div>
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
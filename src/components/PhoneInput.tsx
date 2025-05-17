import { forwardRef, InputHTMLAttributes } from 'react';
import ReactInputMask from 'react-input-mask';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-6">
        <label
          htmlFor={props.id || props.name}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          <ReactInputMask
            mask="(99) 99999-9999"
            alwaysShowMask={false}
            maskPlaceholder={null}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-800 transition-colors duration-200 ease-in-out
              ${error 
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                : 'border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              }`}
            ref={ref} // <-- AQUI O AJUSTE
            {...props}
            placeholder="(54) 99242-7141"
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 animate-fadeIn">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-gray-400',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-xs h-8 px-3',
    md: 'text-sm h-10 px-4',
    lg: 'text-base h-12 px-6',
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Icon spacing
  const iconSpacing = icon ? 'space-x-2' : '';
  
  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyles}
        ${iconSpacing}
        ${className || ''}
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
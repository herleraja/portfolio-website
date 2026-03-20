import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 ease-in-out outline-none inline-flex items-center justify-center focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#a855f7] to-[#34d399] hover:from-[#ec4899] hover:to-[#34d399] text-white border-none shadow-lg hover:shadow-glow',
    secondary:
      'bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30 hover:border-white/50',
    outline:
      'bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </motion.button>
  );
}

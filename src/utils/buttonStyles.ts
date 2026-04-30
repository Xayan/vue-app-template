export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl',
  secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
  danger: 'bg-red-700 text-white hover:bg-red-800 shadow-lg hover:shadow-xl',
  ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-900',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const baseClasses =
  'font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'

export function getButtonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md'
): string {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`
}

// tailwind.config.js (Versão Definitiva)

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // NÃO coloque cores aqui. Deixe o Tailwind usar suas cores padrão.
    // Nós vamos ADICIONAR as nossas cores dentro do 'extend'.
    extend: {
      // É AQUI que definimos nossas customizações
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#ccdff9',
          200: '#99c0f2',
          300: '#66a0ec',
          400: '#3381e5',
          500: '#004080', // Sua cor base
          600: '#003366',
          700: '#00264d',
          800: '#001a33',
          900: '#000d1a',
          950: '#00070d',
        },
        secondary: {
          50: '#e6f2ff',
          100: '#cce6ff',
          200: '#99ceff',
          300: '#66b7ff',
          400: '#33a0ff',
          500: '#0080ff', // Sua cor base
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
          950: '#000d1a',
        },
        accent: {
          50: '#ecf6f9',
          100: '#d9eef2',
          200: '#b3dde6',
          300: '#8ccbd9',
          400: '#66bace',
          500: '#40a8c4', // Sua cor base
          600: '#33869d',
          700: '#266576',
          800: '#1a434e',
          900: '#0d2227',
          950: '#071114',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'food-pattern':
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjNhZDgwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')",
      },
    },
  },
  plugins: [
    forms,
    typography
  ],
};
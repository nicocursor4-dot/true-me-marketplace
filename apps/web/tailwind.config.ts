import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TRUE ME color palette (from maquettes)
        trueme: {
          cream: '#F5F2E8',     // Fond principal des maquettes
          black: '#1C1C1E',     // Texte principal
          gold: '#B8860B',      // Accents dorés, VIP, boutons
          white: '#FFFFFF',     // Contraste
          secondary: '#6B6B6B', // Texte secondaire
        },
        // Level colors
        level: {
          bronze: '#CD7F32',    // Louis Vuitton
          silver: '#C0C0C0',    // Chanel, Burberry
          gold: '#FFD700',      // Dior, Hermès, Balenciaga
          platinum: '#E5E4E2',  // Niveau supérieur
          diamond: '#B9F2FF',   // Niveau elite
        },
        // Glassmorphisme colors
        glass: {
          cream: 'rgba(245, 242, 232, 0.8)',
          white: 'rgba(255, 255, 255, 0.6)',
          gold: 'rgba(184, 134, 11, 0.1)',
          border: 'rgba(255, 255, 255, 0.3)',
          shadow: 'rgba(184, 134, 11, 0.15)',
        },
        // Override default colors
        background: '#F5F2E8',
        foreground: '#1C1C1E',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'strong': '25px',
      },
      boxShadow: {
        'glass-light': '0 2px 8px rgba(184, 134, 11, 0.08)',
        'glass-medium': '0 4px 16px rgba(184, 134, 11, 0.12)',
        'glass-strong': '0 8px 32px rgba(184, 134, 11, 0.16)',
        'glass-glow': '0 0 20px rgba(184, 134, 11, 0.2)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

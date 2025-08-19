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
        // TRUE ME color palette
        trueme: {
          white: '#fdfbef',     // Blanc cassé - fond principal
          black: '#1C1C1E',     // Noir carbone - texte
          gold: '#b58634',      // Doré subtil - éléments VIP
        },
        // Override default colors
        background: '#fdfbef',
        foreground: '#1C1C1E',
      },
    },
  },
  plugins: [],
}
export default config

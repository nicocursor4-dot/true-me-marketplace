import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				trueme: {
					cream: '#F9F8F4', // Slightly warmer/richer cream
					black: '#121212', // Softer, deeper black
					gold: '#D4AF37', // Classic metallic gold
					'gold-light': '#F4E4BC',
					'gold-dark': '#996515',
					white: '#FFFFFF',
					secondary: '#8E8E93', // Apple-like secondary text
					'dark-gray': '#1D1D1F', // Apple-like dark gray
				},
				// Keeping existing vars for compatibility but overriding where needed
				'gray-1000': 'var(--gray-1000)',
				'gray-alpha-200': 'rgba(0, 0, 0, 0.04)',
				'gray-alpha-400': 'var(--gray-alpha-400)',
				'background-100': 'var(--background-100)',
				'background-200': 'var(--background-200)',
				'background-200-alpha-800': 'var(--background-200-alpha-800)',
				'accents-1': 'var(--accents-1)',
				'accents-2': 'var(--accents-2)',
				'overlay': 'var(--ds-overlay)',
				level: {
					bronze: '#CD7F32',
					silver: '#C0C0C0',
					gold: '#D4AF37',
					platinum: '#E5E4E2',
					diamond: '#B9F2FF'
				},
				glass: {
					cream: 'rgba(249, 248, 244, 0.7)',
					white: 'rgba(255, 255, 255, 0.7)',
					gold: 'rgba(212, 175, 55, 0.1)',
					border: 'rgba(255, 255, 255, 0.2)',
					shadow: 'rgba(0, 0, 0, 0.05)'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '12px',
				glass: '20px',
				strong: '40px'
			},
			boxShadow: {
				'glass-light': '0 4px 24px -1px rgba(0, 0, 0, 0.05)',
				'glass-medium': '0 8px 32px -4px rgba(0, 0, 0, 0.1)',
				'glass-strong': '0 16px 48px -8px rgba(0, 0, 0, 0.15)',
				'glass-glow': '0 0 40px rgba(212, 175, 55, 0.15)',
				'luxury': '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
				'luxury-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
				'border': 'var(--ds-shadow-border)',
				'border-small': 'var(--ds-shadow-border-small)',
				'border-medium': 'var(--ds-shadow-border-medium)',
				'border-large': 'var(--ds-shadow-border-large)',
				'tooltip': 'var(--ds-shadow-tooltip)',
				'menu': 'var(--ds-shadow-menu)',
				'modal': 'var(--ds-shadow-modal)',
				'fullscreen': 'var(--ds-shadow-fullscreen)',
				'focus-ring': '0 0 0 2px rgba(212, 175, 55, 0.5)'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
				serif: ['var(--font-cinzel)', 'Futura', 'Jost', 'sans-serif'], // Mapped to Jost via layout.tsx
			},
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '0em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em',
				'luxury': '0.2em',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'scale-slow': 'scaleSlow 10s linear infinite alternate',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				scaleSlow: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' },
				}
			}
		}
	},
	plugins: [require('daisyui'), require("tailwindcss-animate")],
}
export default config

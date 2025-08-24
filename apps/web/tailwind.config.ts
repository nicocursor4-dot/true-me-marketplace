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
  				cream: '#fefef6',
  				black: '#1C1C1E',
  				gold: '#b2813c',
  				white: '#FFFFFF',
  				secondary: '#6B6B6B'
  			},
  			level: {
  				bronze: '#CD7F32',
  				silver: '#C0C0C0',
  				gold: '#b2813c',
  				platinum: '#E5E4E2',
  				diamond: '#B9F2FF'
  			},
  			glass: {
  				cream: 'rgba(254, 254, 246, 0.8)',
  				white: 'rgba(255, 255, 255, 0.6)',
  				gold: 'rgba(178, 129, 60, 0.1)',
  				border: 'rgba(255, 255, 255, 0.3)',
  				shadow: 'rgba(178, 129, 60, 0.15)'
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
  			glass: '20px',
  			strong: '25px'
  		},
  		boxShadow: {
  			'glass-light': '0 2px 8px rgba(178, 129, 60, 0.08)',
  			'glass-medium': '0 4px 16px rgba(178, 129, 60, 0.12)',
  			'glass-strong': '0 8px 32px rgba(178, 129, 60, 0.16)',
  			'glass-glow': '0 0 20px rgba(178, 129, 60, 0.2)'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'system-ui',
  				'-apple-system',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('daisyui'), require("tailwindcss-animate")],
}
export default config

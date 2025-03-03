
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				kitable: {
					50: '#f9f7f7',
					100: '#e5e3e1',
					200: '#d1ccc9',
					300: '#b3aea9',
					400: '#938d87',
					500: '#7b746d',
					600: '#665f59',
					700: '#504a45',
					800: '#3a3633',
					900: '#252321',
				},
				accent: {
					DEFAULT: '#0ea5e9',
					foreground: '#ffffff',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				'slide-in-from-left': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' },
				},
				'slide-in-from-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' },
				},
				'slide-in-from-bottom': {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' },
				},
				'blur-in': {
					from: { 
						opacity: '0',
						filter: 'blur(8px)'
					},
					to: { 
						opacity: '1',
						filter: 'blur(0)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
				'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
				'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
				'blur-in': 'blur-in 0.4s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			},
			transitionTimingFunction: {
				'soft-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
			transitionDuration: {
				'400': '400ms',
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

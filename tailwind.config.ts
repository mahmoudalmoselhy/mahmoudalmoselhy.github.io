
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
				'advercase': ['Advercase', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
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
				},
				// M3 Surface containers
				surface: {
					container: 'hsl(var(--surface-container))',
					'container-low': 'hsl(var(--surface-container-low))',
					'container-high': 'hsl(var(--surface-container-high))',
					'container-highest': 'hsl(var(--surface-container-highest))',
				},
				// Tertiary color
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))'
				},
				// Status colors
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				}
			},
			borderRadius: {
				'4xl': '2rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'infinite-scroll': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(calc(-50% - 0.5rem))'
					}
				},
				'step-scroll': {
					'0%': {
						transform: 'translateX(0)'
					},
					'16.66%': {
						transform: 'translateX(calc(-1 * (8rem + 1rem)))'
					},
					'33.32%': {
						transform: 'translateX(calc(-2 * (8rem + 1rem)))'
					},
					'49.98%': {
						transform: 'translateX(calc(-3 * (8rem + 1rem)))'
					},
					'66.64%': {
						transform: 'translateX(calc(-4 * (8rem + 1rem)))'
					},
					'83.3%': {
						transform: 'translateX(calc(-5 * (8rem + 1rem)))'
					},
					'100%': {
						transform: 'translateX(calc(-6 * (8rem + 1rem)))'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(16px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'infinite-scroll': 'infinite-scroll 30s linear infinite',
				'step-scroll': 'step-scroll 18s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.2, 0, 0, 1) forwards',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.2, 0, 0, 1) forwards',
			},
			transitionTimingFunction: {
				'm3-standard': 'cubic-bezier(0.2, 0, 0, 1)',
				'm3-emphasized': 'cubic-bezier(0.2, 0, 0, 1)',
				'm3-decelerate': 'cubic-bezier(0, 0, 0, 1)',
				'm3-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
			},
			boxShadow: {
				'm3-1': '0 1px 2px hsl(var(--foreground) / 0.05), 0 1px 3px hsl(var(--foreground) / 0.08)',
				'm3-2': '0 2px 4px hsl(var(--foreground) / 0.05), 0 4px 8px hsl(var(--foreground) / 0.08)',
				'm3-3': '0 4px 8px hsl(var(--foreground) / 0.05), 0 8px 16px hsl(var(--foreground) / 0.08)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['var(--font-gilroy)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-gilroy)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // SoftService brand colors
        primary: '#01a0e2',
        'primary-dark': '#0190d2',
        // CACIMBO brand colors
        cacimbo: '#e7003b',
        'cacimbo-dark': '#c40036',
        // Design system colors
        'text-dark': '#1A1A1A',
        'gray-light': '#F5F5F5',
        'border-color': '#DDDDDD',
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
        'heavy': '950',
      }
    },
  },
  plugins: [],
}

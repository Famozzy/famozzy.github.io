/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        mono: '"JetBrains Mono", monospace'
      },
      colors: {
        'tn-background': '#1a1b26',
        'tn-foreground': '#a9b1d6',
        'tn-dark': '#16161e',
        'tn-fg-dark': '#828bb8',
        'tn-fg-gutter': '#3b4261',
        'tn-highlight': '#2f334d',
        'tn-cyan': '#86e1fc',
        'tn-yellow': '#ffc777'
      }
    }
  },
  plugins: []
}

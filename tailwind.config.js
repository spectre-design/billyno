/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chicagoFog: '#CAC2BD',
        solidOpal: '#EEEAE2',
        nickelPlate: '#C1C6BF',
        seaDeep: '#2D3C44',
        grisNautico: '#BCC7CB',
        lavenderVapor: '#C8C1C9',
        whiteglove: '#F0EFED',
        beachfoam: '#CDE0E1',
        islandlush: '#008292',
        naughtymarietta: '#E3CCDC',
        irresistible: '#B3446C',
        persianindigo: '#32127A',
        islandlushtint: 'rgba(0, 130, 146, 0.08)',
        irresistibletint: 'rgba(179, 68, 108, 0.08)',
        naughtymariettatint: 'rgba(227, 204, 220, 0.18)',
        persianindigotint: 'rgba(50, 18, 122, 0.08)',
        cheqBg: '#F7F6F3',
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        scanline: {
          '0%, 100%': { top: '10%' },
          '50%': { top: '90%' },
        },
        scanline-glow: {
          '0%, 100%': { top: '10%' },
          '50%': { top: '80%' },
        },
        scanpulse: {
          '0%, 100%': { boxShadow: '0 0 32px 8px rgba(255,107,0,0.10)' },
          '50%': { boxShadow: '0 0 48px 16px rgba(255,107,0,0.25)' },
        },
      },
      animation: {
        scanline: 'scanline 2s infinite linear',
        scanline-glow: 'scanline-glow 2s infinite ease-in-out',
        scanpulse: 'scanpulse 2s infinite ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

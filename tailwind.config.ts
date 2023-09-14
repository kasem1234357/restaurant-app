import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#EA3F30',
      white: '#fff',
      black: '#0B0A0B',
      success: '#26E134',
      caution: '#E2A83B',
      danger: '#BA2417',
      info: '#246FBA',
      text: '#040921',
    },
    fontSize: {
      cap: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '30px',
      '3xl': '42px',
      '4xl': '56px',
      '5xl': '56px',
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
export default config;

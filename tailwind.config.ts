import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  // safelist: 'p-3 p-4 p-5',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts']
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        teal: {
          100: '#096'
        }
      }
    }
  },
  plugins: [formsPlugin],
  extract: {
    include: ['src/**/*.{jsx,tsx,svelte}', 'shared/**/*.{ts}']
  }
});

// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Pretendard-Regular', ...fontFamily.sans],
        calli: ['iceJaram-Rg'],
      },
      colors: {
        primary: colors.blue,
        gray: colors.stone,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.gray.500'),
              '&:hover': {
                color: `${theme('colors.gray.600')}`,
              },
              code: { color: '#EB5757' },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            li: {
              lineHeight: theme('lineHeight.snug'),
            },
            code: {
              color: '#EB5757',
              padding: '0.2em 0.4em',
              backgroundColor: 'rgba(135,131,120,.15)',
              borderRadius: '0.25rem',
              fontSize: '85%',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            p: {
              color: theme('colors.gray.800'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.gray.400'),
              '&:hover': {
                color: `${theme('colors.gray.300')}`,
              },
              code: { color: '#EB5757' },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            p: {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

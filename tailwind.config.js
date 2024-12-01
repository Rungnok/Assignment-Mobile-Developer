/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        xxs: ['11px'],
        xs: ['12px'],
        xsm: ['13px'],
        sm: ['14px'],
        md: ['15px'],
        base: ['16px'],
        slg: ['17px'],
        lg: ['18px'],
        xl: ['20px'],
        '2xl': ['22px'],
        '3xl': ['24px'],
        '4xl': ['26px'],
        '5xl': ['28px'],
        '6xl': ['30px'],
      },
      colors: {
        prim: {
          gray: '#B7B7B7',
          lightGray: '#E4E4E4',
          mediumGray: '#646465',
          mediumerGray: '#7A7A7A',
          darkGray: '#494949',
        },
      },
      borderRadius: {
        smd: '5px',
      },
      fontFamily: {
        suk: ['SukhumvitSet-Text'],
        'suk-thin': ['SukhumvitSet-Thin'],
        'suk-light': ['SukhumvitSet-Light'],
        'suk-medium': ['SukhumvitSet-Medium'],
        'suk-semibold': ['SukhumvitSet-SemiBold'],
        'suk-bold': ['SukhumvitSet-Bold'],
      },
    },
  },
  plugins: [],
};

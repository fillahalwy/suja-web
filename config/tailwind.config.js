export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10b981',
        'dark-gray': '#2d3748',
        'light-gray': '#f7fafc',
        'text-light': '#6b7280',
      },
      zIndex: {
        '100': '100',
      },
      spacing: {
        'container': '1200px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}

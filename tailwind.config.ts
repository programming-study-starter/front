import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      'primary': '#A551FB',
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin')({
    }),
  ],
}
export default config

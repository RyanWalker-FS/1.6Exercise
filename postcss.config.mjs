/** @type {import('postcss-load-config').Config} */
const config = {
  output: "export",
  basepath: "/1.6Exercise",
  images: { unoptomized: true },
  plugins: {
    tailwindcss: {},
  },
};

export default config;

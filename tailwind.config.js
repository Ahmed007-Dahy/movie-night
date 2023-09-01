/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-color': '#028476',
                'primary-darker-color': '#007265',
                'secondary-color': '#015D53',
                'third-color': '#5CD85A',
                'forth-color': '#08313A',
                'forth-lighter-color': '#0c4e5a',
            },
            spacing: {
                720: '85%',
            },
        },
    },
    plugins: [],
};

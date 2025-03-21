/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                'custom': '-4px 4px 5px 3px rgba(0, 0, 0, 0.25)', // Mevcut siyah gölge
                'custom-green': '-4px 4px 5px 4px rgba(59, 185, 72, 0.80)', // #3BB948 renginde gölge
              },
              borderRadius: {
                'custom': '18px',  // Custom 18px border-radius
                'extra': '22px',   // Custom 22px border-radius
              },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            fontSize: {
                'custom': '21px',  // Custom smallest size
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                background: 'hsl(30, 20%, 98%)', // Hafif krem rengi
                foreground: 'hsl(220, 10%, 15%)', // Koyu gri
                card: {
                    DEFAULT: 'hsl(0, 0%, 95%)', // Açık gri
                    foreground: 'hsl(220, 10%, 20%)', // Koyu gri
                },
                royalblue: "#2A40F4",
                popover: {
                    DEFAULT: 'hsl(240, 15%, 92%)', // Hafif pastel
                    foreground: 'hsl(220, 10%, 25%)',
                },
                primary: {
                    DEFAULT: 'hsl(233, 100%, 56%)', // Mavi-turkuaz
                    foreground: 'hsl(0, 0%, 100%)',
                },
                secondary: {
                    DEFAULT: 'hsl(270, 50%, 65%)', // Açık pastel mor
                    foreground: 'hsl(0, 0%, 100%)',
                },
                muted: {
                    DEFAULT: 'hsl(215, 25%, 80%)', // Pastel mavi-gri
                    foreground: 'hsl(220, 10%, 30%)',
                },
                accent: {
                    DEFAULT: 'hsl(30, 85%, 55%)', // Hafif turuncu-amber
                    foreground: 'hsl(0, 0%, 100%)',
                },
                destructive: {
                    DEFAULT: 'hsl(350, 70%, 50%)', // Koyu mercan
                    foreground: 'hsl(0, 0%, 100%)',
                },
                buttonColor:"#252525",
                buttonGreen:"#3BB948",
                border: 'hsl(220, 10%, 85%)',
                input: 'hsl(220, 10%, 90%)',
                ring: 'hsl(195, 90%, 40%)', // Turkuaz tonu
                chart: {
                    '1': 'hsl(200, 75%, 50%)', // Canlı mavi
                    '2': 'hsl(120, 55%, 45%)', // Yeşil
                    '3': 'hsl(40, 85%, 50%)', // Altın sarısı
                    '4': 'hsl(350, 70%, 50%)', // Koyu mercan
                    '5': 'hsl(270, 50%, 65%)', // Açık mor
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

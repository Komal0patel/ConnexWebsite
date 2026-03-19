/**
 * =========================================================================
 * INTELLIGENT THEME BRAIN (Powered by Master CSS Keys)
 * =========================================================================
 * 
 * This file translates the "Master Keys" from index.css into values 
 * that JavaScript and Framer Motion can understand.
 * 
 * NOTE: These variables point to the :root variables in index.css.
 * To change colors/fonts, edit index.css instead of this file!
 */

export const THEME = {
    colors: {
        // Direct Links to CSS variables
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        dark: "var(--dark)",
        accent: "var(--accent)",
        text: "var(--text)",
        navbar: "var(--primary)",
        footer: "var(--primary)",
        white: "#FFFFFF",
        black: "#000000",

        // Dynamic Transparency (Using modern CSS color-mix)
        primaryAlpha: (opacity: number) => `color-mix(in srgb, var(--primary), transparent ${Math.round((1 - opacity) * 100)}%)`,
        darkAlpha: (opacity: number) => `color-mix(in srgb, var(--dark), transparent ${Math.round((1 - opacity) * 100)}%)`,
        whiteAlpha: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
        blackAlpha: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    },
    typography: {
        fonts: {
            sans: "var(--font-sans)",
            serif: "var(--font-serif)",
            mono: "var(--font-mono)",
        },
        tracking: {
            mega: "1.2rem",
            ultra: "0.8rem",
            widest: "0.5rem",
            wide: "0.2rem",
            base: "normal",
            tight: "-0.02rem",
        }
    },
    animations: {
        transitions: {
            default: { type: "spring" as const, stiffness: 200, damping: 25 },
            slow: { type: "spring" as const, stiffness: 80, damping: 20, mass: 1 },
            fast: { type: "spring" as const, stiffness: 400, damping: 30 },
            cinematic: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
        },
        // Master Animation Presets (Import these into any motion.div)
        variants: {
            staggerContainer: {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
            },
            revealUp: {
                hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }
            },
            simpleFade: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8 } }
            }
        }
    },
    glass: {
        blur: "12px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(255, 255, 255, 0.03)",
    }
} as const;

export default THEME;

export const themeConfig = {
  colors: {
    background: "#F7F6F3",
    card: "#FFFFFF",
    border: "#EAE7E2",
    text: {
      primary: "#1A1A1A",
      secondary: "#6B6B6B",
    },
    accent: "#1A1A1A",
  },
  fonts: {
    sans: "Inter",
    serif: "Playfair Display",
  },
} as const

export type ThemeConfig = typeof themeConfig

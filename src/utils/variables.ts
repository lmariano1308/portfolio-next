export interface Theme {
  background: string
  backgroundSecondary: string
  fontPrimary: string
  fontSecondary: string
  primary: string
  secondary: string
  tertiary: string
  primaryGradient: string
}

export interface Themes {
  dark: Theme
  light: Theme
}

export const THEMES: Themes = {
  dark: {
    background: '#2D283E',
    backgroundSecondary: '#4C495D',
    fontPrimary: '#ffffff',
    fontSecondary: '#d3d3d3',
    primary: '#802BB1',
    secondary: '#C147E9',
    tertiary: '#E5B8F4',
    primaryGradient: `linear-gradient(to right, #802BB1, #C147E9)`,
  },
  light: {
    background: '#F7F7F7',
    backgroundSecondary: '#EAEAEA',
    fontPrimary: '#222222',
    fontSecondary: '#555555',
    primary: '#810CA8',
    secondary: '#C147E9',
    tertiary: '#E5B8F4',
    primaryGradient: `linear-gradient(to right, #802BB1, #C147E9)`,
  },
}

import { useEffect, useState } from 'react'

type MediaQueryListMatches = boolean

const useThemeDetector = (): MediaQueryListMatches | null => {
  const [isDarkTheme, setIsDarkTheme] = useState<MediaQueryListMatches | null>(
    null,
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      setIsDarkTheme(darkThemeMq.matches)
      darkThemeMq.addEventListener('change', (e) => setIsDarkTheme(e.matches))

      return () =>
        darkThemeMq.removeEventListener('change', (e) =>
          setIsDarkTheme(e.matches),
        )
    }
  }, [])

  return isDarkTheme
}

export default useThemeDetector

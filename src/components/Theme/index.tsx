'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import useThemeDetector from '@/hooks/useThemeDetector'
import { THEMES } from '@/utils/variables'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const Theme = ({ children }: Props) => {
  const isDarkTheme = useThemeDetector()
  const theme = THEMES[isDarkTheme ? 'dark' : 'light']

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme

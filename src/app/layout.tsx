import type { Metadata } from 'next'
import { Esteban, Montserrat } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Menu from '@/components/Menu'
import Theme from '@/components/Theme'
import GlobalStyle from './globals'
import * as S from './styles'

const esteban = Esteban({
  subsets: ['latin-ext'],
  weight: '400',
  variable: '--font-esteban',
})
const montserrat = Montserrat({
  subsets: ['latin-ext'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Lucas Mariano - Front-End Developer',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${esteban.className} ${montserrat.className}
        `}
      >
        <StyledComponentsRegistry>
          <Theme>
            <GlobalStyle />
            <S.Container>
              <Menu />
              <S.Content>{children}</S.Content>
            </S.Container>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

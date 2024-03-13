'use client'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from 'styled-components'
import { AnimatePresence, useCycle } from 'framer-motion'
import {
  Envelope,
  GithubLogo,
  House,
  InstagramLogo,
  Keyboard,
  LinkedinLogo,
  List,
  MagicWand,
  User,
  X,
} from '@phosphor-icons/react'
import OverflowHidden from '../OverflowHidden'
import * as S from './styles'

interface DrawerControls {
  toggleDrawer: () => void
  open: boolean
}

interface Props {}

const Drawer = forwardRef<DrawerControls, Props>(({}, ref) => {
  const [open, cycleOpen] = useCycle(false, true)
  const drawerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  const menuConfig = [
    {
      label: 'Home',
      path: '/',
      icon: <House size={16} color={theme.primary} />,
    },
    {
      label: 'About',
      path: '/about',
      icon: <User size={16} color={theme.primary} />,
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: <MagicWand size={16} color={theme.primary} />,
    },
    {
      label: 'Gear',
      path: '/gear',
      icon: <Keyboard size={16} color={theme.primary} />,
    },
  ]

  const socialMediaConfig = [
    {
      label: 'Email',
      path: 'lucasmariano2000@hotmail.com',
      icon: <Envelope size={16} color={theme.primary} />,
    },
    {
      label: 'Github',
      path: 'www.github.com/lmariano1308',
      icon: <GithubLogo size={16} color={theme.primary} />,
    },
    {
      label: 'Linkedin',
      path: 'www.linkedin.com/in/lmariano1308',
      icon: <LinkedinLogo size={16} color={theme.primary} />,
    },
    {
      label: 'Instagram',
      path: 'www.instagram.com/lmariano1308',
      icon: <InstagramLogo size={16} color={theme.primary} />,
    },
  ]

  useImperativeHandle(ref, () => ({
    toggleDrawer: () => cycleOpen(),
    open,
  }))

  const drawerVariants = {
    open: {
      x: 0,
      zIndex: 999,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
    closed: {
      x: '-100%',
      zIndex: 999,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 0.3,
      },
    },
  }

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  }

  const buttonVariants = {
    open: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  }

  const contentVariants = {
    initial: {
      opacity: 0,
      y: '30vh',
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 0.3,
      },
    },
  }

  const labelVariants = {
    initial: {
      opacity: 0,
      y: '30vh',
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.35,
        delay: 0.15,
      },
    },
  }

  const handleToggleDrawer = () => {
    cycleOpen()
  }

  return (
    <>
      <S.Button>
        <AnimatePresence mode="wait">
          <S.ButtonIcon
            onClick={handleToggleDrawer}
            key={open ? 'open' : 'closed'}
            initial="closed"
            animate="open"
            exit="closed"
            variants={buttonVariants}
          >
            {open ? (
              <X size={22} color={theme.primary} />
            ) : (
              <List size={22} color={theme.primary} />
            )}
          </S.ButtonIcon>
        </AnimatePresence>
      </S.Button>

      <AnimatePresence mode="wait">
        {open && (
          <>
            {createPortal(
              <>
                <S.Container
                  // drag="x"
                  // dragConstraints={{ right: 0 }}
                  // onDragEnd={(event, info) => {
                  //   if (info.offset.x < -100) cycleOpen()
                  // }}
                  // dragElastic={0.1}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={drawerVariants}
                  ref={drawerRef}
                >
                  <OverflowHidden>
                    <S.Label
                      variants={labelVariants}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      Menu
                    </S.Label>
                  </OverflowHidden>
                  {menuConfig.map((item, index) => {
                    return (
                      <S.OverflowHidden key={item.path}>
                        <S.Content
                          variants={contentVariants}
                          initial="initial"
                          animate="open"
                          exit="initial"
                        >
                          {item.icon}
                          {item.label}
                        </S.Content>
                      </S.OverflowHidden>
                    )
                  })}
                  <OverflowHidden>
                    <S.Label
                      variants={labelVariants}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      Social
                    </S.Label>
                  </OverflowHidden>
                  {socialMediaConfig.map((item, index) => {
                    return (
                      <S.OverflowHidden key={item.path}>
                        <S.Content
                          variants={contentVariants}
                          initial="initial"
                          animate="open"
                          exit="initial"
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          {item.icon}
                          {item.label}
                        </S.Content>
                      </S.OverflowHidden>
                    )
                  })}
                </S.Container>
                <S.Overlay
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={overlayVariants}
                  onClick={handleToggleDrawer}
                />
              </>,
              document.body,
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
})

Drawer.displayName = 'Drawer'

export default Drawer

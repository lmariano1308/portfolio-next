'use client'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, useCycle } from 'framer-motion'
import * as S from './styles'
import {
  Envelope,
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  List,
  MagicWand,
  User,
  X,
} from '@phosphor-icons/react'

export const menuConfig = [
  {
    label: 'Home',
    path: '/',
    icon: <House size={16} color="#b4b4b4" />,
  },
  {
    label: 'About',
    path: '/about',
    icon: <User size={16} color="#b4b4b4" />,
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: <MagicWand size={16} color="#b4b4b4" />,
  },
]

const socialMediaConfig = [
  {
    label: 'Email',
    path: 'lucasmariano2000@hotmail.com',
    icon: <Envelope size={16} color="#b4b4b4" />,
  },
  {
    label: 'Github',
    path: 'www.github.com/lmariano1308',
    icon: <GithubLogo size={16} color="#b4b4b4" />,
  },
  {
    label: 'Linkedin',
    path: 'www.linkedin.com/in/lmariano1308',
    icon: <LinkedinLogo size={16} color="#b4b4b4" />,
  },
  {
    label: 'Instagram',
    path: 'www.instagram.com/lmariano1308',
    icon: <InstagramLogo size={16} color="#b4b4b4" />,
  },
]

interface DrawerControls {
  toggleDrawer: () => void
  open: boolean
}

interface Props {}

const Drawer = forwardRef<DrawerControls, Props>(({}, ref) => {
  const [open, cycleOpen] = useCycle(false, true)
  const drawerRef = useRef<HTMLDivElement>(null)

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
              <X size={16} color="#b4b4b4" />
            ) : (
              <List size={16} color="#b4b4b4" />
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
                  drag="x"
                  dragConstraints={{ right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -100) cycleOpen()
                  }}
                  dragElastic={0.1}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={drawerVariants}
                  ref={drawerRef}
                >
                  <S.Label>Menu</S.Label>
                  {menuConfig.map((item, index) => {
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
                  <S.Label>Social</S.Label>
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

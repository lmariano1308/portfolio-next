'use client'
import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, useCycle } from 'framer-motion'
import { motion } from 'framer-motion'
import * as S from './styles'
import { List, X } from '@phosphor-icons/react'

interface DrawerControls {
  toggleDrawer: () => void
  open: boolean
}

interface Props {
  children: ReactNode
}

const Drawer = forwardRef<DrawerControls, Props>(({ children }, ref) => {
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
        duration: 0.3,
      },
    },
    closed: {
      x: '-100%',
      zIndex: 999,
      transition: {
        type: 'tween',
        duration: 0.3,
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
              <X size={22} color="#fff" />
            ) : (
              <List size={22} color="#fff" />
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
                  {children}
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

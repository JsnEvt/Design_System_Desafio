import * as ToastOriginal from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: `translateX(var(--radix-toast-swipe-end-x))` },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
})

export const ToastRoot = styled(ToastOriginal.Root, {
  padding: '$3 $4',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16,1.0.3,1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'transalteX(0)',
      transition: 'transform 200ms ease-out',
    },

    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    },
  },
})

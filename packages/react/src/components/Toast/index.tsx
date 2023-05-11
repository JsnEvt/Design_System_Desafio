import * as ToastOriginal from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastRoot } from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastOriginal.Provider>
      <ToastRoot {...props}>
        <ToastOriginal.Title>{title}</ToastOriginal.Title>
        {description && (
          <ToastOriginal.Description>{description}</ToastOriginal.Description>
        )}
        <ToastOriginal.Close>
          {<X weight="light" size={20} />}
        </ToastOriginal.Close>
      </ToastRoot>

      <ToastOriginal.Viewport />
    </ToastOriginal.Provider>
  )
}

Toast.displayName = 'Toast'

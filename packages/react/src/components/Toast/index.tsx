import * as ToastOriginal from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastOriginal.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && (
          <ToastDescription>{description}</ToastDescription>
        )}
        <ToastClose>
          {<X weight="light" size={20} />}
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastOriginal.Provider>
  )
}

Toast.displayName = 'Toast'

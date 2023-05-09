import * as TooltipOriginal from '@radix-ui/react-tooltip'
import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipOriginal.Root> & {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipOriginal.Provider>
      <TooltipOriginal.Root {...props}>
        <TooltipOriginal.Trigger asChild>{children}</TooltipOriginal.Trigger>
        <TooltipOriginal.Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipOriginal.Portal>
      </TooltipOriginal.Root>
    </TooltipOriginal.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

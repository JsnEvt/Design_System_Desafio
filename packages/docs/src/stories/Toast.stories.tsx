import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quinta-feira 11 de maio de 2023.',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

import { Button } from '@chakra-ui/react'
import React, { memo, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean

  onClick: () => void
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props
  return (
    <Button
      bg="teal.400"
      color="white"
      disabled={disabled || loading}
      isLoading={loading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

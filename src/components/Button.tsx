import { ReactNode } from 'react'
import styled from 'styled-components'

type VariantType = 'filled' | 'outlined'

interface ButtonProps {
  variant?: VariantType
  onClick?: () => void
  children: ReactNode
}

const StyledButton = styled.button<{ variant: VariantType }>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
`

const Button = ({ onClick, children, variant = 'filled' }: ButtonProps) => {
  return <StyledButton {...{ onClick, variant }}>{children}</StyledButton>
}

export default Button

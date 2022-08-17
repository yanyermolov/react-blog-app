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
  background: ${({ theme, variant }) =>
    variant === 'filled' ? theme.colors.primary : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-color: '1px solid ${({ theme, variant }) =>
    variant === 'outlined' ? theme.colors.white : 'none'};
  border-radius: 10px;
`

const Button = ({ onClick, children, variant = 'filled' }: ButtonProps) => {
  return <StyledButton {...{ onClick, variant }}>{children}</StyledButton>
}

export default Button

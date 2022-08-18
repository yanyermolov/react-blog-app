import { ReactNode } from 'react'
import styled from 'styled-components'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const StyledModal = styled(Rodal)``

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <StyledModal
      visible={open}
      closeOnEsc
      showCloseButton={false}
      {...{ onClose }}
    >
      <div>{children}</div>
    </StyledModal>
  )
}

export default Modal

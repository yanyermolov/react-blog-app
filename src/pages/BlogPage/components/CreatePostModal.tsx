import styled from 'styled-components'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'

interface CreatePostModalProps {
  open: boolean
  onClose: () => void
}

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem -0.5rem 0;
`

const StyledButton = styled(Button)`
  margin: 0 0.5rem;
`

const CreatePostModal = ({ open, onClose }: CreatePostModalProps) => {
  return (
    <Modal {...{ open, onClose }}>
      <ButtonsWrapper>
        <StyledButton onClick={onClose}>Apply</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ButtonsWrapper>
    </Modal>
  )
}

export default CreatePostModal

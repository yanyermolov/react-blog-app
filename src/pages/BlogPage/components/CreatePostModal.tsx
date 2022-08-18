import { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { createPost } from '../../../actions/posts'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal'
import { usePostsContext } from '../../../context/PostsContextProvider'
import { IPost } from '../../../models/models'

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

const StyledButton = styled.button`
  margin: 0 0.5rem;
`

const CreatePostModal = ({ open, onClose }: CreatePostModalProps) => {
  const { posts, setPosts } = usePostsContext()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleCreatePost = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await createPost({ title, body })
      setPosts([...posts, res])
      onClose()
    } catch (error) {
      console.error('error', error)
    }
  }

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)
  const handleBody = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setBody(event.target.value)

  useEffect(() => {
    return () => {
      setBody('')
      setTitle('')
    }
  }, [open])

  return (
    <Modal {...{ open, onClose }}>
      <div>
        <h1>Create a New Post</h1>
        <form onSubmit={handleCreatePost}>
          <label>Title</label>
          <input type='text' value={title} onChange={handleTitle} />
          <br />
          <label>Text</label>
          <textarea value={body} onChange={handleBody} />
          <ButtonsWrapper>
            <StyledButton type='submit'>Create</StyledButton>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
          </ButtonsWrapper>
        </form>
      </div>
    </Modal>
  )
}

export default CreatePostModal

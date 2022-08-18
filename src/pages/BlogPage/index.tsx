import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import CreatePostModal from './components/CreatePostModal'

const Navbar = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavbarTitle = styled.span`
  font-weight: 600;
  font-size: 2rem;
  pointer-events: none;
`

const Container = styled.div`
  margin: auto;
  padding: 0 1rem;
  max-width: 820px;
`

const BlogPage = () => {
  const [openPostModal, setOpenPostModal] = useState<boolean>(false)

  const handleOpenPostModal = () => setOpenPostModal(true)
  const handleClosePostModal = () => setOpenPostModal(false)

  return (
    <>
      <Navbar>
        <NavbarTitle>Blog</NavbarTitle>

        <Button onClick={handleOpenPostModal}>Add Post</Button>
      </Navbar>

      <Container>
        <Outlet />
      </Container>

      <CreatePostModal open={openPostModal} onClose={handleClosePostModal} />
    </>
  )
}

export default BlogPage

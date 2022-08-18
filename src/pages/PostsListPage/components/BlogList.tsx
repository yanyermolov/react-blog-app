import { MouseEvent, useEffect, useState } from 'react'
import { IPost } from '../../../models/models'
import { deletePost, listPosts } from '../../../actions/posts'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { usePostsContext } from '../../../context/PostsContextProvider'

const PostBody = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BlogList = () => {
  const { posts, setPosts } = usePostsContext()

  const handlePosts = async () => {
    try {
      const res = await listPosts()
      setPosts(res)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelPost = async (
    e: MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.stopPropagation()

    try {
      await deletePost(id)
      setPosts(posts.filter((post: IPost) => post.id !== id))
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    handlePosts()
  }, [])

  const navigate = useNavigate()

  return (
    <div>
      {posts?.map((post: IPost) => (
        <div
          key={post.id}
          style={{
            backgroundColor: 'gray',
            cursor: 'pointer',
            margin: '1em',
          }}
          onClick={() => navigate(`/${post.id}`)}
        >
          <h2>{post.title}</h2>
          <PostBody>{post.body}</PostBody>
          <button onClick={(e) => handleDelPost(e, post.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList

import { useEffect, useState } from 'react'
import { IPost } from '../../../models/models'
import { listPosts } from '../../../actions/posts'
import { useNavigate } from 'react-router-dom'

const BlogList = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  const handlePosts = async () => {
    try {
      const res = await listPosts()
      setPosts(res)
    } catch (error) {
      console.error(error)
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
            backgroundColor: 'lime',
            cursor: 'pointer',
          }}
          onClick={() => navigate(`/${post.id}`)}
        >
          <h2>{post.title}</h2>
          <p>Comments</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList

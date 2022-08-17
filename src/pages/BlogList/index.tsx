import { useEffect, useState } from 'react'
import { IPost } from '../../models/models'
import { listPosts } from '../../actions/posts'

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

  return (
    <div>
      <h1>List of Posts</h1>
      {posts?.map((post: IPost) => (
        <div key={post?.id}>
          <h3>{post.title}</h3>
          <p>Comments</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList

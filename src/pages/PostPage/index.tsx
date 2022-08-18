import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retrievePost } from '../../actions/posts'
import { IComment, IPost } from '../../models/models'

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState<IPost | null>(null)

  const handlePost = async () => {
    if (!id) {
      return
    }
    try {
      const res = await retrievePost(id)
      setPost(res)
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    handlePost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {post?.comments?.map((comment: IComment) => (
        <div key={comment.id}>{comment.body}</div>
      ))}
    </div>
  )
}

export default PostPage

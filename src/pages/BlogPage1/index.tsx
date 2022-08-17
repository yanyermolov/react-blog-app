import { useState, ChangeEvent } from 'react'

interface BlogPageProps {}

const BlogPage = (props: BlogPageProps) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handlePost = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const blog = { title, body }
  }

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)
  const handleBody = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setBody(event.target.value)
  return (
    <div>
      <h1>Add a New Blog</h1>
      <form onSubmit={handlePost}>
        <label>Blog title</label>
        <input type="text" value={title} onChange={handleTitle} />
        <label>Blog body</label>
        <textarea value={body} onChange={handleBody} />
        <label>Comments</label>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default BlogPage

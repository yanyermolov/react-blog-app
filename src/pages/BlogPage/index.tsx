import { useState } from 'react'

interface BlogPageProps {}

const BlogPage = (props: BlogPageProps) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // const handlePost = (event) => {
  //   event.preventDefault()
  //   const blog = { title, body, comments}
  // }

  return (
    <div>
      <h1>Add a New Blog</h1>
      <form
      // onSubmit={handlePost}
      >
        <label>Blog title</label>
        <input
          type='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <label>Comments</label>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default BlogPage

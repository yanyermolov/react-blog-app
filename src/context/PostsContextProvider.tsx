import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { IPost } from '../models/models'

interface PostsContextProviderProps {
  children: ReactNode
}

const PostsContext = createContext<Partial<any>>({})
const usePostsContext = () => useContext(PostsContext)

const PostsContextProvider = ({ children }: PostsContextProviderProps) => {
  const [posts, setPosts] = useState<IPost[]>([])

  const value = useMemo(() => ({ posts, setPosts }), [posts])

  return (
    <PostsContext.Provider {...{ value }}>{children}</PostsContext.Provider>
  )
}

export { PostsContextProvider, usePostsContext }

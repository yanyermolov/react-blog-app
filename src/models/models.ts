export interface IComment {
  id: string
  postId: string
  body: string
}

export interface IPost {
  id: string
  title: string
  body: string
  comments?: IComment[]
}

import axiosInstance from '../utilities/axiosInstance'

export const createPost = async (requestBody: {
  title: string
  body: string
}) => {
  try {
    const response = await axiosInstance.post('posts', requestBody)
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on creating post', err)
  }
}

export const listPosts = async () => {
  try {
    const response = await axiosInstance.get('posts')
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on listing posts', err)
  }
}

export const retrievePost = async (id: string) => {
  try {
    const response = await axiosInstance.get(`posts/${id}`, {
      params: { _embed: 'comments' },
    })
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on retrieving post', err)
  }
}

export const updatePost = async (
  id: string,
  requestBody: {
    title: string
    body: string
  }
) => {
  try {
    const response = await axiosInstance.put(`posts/${id}`, requestBody)
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on updating post', err)
  }
}

export const deletePost = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`posts/${id}`)
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on deleting post', err)
  }
}

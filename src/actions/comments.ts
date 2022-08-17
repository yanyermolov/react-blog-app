import axiosInstance from '../utilities/axiosInstance'

export const createComment = async (requestBody: {
  postId: number
  body: string
}) => {
  try {
    const response = await axiosInstance.post('comments', requestBody)
    const result = await response.data
    return result
  } catch (err) {
    console.error('Error on commenting post', err)
  }
}

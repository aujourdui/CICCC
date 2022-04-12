export const getPost = async(postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return res.json()
}
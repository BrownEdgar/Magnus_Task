const getPostById = (posts, id) => {
  return posts.filter(post => post.userId === id)
}

export default getPostById
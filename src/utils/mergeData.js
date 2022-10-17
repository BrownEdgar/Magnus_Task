import getPostById from './getPostById'

function mergeData(users, posts) {
  let result = users.map(user => {
    return { ...user, posts: [...getPostById(posts, user.id)] }
  })
  return result
}

export default mergeData
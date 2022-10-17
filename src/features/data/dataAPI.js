import axios from 'axios'
export function fetchPosts({ usersApi, postApi }) {
  return new Promise(async resolve => {
    const usersrequest = axios.get(usersApi);
    const postsrequest = axios.get(postApi);
    await axios.all([usersrequest, postsrequest])
      .then(axios.spread(function (res1, res2) {
        resolve({ users: res1.data, posts: res2.data })
      }));
  })
}
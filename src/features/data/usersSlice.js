import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mergeData from '../../utils/mergeData';
import { fetchPosts } from "./dataAPI";



export const getAsyncPosts = createAsyncThunk(
  "products/async/products",
  async () => {
    const api = {
      usersApi: "https://jsonplaceholder.typicode.com/users",
      postApi: "https://jsonplaceholder.typicode.com/posts",
    }
    const response = await fetchPosts(api);
    return response
  }
)

const initialState = {
  data: [],
  status: "",
}

export const getUserByID = (state, userId) => {
  return state.data.filter(elem => elem.data.id === userId)
}

export const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => (
    builder.addCase(getAsyncPosts.pending, (state) => {
      return {
        ...state,
        status: "pending"
      }
    })
      .addCase(getAsyncPosts.fulfilled, (state, action) => {
        const { posts, users } = action.payload
        const data = mergeData(users, posts)
        return {
          data,
          status: "success"
        }
      })
      .addCase(getAsyncPosts.rejected, (state) => {
        return {
          ...state,
          status: "fail"
        }
      })
  )
})

export default userSlice.reducer




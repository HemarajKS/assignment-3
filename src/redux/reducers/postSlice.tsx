import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  message: '',
  data: {},
  isSuccess: false,
  loading: false,
}

export const postData: any = createAsyncThunk(
  'post/postData',
  async (arg: any, { rejectWithValue }: any) => {
    try {
      const fetchedData: any = await axios({
        method: 'post',
        url: `https://weather-d392d-default-rtdb.asia-southeast1.firebasedatabase.app/data.json`,
        data: arg,
      })

      return fetchedData
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postData.pending, (state, action) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.isSuccess = true
    })
    builder.addCase(postData.rejected, (state, action) => {
      state.message = action.payload
      state.loading = false
      state.isSuccess = false
    })
  },
})

export default postSlice

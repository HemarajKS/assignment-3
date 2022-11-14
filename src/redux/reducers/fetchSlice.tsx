import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  message: '',
  data: [],
  isSuccess: false,
  loading: false,
}

export const getData: any = createAsyncThunk(
  'fetch/getData',
  async (arg: any, { rejectWithValue }) => {
    try {
      const fetchedData: any = await axios({
        method: 'get',
        url: `https://weather-d392d-default-rtdb.asia-southeast1.firebasedatabase.app/snehal.json`,
        data: '',
      })

      return fetchedData
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

export const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getData.pending, (state, action) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.isSuccess = true
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.message = action.payload
      state.loading = false
      state.isSuccess = false
    })
  },
})

export default fetchSlice

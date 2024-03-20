import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserAPI } from '../../apis/UserAPI.js'

const signUp = createAsyncThunk(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.signUp(formData)
      const token = response.data.token
      localStorage.setItem('accessToken', token)

      return response.data
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export { signUp }

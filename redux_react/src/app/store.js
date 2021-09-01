import { configureStore } from '@reduxjs/toolkit'


import data from '../features/api_data/api_data_slices'


export const store = configureStore({
 reducer: {
  counterme: data,
 },
})

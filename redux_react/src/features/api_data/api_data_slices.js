import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = {
  data:  [],
  next:  null,
  previous:  null,
}

export const counterSlice = createSlice({
 name: 'counterme',
 initialState: initialStateValue,
 reducers: {
  request_next_page: (state,action) => {
    state.next = action.payload
    // console.log(state.next)
   },
   request_previous_page: (state,action) => {
    state.previous = action.payload
    // console.log(state.previous)
   },
  request_send: (state, action) => {
    state.data = action.payload
    // console.log(state.data)
   },
 },
})


// Action creators are generated for each case reducer function
export const {request_next_page, request_previous_page, request_send } = counterSlice.actions

export default counterSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

export const CounterSlice = createSlice({
    name: 'coutnter',
    initialState: {
        count: 0,
    },
    reducers: {
      increment(state) {
        state.count +=1
      },
      decrement(state) {
        state.count -=1
      },
      incrementByValue(state) {
        state.count +=5
      },
    },
  })

  
export const { increment, decrement, incrementByValue } = CounterSlice.actions
export default CounterSlice.reducer
  
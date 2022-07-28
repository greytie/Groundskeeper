import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    "Chop wood", "Pick apples", "Milk cows"
]

export const todayItemSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      add: (state: string[]) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.push("new Item")
      },
    },
  })

  export const { add } = todayItemSlice.actions;

  export default todayItemSlice.reducer;
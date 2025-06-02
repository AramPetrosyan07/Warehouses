import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../../types/user.types';
import { baseApiUrl } from '../../config';

console.log(baseApiUrl);
interface CounterState {
  users: IUser[]
  value: number;
}

const initialState: CounterState = {
  users:[],
  value: 0,
};

const usesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = usesSlice.actions;
export default usesSlice.reducer;

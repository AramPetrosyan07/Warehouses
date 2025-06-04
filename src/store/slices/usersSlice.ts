import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../types/user.types";
import { baseApiUrl } from "../../config";
import { getUsers } from "../thunks/usersThunks";

interface UsersState {
  users: IUser[];
  value: number;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  value: 0,
  loading: false,
  error: null,
};

const usesSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;

        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { increment, decrement } = usesSlice.actions;
export default usesSlice.reducer;

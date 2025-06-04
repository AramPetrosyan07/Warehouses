import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser } from "../../types/user.types";
import { api } from "../../services/api";

export const getUsers = createAsyncThunk<IUser[]>(
  "usersSlice/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      console.log("getUsers async think", api);

      const response = await api.get<IUser[]>("/users");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch users");
    }
  }
);

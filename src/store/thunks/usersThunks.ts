import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import type { IUser } from '../../types/user.types';

export const fetchUsers = createAsyncThunk<IUser[]>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<IUser[]>('/users');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch users');
    }
  }
);

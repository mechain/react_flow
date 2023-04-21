import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

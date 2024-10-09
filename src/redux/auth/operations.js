import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


axios.defaults.baseURL = "https://bookread-backend.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/register", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error(
        "This email is already registered. Please use a different email or log in!"
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error(
        "Incorrect username or password. Please check your credentials and try again!"
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.delete("/api/auth/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUserThunk = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (!persistedToken) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const { data } = await axios.get("/api/users/current");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


const {createSlice} = require('@reduxjs/toolkit');

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isFetching = true;
      // state.failure = false;
      // state.errorMessage = {};
    },
    success: (state, action) => {
      if (action.payload.userId) {
        state.data = {
          ...action.payload,
          accessToken: action.payload.id,
          email: action.payload.email,
        };
        delete state.data.id;
      } else {
        state.data = action.payload;
      }

      state.isFetching = false;
      state.failure = false;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
      // state.initialState = {};
    },

    logout: state => {
      return initialState;
      // Reset the state to initial values
    },

    // logout: state => {
    //   state.data = {};
    //   state.isFetching = false;
    //   state.failure = true;
    //   state.errorMessage = {};
    // },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

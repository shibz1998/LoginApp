// const {createSlice} = require('@reduxjs/toolkit');

// const initialState = {};

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     request: (state, action) => {
//       state.isFetching = true;

//     },
//     success: (state, action) => {
//       if (action.payload.userId) {
//         state.data = {
//           ...action.payload,
//           accessToken: action.payload.id,
//           email: action.payload.email,
//         };
//         delete state.data.id;
//       } else if(action.payload.id){
//         state.token = action.payload;
//       }
//       else {
//         state.data = action.payload;
//       }

//       state.isFetching = false;
//       state.failure = false;
//       state.errorMessage = {};
//     },
//     failure: (state, action) => {
//       state.isFetching = false;
//       state.failure = true;
//       state.errorMessage = action.payload;

//     },

//     logout: state => {
//       return initialState;

//     },

//   },
// });

// export const userActions = userSlice.actions;
// export default userSlice.reducer;

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
    },

    logout: state => {
      return initialState;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

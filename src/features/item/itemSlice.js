const {createSlice} = require('@reduxjs/toolkit');

const initialState = {items: []};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;

      console.log(action.payload);

      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, action.payload];
      }

      state.failure = false;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
      state.failure = true;
    },
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      state.items.push(itemToAdd);
      state.errorMessage = {}; //addded
    },

    deleteItem: (state, action) => {
      const itemIdToDelete = action.payload.data;
      console.log('Delete Item Data: ' + itemIdToDelete);
      state.items = state.items.filter(item => item.id !== itemIdToDelete);
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;

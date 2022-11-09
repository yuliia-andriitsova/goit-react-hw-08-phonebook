import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterAction: (state, action) => {
      console.log('current(state', current(state));
      state.filter = action.payload;
    },
  },
});

export const { changeFilterAction } = filterSlice.actions;

export default filterSlice.reducer;

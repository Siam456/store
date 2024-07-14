import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isCartDrawerOpen: boolean;
} = {
  isCartDrawerOpen: false,
};

const cartDrawerConfigSlice = createSlice({
  name: 'cartDrawerContext',
  initialState,
  reducers: {
    toggleCartDrawer(state) {
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
    closeCartDrawer(state) {
      state.isCartDrawerOpen = false;
    },
  },
});

export const { toggleCartDrawer, closeCartDrawer } =
  cartDrawerConfigSlice.actions;

export default cartDrawerConfigSlice.reducer;

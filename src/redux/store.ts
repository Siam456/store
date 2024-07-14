import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarConfigSlice';
import modalReducer from './features/sidebar/modalConfig';
import api from './api/apiSlice';
import authconfigSlice from './features/auth/authconfig.slice';
import cartDrawerConfigSlice from './features/sidebar/cartDrawerConfigSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
    auth: authconfigSlice,
    cartDrawer: cartDrawerConfigSlice,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

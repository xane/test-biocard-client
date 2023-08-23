import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './Reducer';

export const Store = configureStore({
  reducer: {
    selected: reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

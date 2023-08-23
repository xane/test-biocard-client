import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SelectedState {
  selected: string[];
}

const initialState: SelectedState = {
  selected: [],
};

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelect: (state, action: PayloadAction<string>) => {
      state.selected = [...state.selected, action.payload];
    },
  },
});

export const {setSelect} = selectedSlice.actions;

export const reducer = selectedSlice.reducer;

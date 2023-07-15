import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  geteData: null,
};

const allData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    allgetStaticData: (state, action) => {
      state.geteData = action.payload;
    },
  },
});

export const {getStaticData} = allData.actions;

export default allData.reducer;

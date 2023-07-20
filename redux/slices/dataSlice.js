import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  getData: null,
};

const allData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getStaticData: (state, action) => {
      state.getData = action.payload;
    },
  },
});

export const {getStaticData} = allData.actions;

export default allData.reducer;

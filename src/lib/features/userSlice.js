import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Manupa" },
};

const userSlice = createSlice({
  name: "user",//nama slice eke
  initialState,//initial state eka  hithanna epa
  reducers: {
    //state eka update krana function eka thama reducers
    setUser: (state, action) => {
      console.log(action);//action eka thama setUser pass kara data eka
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;//store ekata danne meya thamy slice eka
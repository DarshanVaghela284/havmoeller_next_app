import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    category: "",
    city: "",
    listen: "",
    length: 0,
};

export const agentSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
        addName: (state:any, action:any) => {
            state.name = action.payload;
        },
        addCategory: (state:any, action:any) => {
            state.category = action.payload;
        },
        addCity: (state:any, action:any) => {
            state.city = action.payload;
        },
        addListen: (state:any, action:any) => {
            state.listen = action.payload;
        },
        addAgentItemLength: (state:any, action:any) => {
            state.length = action.payload;
        },
    },
});

export const { addName, addCategory, addCity, addListen, addAgentItemLength } =
    agentSlice.actions;
export default agentSlice.reducer;

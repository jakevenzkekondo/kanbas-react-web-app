import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
import { Console } from "console";


const initialState = {
    modules: modules,
    module: { _id: "", name: "New Module 123", description: "New Description" },
};


const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            console.log("add")
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            console.log("update")
            state.modules = state.modules.map((module) => {
                console.log("module", module)
                if (module._id === action.payload._id && module.course === action.payload.course) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            console.log("setmoddule", state.module)
            state.module = action.payload;
        },
    },
});


export const { addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
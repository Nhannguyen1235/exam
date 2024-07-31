import { configureStore } from "@reduxjs/toolkit";
import chemicalSclice from "./chemicalSclice";

const store = configureStore({
    reducer:{
      chemicals: chemicalSclice
    }
})
export default store
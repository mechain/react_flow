import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../rtk/cake/cakeSlice";
import iceSlice from "../rtk/icecream/iceSlice";
import userReducer from "../rtk/user/userSlice";
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceSlice,
        users : userReducer,
        
    }
});
export default store;
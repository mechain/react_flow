import { useState } from "react";
import store from "./store";
import { useSelector , useDispatch} from "react-redux";
import { increse, decrease } from "../rtk/icecream/iceSlice";
export const Counter = () => {
  const dispatch = useDispatch()
  const { number } = useSelector((state) => state.icecream);
  return (
    <>
      React Redux Practise
      <button onClick={() => dispatch(increse())}>restock</button>
      <button onClick={() => dispatch(decrease())}>ordered</button>
      {number}
    </>
  );
};

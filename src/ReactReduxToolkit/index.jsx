// import { Counter } from "./component/Counter";
// import { Users } from "./component/fetchUsers";
import { RtkQuery } from "./component/rtkQuery";
// import store from "./component/store";
// import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./rtk/api/apiSlice";
export const ReactReduxPractise = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <ApiProvider api={apiSlice}>
        <RtkQuery />
      </ApiProvider>
      React Redux Practise
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* </Provider> */}
    </>
  );
};

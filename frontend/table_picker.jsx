import React from "react";
import ReactDOM from "react-dom";
// import configureStore from "./store/store";
// import Root from "./root";

document.addEventListener('DOMContentLoaded', () => {
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  // }
  // const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello</h1>, root);
});
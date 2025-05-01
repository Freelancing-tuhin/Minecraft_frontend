import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./contexts/authContext/Provider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BookmarkProvider } from "./contexts/bookMarkContext/BookMarkContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BookmarkProvider>
      <GoogleOAuthProvider clientId="854940596531-pe3tvrsec94arejuc24fbl0ie44dn0kk.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BookmarkProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

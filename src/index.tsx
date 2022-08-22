import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import { store } from "./store/index";

import "./index.scss";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container!);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

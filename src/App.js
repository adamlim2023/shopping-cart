import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

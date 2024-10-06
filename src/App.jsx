import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/main-layout/main-layout";
import { Home } from "./pages/home/home";
import { ProductItem } from "./pages/product/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

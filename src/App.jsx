import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { ProductItem } from "./pages/product/product";
import { Profile } from "./pages/profile";
import { ProfileLayout } from "./layout/profile-layout";
import { Obuna } from "./pages/obuna";
import { Xisob } from "./pages/xisob";
import { Books } from "./pages/books";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductItem />} />
          <Route path="profile" element={<ProfileLayout />} >
            <Route index element={<Obuna />} />
            <Route path="xisob" element={<Xisob />} />
            <Route path="books" element={<Books />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

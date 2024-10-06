import React from "react";
import { Hero } from "../../components/hero";
import { Service } from "../../components/services/service";
import { Category } from "../../components/category/category";
import { Book } from "../../components/book/book";
import { Audiobooks } from "../../components/audio/audio";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Category />
      <Book />
      <Audiobooks />
    </div>
  );
};

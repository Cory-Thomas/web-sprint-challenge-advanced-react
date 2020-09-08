import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [
  {
    name: "Bob",
    id: 143533463,
    scientificName: "Bobgfdgdfg",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["medium"],
    watering: 3,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21284,
  },
  {
    name: "String of Whales",
    id: 125341656456,
    scientificName: "Stringgdfgdf",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    sizes: ["small"],
    watering: 1,
    description:
      "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
    price: 1,
  },
  {
    name: "Snake vine",
    id: 489354534534,
    scientificName: "Sansevieria zeylanica",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
    sizes: ["small", "medium"],
    watering: 4,
    description:
      "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.",
    price: 18587,
  }
];

test("displays plants in cart", () => {
  render( <ShoppingCart cart={ plants } /> );

  plants.map( plant => {
    const plantName = screen.getByText( plant.name );
    expect( plantName ).toBeInTheDocument(); // adding .not fails the test so this passes
  })
});
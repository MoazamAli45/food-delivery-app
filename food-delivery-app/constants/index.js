import pizza from "../assets/categories/pizza.png";
import hamburger from "../assets/categories/hamburger.png";
import cupcake from "../assets/categories/cupcake.png";

export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: pizza,
    imageName: "pizza.png",
  },
  {
    id: 2,
    name: "Burger",
    image: hamburger,
    imageName: "hamburger.png",
  },
  {
    id: 3,
    name: "Italian",
    image: cupcake,
    imageName: "cupcake.png",
  },
  {
    id: 4,
    name: "Chinese",
    image: pizza,
    imageName: "pizzaIcon.png",
  },
  {
    id: 5,
    name: "Noodles",
    image: pizza,
    imageName: "pizzaIcon.png",
  },
  {
    id: 6,
    name: "Sweets",
    image: pizza,
    imageName: "pizzaIcon.png",
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: "../assets/dishes/dish1.jpeg",
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns",
      image: "../assets/categories/pizza.png",
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: "../assets/categories/pizza.png",
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: "../assets/dishes/dish1.jpeg",
        },
      ],
    },
  ],
};

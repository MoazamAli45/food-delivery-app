import { Client } from "./sanity";

let sanityQuery = (query, params) => {
  return Client.fetch(query, params);
};

export const getFeaturedRestaurants = () => {
  const data = sanityQuery(`*[_type=='featured']{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
        category->{
        name
      }
  }
}`);
  return data;
};

export const getCategories = () => {
  return sanityQuery(`*[_type=='category']`);
};

export const getFeaturedRestaurantsById = (id) => {
  //   in restaurants array, we need to get dishes and (category only name)
  return sanityQuery(
    `*[_type=='featured' && _id==$id']{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
      category->{
        name
      }
  }
}[0]`,
    { id }
  );
};

import { faker } from '@faker-js/faker';

function generateRestaurant() {
  const resturent_id = faker.database.mongodbObjectId;
  const name = faker.company.name();
  const cuisine = faker.lorem.words(2);
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zip = faker.location.zipCode();
  const phoneNumber = faker.phone.number();

  return {
    resturent_id,
    name,
    cuisine,
    address,
    city,
    state,
    zip,
    phoneNumber
  };
}

function generateRestaurantList(count: number) {
  const restaurants = [];
  for (let i = 0; i < count; i++) {
    const restaurant = generateRestaurant();
    restaurants.push(restaurant);
  }
  return restaurants;
}

const restaurantCount = 100;
export const restaurantList = generateRestaurantList(restaurantCount);

/* eslint-disable linebreak-style */
import users from './users.js';

const getUsersWithAge = (users, min, max) => users
  .filter((user) => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head,
// объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush,
// объект Blackburn Dotson, объект Sheree Anthony]

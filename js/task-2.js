/* eslint-disable linebreak-style */
import users from './users.js';

const getUsersWithEyeColor = (users, color) => users.filter((user) => color === user.eyeColor);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene
// Bush, объект Carey Barr]

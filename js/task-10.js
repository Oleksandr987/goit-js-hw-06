/* eslint-disable linebreak-style */
import users from './users.js';

const getSortedUniqueSkills = (users) => users
  .reduce((arrSkills, user) => {
    arrSkills.push(...user.skills);
    return arrSkills;
  }, [])
  .sort()
  .filter((user, i, users) => user !== users[i - 1]);


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit',
// 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
// 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

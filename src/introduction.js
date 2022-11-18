export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return b - a;
}

export function sum(values) {
  let arraySum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < values.length; i++) {
    arraySum += values[i];
  }
  return arraySum;
}

export function addToAll(values, toAdd) {
  const map = values.map(value => value + toAdd);
  return map;
}

export function average(values) {
  if (values.length === 0) {
    return null;
  }
  return sum(values) / values.length;
}

export function isAdult(user) {
  if (user.age >= 18) {
    return true
  }
  return false;
}

export function isChild(user) {
  if (user.age < 18) {
    return true
  }
  return false;
}

export function extractAge(users) {
  const ageArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < users.length; i++) {
    ageArray.push(users[i].age);
  }
  return ageArray;
}

export function adultFilter(users, type) {
  let returnArray = [];
  if (type === "adult") {
    returnArray = users.filter(user => user.age >= 18);
  } else if (type === "child") {
    returnArray = users.filter(user => user.age < 18);
  } else {
    return users;
  }
  return returnArray;
}

export function ageAverage(users, type) {
  return average(extractAge(adultFilter(users, type)));
}
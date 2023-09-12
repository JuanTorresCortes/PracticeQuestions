////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumOf2(num1, num2) {
  return num1 + num2 + x;
}
console.log(`Question 1 => ${sumOf2(5, 5)}`);

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const sumOf2Num = (num1, num2) => num1 + num2 + x;
console.log(`Question 2 => ${sumOf2Num(4, 4)}`);

// 3. Write a function that returns another function. (use arrow functions please)
const sumThisNum = (num1, num2) => {
  return sumOf2(num1, num2);
};
console.log(`Question 3 => ${sumThisNum(3, 3)}`);

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.
console.log("Question 4 => var y is within the scope of insideFunc");
const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.
function errorFunction(callback) {
  try {
    const result = callback();
    if (result == "success") {
      return `Question 5 => ${result}`;
    }
  } catch (error) {
    if (error) {
      return `Question 5 => ${error.message}`;
    }
  }
}
const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("sorry, there was an error");
  }
  return "success";
};

console.log(errorFunction(couldThrowError));
////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoods = userData.map((user) => ({
  id: user.id,
  favoriteFood: user.favorites.food.length,
}));
console.log("2nd Question 5 => ", favoriteFoods);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const favoriteFoodPizza = userData.reduce((acc, user) => {
  if (user.favorites.food.includes("pizza")) {
    acc.push(user.name);
  }
  return acc;
}, []);
console.log("Question 6 =>", favoriteFoodPizza);

// 7. Show an an example of a switch statement being used

let myValue = Math.ceil(Math.random() * 4);
switch (myValue) {
  case 1:
    console.log("Question 7 => 'i like turtles' ");
    break;
  case 2:
    console.log("Question 7 => 'i like cats' ");
    break;
  case 3:
    console.log("Question 7 => 'i like dogs' ");
    break;
  default:
    console.log("Question 7 => 'i like all animals'");
    break;
}

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userCombineData = {
  ...userPersonalData,
  ...userGameData,
};
console.log("Question => 8", userCombineData);

// 9. Make a copy of your new user object but override the birthday to december 31st
const newUserOverride = { ...userCombineData, birthday: "december 31st" };
console.log("Question => 9", newUserOverride);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
const copyOfAccomplishments = [...userCombineData.accomplishments];
console.log("Question => 10", copyOfAccomplishments);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const {
  favoriteThings: { food },
} = user;

console.log("Question => 11", food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const [firstFood, secondFood] = food;
console.log("Question => 12", firstFood, "and", secondFood);
// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];
const [name, age, ...foodItems] = data;
console.log("Question => 13", name, age, foodItems);
// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondFavoriteThing],
    },
  },
} = userInfo;
console.log(
  "Question => 14",
  userName,
  favoriteFood,
  favoriteThing,
  secondFavoriteThing
);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetchData()
  .then((data) => console.log("Question => 15", data))
  .catch((error) => console.log("Question => 15 There was an error", error));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(async () => {
  try {
    const data = await fetchData();
    if (data) {
      console.log("Question => 16", data);
    }
  } catch (error) {
    if (error) {
      console.log(`Question 16 => ${error.message}`);
    }
  }
})();

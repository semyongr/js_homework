// alert(2);

// var x1 = 2;
// const x2 = 3;
// let x3 = 4;

// console.log(x1);
// console.log(x2);
// console.log(x3);

// for (let i = 5; i < 10; i++) {
//     console.log(i)
// }

// let i = 0;

// while(i < 10){
//     console.log(i)
//     i++
// }

// console.log("=====");

// let j = 0;

// do {
//     console.log(j);
//     j++
// } while (j < 10)

// const num = 2;
// const str = "str";
// const bool = true;
// const null1 = null;
// const indef = undefined;
// const obj = {
//     a: 1,
// };
// const arr = [1, 2, 3]

// console.log(num)
// console.log(str)
// console.log(bool)
// console.log(null1)
// console.log(indef)
// console.log(obj)
// console.log(arr)

// const age = 17;
// const sex = "мужской"
// const firstName = "Артем"
// if (age >= 18) {
//   console.log(`Вам уже есть ${age}, проходите`);
// } else if (sex == "мужской"){
//   console.log(`Пока малолетека, тебе ${age}`);
// } else if (firstName === "Артем"){
//     console.log(`Пошел нахуй ${firstName}`)
// } else {
//     console.log("Ок")
// }

const userEmail = prompt("Введите свою почту");
const userName = prompt("Введите свое имя");
const userSurname = prompt("Введите свою фамилию");

const user = {
  email: userEmail,
  name: userName,
  surname: userSurname,
};

const usersArray = [
  {
    userEmail: "ivan@gmail.com",
    surname: "Ivanov",
    name: "Ivan",
  },
  {
    userEmail: "oleg@gmail.com",
    surname: "Ivanov",
    name: "Oleg",
  },
  {
    userEmail: "katya@gmail.com",
    surname: "Ivanova",
    name: "Katya",
  },
];

function checkUserData(userData, arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].userEmail === userData.email &&
      arr[i].name === userData.name &&
      arr[i].surname === userData.surname
    ) {
      flag = true;
    }
  }

  if (flag) {
    alert(`Привет, ${userData.name} ${userData.surname}`);
  } else {
    alert("Ты кто такой?");
  }
}

checkUserData(user, usersArray);

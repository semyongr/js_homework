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

let newarray = [];
let counter = 0;

const countUsers = prompt("Введите количество пользователей, которых вы хотите проверить")

for (let k = 0; k < countUsers; k++){
let userEmail = prompt("Введите свою почту");
let userName = prompt("Введите свое имя");
let userSurname = prompt("Введите свою фамилию");

let user = {
email: userEmail,
name: userName,
surname: userSurname,
}


for (let i = 0; i < usersArray.length; i++) {
    if (
      usersArray[i].userEmail === user.email &&
      usersArray[i].name === user.name &&
      usersArray[i].surname === user.surname
    ){
        counter += 1;
        newarray.push(usersArray[i].userEmail);
    }}
}
if (counter > 0){
    alert(`Количество совпадений: ${counter}`);
    alert(`Почта пользователей, прошедших проверку: ${newarray}`)
}else{
    alert("Пользователи не найдены")
}


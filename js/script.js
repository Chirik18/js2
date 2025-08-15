// let name = "Іван";
// let city = "Kyiv";
// city = name;
//console.log(city);

// let name = "Sasha";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Sasha

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//  console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.max(20, 10, 50, 40));

// console.log(Math.random() * (4 -2) + 2);

// const message = "Welcome to Bahamas!";
// console.log(message.length);  //19

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

// let user = {};
// user.name = "Sasha";
// user.age = 18;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);

// for (key in user) {
//    console.log(key);
//    console.log(user[key]);
// }



//дз2


// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3
 
// let value = -3;
// if (value > 0) {
//     console.log(true)
// } else {
//    console.log(false)
// }

 // Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
 
//let value = "qwerty";
//if(value==="test"){
//    console.log(true)
//} else {
//    console.log(false)
//}

// Якщо змінна більше 10 -  відніміть 5,
 //менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13
 
//let number = 13;
//if (number > 10) {
//    console.log(number - 5)
//} else {
//    console.log(number+5)
//}


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
 
// const num = prompt("Введіть число від 1 до 12:").toLowerCase();
// let months;
//
// switch (num) {
//    case "1":
//        months = "січeнь";
//        alert(`${months} має номер ${num}`);
//        break;
//    case "2":
//        months = "лютий";
//        alert(`${months} має номер ${num}`);
//        break;
//    case "3":
//        months = "березень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "4":
//        months = "квітень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "5":
//        months = "травень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "6":
//        months = "червень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "7":
//        months = "липень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "8":
//       months = "серпень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "9":
//        months = "вересень";
//        alert(`${months} має номер ${num}`);
//        break;
//       case "10":
//        months = "жовтень";
//        alert(`${months} має номер ${num}`);
//        break;
//        case "11":
//        months = "листопад";
//        alert(`${months} має номер ${num}`);
//        break;
//       case "12":
//        months = "грудень";
//        alert(`${months} має номер ${num}`);
//        break;
//
//    default:
//        alert(`Такого  ${num} не існує`)
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
 
// const num = prompt("Введіть тризначне число:");
// if (num.length === 3) {
//     const suma = (Number(num[0]) + Number(num[1]) + Number(num[2]));
//     console.log(`Сума цифр ${suma}`);
// }    else {
//     alert("Ввуденно не тризначне число");
//     }
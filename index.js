//task 1
let age = 100;
if (age < 50) {
  console.log("ნაკლებია 50ზე");
} else if (age > 20) {
  console.log("მეტია 20ზე");
} else {
  console.log("შეცდომა");
}

// age = 100 < 50 ? "ნაკლებია 50ზე" : "შეცდომა";
// console.log(age);

//task 2
let naMe = "მარიამ";
if (naMe == "მარიამ") {
  console.log(true);
} else {
  console.log(false);
}

//task 3
switch (naMe) {
  case "მარიამ":
    console.log(true);
    break;
  default:
    console.log(false);
}

//task 4
let name2 = "irakli";
console.log(typeof name2);

//task 5
let number = 10;
console.log(String(number));

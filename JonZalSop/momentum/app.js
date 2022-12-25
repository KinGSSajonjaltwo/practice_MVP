// alert("hi");
console.log(1000);
console.log("10sadasd");


const a = 5;
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a/b);

let myname = "kingJung"
console.log(myname)
myname = true
console.log(myname)

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);


const player = {
  name : "nico",
  sayHello: function(otherPersonName) {
      console.log("hello " + otherPersonName)
  },

};

player.sayHello("아아아아")

function minusFive(potato){
  console.log(potato - 5);
}

minusFive(5,6,6,7,9,10)

function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;
}


const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
  console.log("확인좀")
}else if (age < 18){
  console.log("머리에 피가  안말라")
}else if (age >= 18 && age <= 50){
  console.log("마셔 마셔")
}else if (age > 50 && age <= 80){
  console.log("건강 챙기쇼")
}else if (age > 80){
  console.log("뭐든 해")
}
//  IF STATEMENT
// syntax
// if(condition){
// code block
// }

const age: number = 20;

// KONDISI HARUS BOOLEAN (TRUE/FALSE)
if (age >= 17) {
  //  code block tidak akan dijalankan
  console.log("Anda tidak bisa buat KTP");
}
// ================ ELSE STATEMENT
// BACKUP PLAN DARI IF STATEMENT

const age1: number = 10;
if (age1 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// =========== ELSE IF STATEMENT
const input: string = "A";
const grade: string = input.toLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tida diketahui");
}

//======================== SWITCH CASE
const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak diketahui");
    break;
}
// === short cut prettier -> shift+alt+f



//  ======= LOGICAL OPERATOR
//  && -> AND
// || -> OR
// !  -> NOT

// OR
const car: string = "mercy";
//     false            true        ->true
if (car === "bmw" || car==="mercy"){
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND
const umur: number = 19;
const punyaSIM: boolean = true;
//       false              true    ->false  
if (umur >= 18 &&  punyaSIM === true){
    console.log("boleh bawa kendaraan");
} else {
    console.log("belum boleh bawa kendaraan");
}

//  NOT -> MEMBALIKKAN NILAI BOOLEAN
const isSunny = true;
const isRaining = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ========= TERNARY OPERATOR
// shortcut untuk if else condition
// condition ? true : false

const str: string = "typescript"

if (str === "javascript"){
    console.log("javascript");
} else {
    console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");


console.log (str == "javascript"
? "javascript"
: str === "typescript"
? "typescript"
: "not found"
);

// ================================= LOOP STATEMENT ( perulangan )
// rangkaian instruksi yg dilakukan berulang kali hingga kondisinya tidak terpenuhi //

// TYPE LOOP -> mempunyai tiga statement 
// STATEMENT 1 : menginisialkan variable dari looping itu sendiri 
// STATEMENT 2 : mendifine kondisi dari looping tersebut
// STATEMENT 3 : kode yg dieksekusi di akhir setiap iterasi

// syntax : for(statement1;statement2;statement3){
// code block yg akan diulang-ulang
// }

for (let i = 0; i < 5; i++){
    console.log("hello word");
}    


//  WHILE LOOP

let i: number =1;

while (i < 10){
    console.log("hello world");
    i++;
}

// DO WHILE LOOP

let count: number = 1;

do{
    console.log(" ini iterasi ke: " + count);
    count++;
} while (count <= 5);

// ================ BREAK
// untuk menghentikan loop

let sum: number = 0;
while (true){
    console.log("sum : " + sum);
    
    if (sum >= 5) break;

    sum++;
}

// ======================== CONTINUE
// melakukan skip pada looping

for (let i = 0; i < 5; i++){
    if (i === 3) continue;

    console.log(i);
    
}
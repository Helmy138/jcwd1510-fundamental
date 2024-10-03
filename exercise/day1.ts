// NO 1 -> area of rectangle.
const W = 3 
const L =5
console.log(W*L);

// NO 2 -> PERIMETER OF RECTANGLE
const p = 5
const l = 3
const c = (p*2)+(l*2)
console.log(c);

// NO 3 -> DIAMETER,CIRCUMFERENCE AND AREA OF CIRCLLE
const Radius = 5
console.log(2*Radius);
console.log(2*22/7*Radius);
console.log(22/7*(Radius*Radius));

// NO 4 -> ANGLES OF TRIANGLE IF TWO ANGLES ARE GIVEN
const a = 80
const b = 65
console.log(180-(a+b));

// NO 5 -> CONVERT DAYS TO YEARS, MONTHS AND DAYS
const hari: number = 400;
const tahun: number = Math.floor(hari / 365); 
const bulan: number = Math.floor((hari % 365) / 30);
const tanggal: number = Math.floor(hari % 365) % 30);
console.log(`${tahun} tahun, ${bulan} bulan, hari ${tanggal}`);


// NO 6 -> DIFFERENCE BETWEEN DATES IN DAYS
const date1: Date = new Date("2024-01-01");
const date2: Date = new Date("2024-10-10");
const bedaTanggal: number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari: number = bedaTanggal / (1000 * 3600 * 24);
console.log(`perbedaaan hari dan tanggal pertama dan kedua : ${bedaHari}`));




// git config --list
// git config --global user.name "helmy138"
// git config --global user.email "helmyafif714@gmail.com"

// NO 1 //
const angka: number=8;

if(angka %2==0){
    console.log('even');
    
}else{
    console.log('odd');
    
}

// NO 2 //
const number: number=6;
let isPrime: boolean =true;

if(number === 1){
    console.log('1 is not a prime number');
}
else if(number > 1){

    for(let i =2;i<= number/2;i++){
        if(number% i==0){
            break;
        }
    }
    if (isPrime){
        console.log(`${number} bilangan prima`);
    } else {
        console.log(`${number} bukan bilangan prima`);
    }
}

// NO 3 //
const N: number=3;
let sum: number=0;
for(let i=1;i<=N;i++){
    sum+=1
}
console.log(sum);

// NO 4 //


// NO 5 //
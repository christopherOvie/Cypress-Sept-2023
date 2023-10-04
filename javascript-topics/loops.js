const cars = ["Audi", "Benz", "Suzuki", "Toyota"]
//traditional forloop
// for(var i =0;i<cars.length;i++) {
//     console.log(cars[i]);
// }

//foreach
cars.forEach((value)=>{
console.log(value);

if(value ==="Audi"){
    console.log("audi is expensive car");  
}
})
//for in 
const person={
    firstName: "John",
    lasstName: "doe",
    age: 67,
    city: "lagos",
    country: "usa"
}
let output="";
for(let x in person){
output +=person[x]+" ";
}
console.log(output);


//do while loop
let iterator =0;
do{
    iterator ++;
   // console.log(iterator);

}while(iterator<5)
//while loop

let x=0;
while(x<10){
    console.log(x);
    x++;
    //console.log(x);
}
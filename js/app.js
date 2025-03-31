
let i = 10
let sum = 0
function lorem (){
    if(i < 100 ){
        sum = sum + i     
        i+=10
        lorem()
    }
}
lorem()
console.log(sum);

{
    let i = 0
    let array = [2,5,1,6]
    let total = 0
    function recursive() {
    if(i < array.length){
    total+= array[i]
    i++
    recursive()
    }
  }
  recursive()
  console.log(total);
  
}
// 1 recursive
{
    let i = 1
    function toq(){
        if(i < 10){
            console.log(i);
            i+=2
           toq()
        }
    }
    toq() 
}
// 2 loop
{
    let a = 10
    for(i=1; i<10; i+=2){
        console.log(i);
    }
}
// 3 recursive
{
    let i = 100
    function number(){
        if(i > 0){
            console.log(i);
            i-=10
            number()
        }
    }
    number()
}
// 4 loop
{
    let a = 0
    for(i = 100; i > a; i-=10){
        console.log(i);
        
    }
}
// 5 recursive
{
    let i = 0
    let sum = 0
    function lorem (){
        if(i <= 10 ){
            sum = sum + i     
            i++
            lorem()
        }
    }
    lorem()
    console.log(sum);
}
// 6 loop
{
    let a = 10
    let sum = 0
    for(i=0;i <= a; i++){
        sum = sum + i 
    }
    console.log(sum);
}
// 7 recursive
{
    let i = 0
    function laylo (){
        if(i< 5){
            console.log("Laylo");
            i++
            laylo()
        }
    }
    laylo()

}
//  8 loop
{
    let n = 5
    for(i=0; i < n; i++){
        console.log("Laylo");      
    }
}
//  9 recursive
{
    let a = 2
    let n = 3
    function darajasi(a, n) {
        if (n === 0) 
        return 1; 
        return a * darajasi(a, n - 1); 
    }
    console.log(darajasi(a, n));
}

// 10 loop
{
    let a = 2;
    let n = 3;

function darajasi(a, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= a;
    }
    return result;
}

console.log(darajasi(a, n));9
}
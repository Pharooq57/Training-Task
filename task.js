//task 4
alert("hello world!")
//task 5
const day= 'Thursday'
const position= 4
const output= 'today is '+day+','+'it is the '+position+'th '+'day of the week.'
console.log(output)
//task 6
const score=18
if (score%2===0) {
    console.log('number is even')
} else {
    console.log('number is odd' )
}
//task 7
const side1= '2cm'
const side2= '2cm'
const side3= '4cm'
if (side1===side2 && side1===side3 &&side2===side3) {
    console.log(' Equilateral triangle ')
}else if(side1===side2 || side1===side3 || side2===side3){
    console.log('Isosceles triangle')
}else{
    console.log('Scalene triangle')
}
//task 8
for(number=1;number<=20;number=number+1){
    if(number %2===1){
        console.log(number)
    }
}
//task 9
function areaOfRectangle(lenght,width){
    const area= lenght*width
    console.log(area)
}
areaOfRectangle(2,5)

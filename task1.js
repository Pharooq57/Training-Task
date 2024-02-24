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
//task 10
function areaOfRec(lenght,width){
    const area= lenght*width
    return area
}
const area = areaOfRec(2, 4);
console.log(area);
///task 11
const friends=['eniola','tobi','ridwan','vicky','Abdul',]
console.log(friends)
//task 12
bestFriend=friends[0]
console.log(bestFriend)
//task 13
const book = {
    title: "The long lost love",
    description: "A love in fiction",
    numberOfPages: 218,
    author: "kunle Adenuga",
    reading: true
}
console.log(book)
//task 14
const novel = {
    title: "The long lost love",
    description: "A love in fiction",
    numberOfPages: 218,
    author: "kunle Adenuga",
    reading: true,
    toggleReadingStatus:function(){
    if(novel.reading===true){
        novel.reading=false
    }else{
        novel.reading=true
    }
}
}
novel.toggleReadingStatus()
console.log(novel.reading)
//task 15
const booksInLibrary = [
    {
        title: "The long lost love",
        description: "A love in fiction",
        numberOfPages: 218,
        author: "kunle Adenuga",
        reading: true,   
    },
    {
        title: "The broken boy",
        description: "A love in fiction",
        numberOfPages: 118,
        author: "kunle Adenuga",
        reading: false,
    },
    {
        title: "mothers prayer",
        description: "A love in fiction",
        numberOfPages: 218,
        author: "kunle Adenuga",
        reading: true,
    },
    {
        title: "I wish I could win her back",
        description: "A love in fiction",
        numberOfPages: 218,
        author: "kunle Adenuga",
        reading: true,
    }
];

for (let i = 0; i < booksInLibrary.length; i++) {
    const book = booksInLibrary[i];
    if (book.reading === true) {
        console.log(book.title);
    }
}

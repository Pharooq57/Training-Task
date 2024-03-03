//Calculate the sum of numbers within an array.
function arraySum(addArray){
    let total = 0; 
    for(let i = 0; i < addArray.length; i++){ 
      total += addArray[i];
    }
    return total;
  }
  const numbers = [10, 25, 13, 40, 5];
  const result = arraySum(numbers);
  console.log(result);
//Create a length converter function.
function convertLength(centimetre){
    const meter= centimetre/100
    return(meter)
  }
  const meterlenght=convertLength(4000)
  console.log(meterlenght)
//Print all even numbers from 0 – 100.
for (let i = 1; i <=100; i++) {
    if(i%2==0){
      console.log(i)
    }
}
//Print a table containing multiplication tables.
function multiplicationTable(size){
  for(let i=1;i<=size;i++){
    let row=""
    for(let j=1;j<=size;j++){
      row +=(i*j)+'\t';
    }
    console.log (row)
  }
}
console.log(multiplicationTable(10))
//Create a function that reverses an array.
function zoo(animals){
    listAnimals=animals.reverse()
    return(listAnimals)
  }
  const animal=zoo(['lion','tiger','gorilla','cheeta','antelope','cat'])
  console.log(animal)
//Sort an array of strings in alphabetical order.
function zoo(animals){
    listAnimals=animals.sort()
    return(listAnimals)
  }
  const wildAnimal=zoo(['lion','tiger','gorilla','cheeta','antelope','cat'])
  console.log(wildAnimal)
//  Sort an array of numbers in descending order
function descendScore(scoreValue){
  scoreValue.sort((b,a)=>a-b)
  return scoreValue;

}
const mark=[23,45,21,30,60,80,50]
console.log (descendScore(mark))
//Return a Boolean if a number is divisible by 10
sonAge=60
if(sonAge%10==0){
  console.log(true)
}else console.log(false)
//Return the number of vowels in a string
function totalVowel(sentence){
  const vowel=['a','e','i','o','u']
  let count=0
  for(let i=0;i<sentence.length;i++){
    if (vowel.includes(sentence[i])){
      count++
    }
  }
  return count;
}
const sentence="hello, good morning"
console.log(totalVowel(sentence))
//Create a function that filters out negative numbers
function negativeScores(score){
  const negative=[]
  for(i=0; i<score.length;i++){
    if(score[i]<0){
      negative.push(score[i])
    }
    
  }
  return negative
}
const score=[5,-5,4,3,-2,-4,6,9,10]
console.log (negativeScores(score))
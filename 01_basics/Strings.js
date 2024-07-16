let name = "rahulkumar"
let repoCount = 50 


//let result = name + repoCount 

// the above concatenation method is kind of outdated 

// Instead we use the interpolation method meaning we use backticks and write placeholders where we use to inject the values 

let concatenatedValue = (`Hello my name is ${name}  and my repoCount is ${repoCount}`)

console.log(concatenatedValue)
console.log(`${name} ${repoCount}`)


// second way to define a String is by using the new keyword 
const newName= new String("rahul")
console.log(newName)
console.log(newName[3])
console.log(newName.repeat);

//console.log(result)

const gameName = name.substring(2,4)
console.log(gameName);
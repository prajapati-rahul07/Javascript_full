const num= [1,4,6,565,56]
//console.log(num.length);

const array1= ["rahul","priyanka","priya"]
//console.log(array1.reduceRight);

const array2= new Array("rahul", 1,23,true)
//console.log(array2);


num.push(232)
//console.log(num)

const a1= num
console.log("A",a1)

const a2= num.slice(1,3)
console.log("B",a2);

const a3= num.splice(1,3)
console.log(num);
console.log("C",a3);


// slice()  doesn't changes the array on which its applied 

// splice()  changes the array on which it's applied meaning it pulls out the elements in a seperate array and the rest of the elements in the different array (two different arrays re generated by using splice)
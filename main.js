// console.log("Hello,World!")

// day two
// let a =2;
// let b=6;
// const addNumbers=a+b;
// console.log(addNumbers)

//Day 3
// let number =11;
// if(number %2==0){
//     console.log('even number')
// }else{
//     console.log("this is an odd number")
// }

// Day four
// Question 4: Write a JavaScript program that takes two numbers as input and compares them. If the first number is greater, it should display "First number is greater." If the second number is greater, it should display "Second number is greater." If both are equal, it should display "Both numbers are equal."

// let fistNumber =100;
// let secondNumber = 500;
// if (fistNumber > secondNumber){
//     console.log("first number is great")
// }else if(secondNumber>fistNumber){
//     console.log("second Number is greater")
// }else{
//     console.log("both numbers are equal")
// }

//Question 5: Write a JavaScript program that takes an array of numbers and finds the largest number in the array. Display the largest number in the console.

// let numArr=[10,99,20,100,15,300]
// let largestNumber=Math.max(...numArr);
// console.log(largestNumber)

// //Question 6: Write a JavaScript program that uses a for loop to print all the numbers from 1 to 10 in the console.

// for(i=1;i<=10;i++){
//     console.log(i)
// }

// question7 
//Write a JavaScript program that takes a number as input and prints its multiplication table up to 10.
// let num=2 ;
// for (i=1;i<=10;i++){
//    console.log(num+"*"+i+"="+num*i)
// }   

//Question 8: Write a JavaScript program that calculates the sum of all numbers from 1 to a given number (for example, from 1 to 100).
// let sum=0;
// for (i=1;i<=100;i++){
//     sum+=i;
//     console.log("the total sum is "+sum)
// }

//Question 9: Write a JavaScript program that reverses a string entered by the user.
// let string="hello world";
// let reversestr=string.split("").reverse().join("");
// console.log(reversestr)
//JavaScript String split()
// A string can be converted to an array with the split() method:

//Question 10: Write a JavaScript program that checks if a given number is a prime number or not.
// let number = 5;
// let isPrime = true;  // Assume the number is prime

// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {  // If number is divisible by i, it's not prime
//         isPrime = false;
//         break;  // Exit the loop since it's not prime
//     }
// }

// if (isPrime) {
//     console.log("Number is prime");
// } else {
//     console.log("Number is not prime");
// }

//Question 11: Write a JavaScript program that takes an array of numbers and prints out only the even numbers.
// let num=[2,3,6,7,20,30];
// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         console.log("evens=",num[i])
//     }
// }

//Question 12: Write a JavaScript program that takes an array of numbers and finds the sum of all the numbers in the array.
// let arrNums=[1,2,3,4,5,6];
// let sum=0;
// for (i=0;i<arrNums.length;i++){
//     sum+=arrNums[i];
// }
// console.log("the total sum is",sum);

//Question 13: Write a JavaScript program that takes a number from the user and prints the multiplication table of that number (up to 10).
// let num =2;
// for (i=1;i<=10;i++){
//    console.log(num+"*"+i+"="+num*i)
// }

//Write a JavaScript program that takes an array of numbers and prints out only the odd numbers.
// let num=[2,3,4,6,5,7,9];
// for (i=0;i<num.length;i++){
//    if(num[i]%2!==0){
//       console.log("odds numbers ",num[i])
//    }
// }

//Question 15: Write a JavaScript program that finds the factorial of a given number.
// let num =5;
// let fact=1;
// for (i=1;i<=num;i++){
//    fact*=i;
// }
// console.log("the number",num,"the fatorial is ",fact)

//Question 16: Write a JavaScript program that takes a string and counts how many vowels (a, e, i, o, u) it contains.

// let vowels="kashhussain";
// let counts=0;
// for(i=0;i<vowels.length;i++){
//    if(vowels[i]==="a"||vowels[i]==="e"||vowels[i]==="i"||vowels[i]==="o"||vowels[i]==="u"){
//       counts++;
      
//    };

// };
// console.log("Total number of vowels:", counts); 

//Question 17: Write a JavaScript program that takes an array of numbers and prints out only the even numbers.
// let arr=[2,9,17,4,7,6,10];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log("evens",arr[i])
//     }
// }

// let numsArr=[1,2,3,4,5,6];
// let sum=0;
// for(i=0;i<numsArr.length;i++){
//     sum+=numsArr[i];
// };
// console.log("the total sum is",sum);

// //Question 19: Write a JavaScript program that takes a string and checks whether it is a palindrome (reads the same forwards and backwards).
// let str="madam";
// let reverse=str.split("").reverse().join("");
// if(str===reverse){
//     console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }

//Question 20: Write a JavaScript program that finds the smallest number in an array of numbers.
// let arr=[2,7,8,5,36,10,0.5];
// let smallest=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest=arr[i];
//     }
// }
// console.log("the smallest number is",smallest)


//Question 21: Write a JavaScript program that counts how many times a specific element appears in an array. For example, given the array [2, 3, 4, 3, 5, 3, 6], count how many times the number 3 appears.
let array=[1,2,4,2,45,7,2,2];
let count=0;
for (i=0;i<array.length;i++){
    if(array[i]==2){
        count++;
    }
};
console.log("the count is",count)
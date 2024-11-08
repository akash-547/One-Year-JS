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
// let array=[1,2,4,2,45,7,2,2];
// let count=0;
// for (i=0;i<array.length;i++){
//     if(array[i]==2){
//         count++;
//     }
// };
// console.log("the count is",count)

// let array=[1,2,4,31,6,6,20];
// for(i=0;i<array.length;i++){
    
//     if(array[i]%2==0){
//         console.log("even numbers",array[i])
//     }
// }

//Question 23: Write a JavaScript program that finds the sum of all odd numbers in an array. For example, given the array [1, 2, 3, 4, 5, 6, 7], the program should calculate the sum of odd numbers (1, 3, 5, 7).
// let oddNums=[1,2,3,4,5,7,8];
// let sum=0;
// for (i=0;i<oddNums.length;i++){
//     if(oddNums[i]%2!==0){
//         sum+=oddNums[i];
//     };
// };
// console.log('the total odd Numbers sum is',sum)

//Question 24: Write a JavaScript program that checks if a number is a palindrome. A palindrome is a number that remains the same when its digits are reversed (e.g., 121, 1331).
// let num = 10221;
// let reverseNum = num.toString().split("").reverse().join("");

// if (num.toString() === reverseNum) {
//     console.log("Palindrome", reverseNum);
// } else {
//     console.log("Not palindrome", reverseNum);
// }

//Question 25: Write a JavaScript program that finds the largest number in a 2D array (an array of arrays). For example, given the 2D array [[3, 5, 1], [8, 2, 9], [4, 7, 6]], the program should find and print the largest number (9).
// let array=[[1,2,3],[4,5,6],[7,8,9]];
// let largest=array[0][0];
// for(i=0;i<array.length;i++){
//     for(j=0;j<array[i].length;j++){
//         if(array[i][j]>largest){
//             largest=array[i][j];
//         }
//     }
// }
// console.log("the largest number is",largest)

//Question 26: Write a JavaScript program that removes all duplicate elements from an array. For example, given the array [1, 2, 3, 2, 4, 1, 5], the program should return an array with only unique elements: [1, 2, 3, 4, 5].
    // let array=[1,2,3,2,4,1,5];
    // let newArray=[];
    // for(i=0;i<array.length;i++){
    //     if(!newArray.includes(array[i])){
    //         newArray.push(array[i]);
    //     }
    // }
    // console.log(newArray)

    //Question 27: Write a JavaScript program that finds the second largest number in an array. For example, given the array [10, 5, 8, 20, 15], the program should return 15 (the second largest number after 20).
// let array=[10,5,8,20,15];
// let largest=array[0];
// let secondLargest=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]>largest){
//         secondLargest=largest;
//         largest=array[i];
//     }else if(array[i]<largest && array[i]>secondLargest){
//         secondLargest=array[i];
//     }
// }
// console.log("the second largest number is",secondLargest)

//Question 28: Write a JavaScript program that takes an array of numbers and returns a new array with each number doubled. For example, given the array [1, 2, 3, 4], the program should return [2, 4, 6, 8].
// let array= [2,4,6,16];
// let newArray=[];
// for(i=0;i<array.length;i++){
//     newArray.push(array[i]*2);  
// }
// console.log(newArray)

//Question 29: Write a JavaScript program that replaces all negative numbers in an array with zero. For example, given the array [3, -1, 2, -7, 5, -3], the program should modify the array to [3, 0, 2, 0, 5, 0].
// let array=[3,-1,2,-7,5,-3];
// for(i=0;i<array.length;i++){
//     if(array[i]<0){
//         array[i]=0;
//     }
// }
// console.log(array)

//Question 30: Write a JavaScript program that counts the number of vowels (a, e, i, o, u) in a given string. For example, given the string "hello world", the program should count and return 3 vowels.
// let str="kash hussain";
// let count=0;
// for(i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         count++;
//     };
   
// };
// console.log(count);

//Question 31: Write a JavaScript program that removes all falsy values from an array. Falsy values in JavaScript are values that evaluate to false when converted to a Boolean, including 0, "" (empty string), null, undefined, NaN, and false. For example, given the array [0, "hello", false, "", 42, null, "world", undefined, NaN], the program should return ["hello", 42, "world"].
// let array=[0,"hello",false,"",42,null,"world",undefined,NaN];
// let newArray=[];
// for(i=0;i<array.length;i++){
//     if(array[i]){
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray)

//Question 32: Write a JavaScript program that finds the sum of all even numbers in an array. For example, given the array [1, 2, 3, 4, 5, 6], the program should return 12 (since 2 + 4 + 6 = 12).
// let numbers=[1,2,3,4,5,6,6];
// let sum=0;
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         sum+=numbers[i];
//     };
// };
// console.log("the sum of evens numbers",sum)

//Question 33: Write a JavaScript program that finds the difference between the largest and smallest numbers in an array. For example, given the array [3, 7, 2, 9, 5], the program should return 7 (since 9 - 2 = 7).
// let arry=[3,7,2,9,5];
// let largest=arry[0];
// let smallest=arry[0];
// for(i=0;i<arry.length;i++){
//     if(arry[i]>largest){
//         largest=arry[i];
//     }else if(arry[i]<smallest){
//         smallest=arry[i];
//     }
// };
// console.log("the largest number is",largest);
// console.log("the smallest number is",smallest);
// console.log("the difference is",largest-smallest);

//Question 34: Write a JavaScript program that reverses the words in a given sentence. For example, given the string "JavaScript is fun", the program should output "fun is JavaScript".
// let str ="javascript is fun";
// let reverseStr=str.split(" ").reverse().join(" ");
// console.log(reverseStr);

//Question 35: Write a JavaScript program that removes all duplicate values from an array. For example, given the array [1, 2, 2, 3, 4, 4, 5], the program should return [1, 2, 3, 4, 5].
// let array =[1,2,2,3,4,4,5];
// let newArray=[];
// for(i=0;i<array.length;i++){
//     if(newArray.indexOf(array[i])===-1){
//         newArray.push(array[i]);
//     };
// };
// console.log(newArray);

//Question 36: Write a JavaScript program that checks if an array is sorted in ascending order. If the array is sorted, print true; otherwise, print false.
// let array=[1,2,3,4,5,6,7];
// let flag=true;  
// for(i=0;i<array.length-1;i++){
//     if(array[i]>array[i+1]){
//         flag=false;
//     }
// }
// if(flag){
//     console.log("true");
// }else{
//     console.log("false");
// }

//Question 37: Write a JavaScript program that finds the difference between the largest and smallest numbers in an array. For example, given the array [3, 7, 1, 9, 4], the program should calculate 9 - 1 = 8 and output 8.
// let array=[3,7,1,9,4];
// let largest=array[0];
// let smallest=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]>largest){
//         largest=array[i];
//     }else if(array[i]<smallest){
//         smallest=array[i];
//     };
// };
// console.log("the largest number is",largest);
// console.log("the smallest number is",smallest);
// console.log("the difference is",largest-smallest);

//Question 38: Write a JavaScript program that filters out all negative numbers from an array. For example, given the array [5, -3, 8, -1, 4, -6], the program should return [5, 8, 4].
let array =[5,-3,8,-1,4,-6];
let newArray=[];
for(i=0;i<array.length;i++){
    if(array[i]>0){
        newArray.push(array[i]);
    }   
}
console.log(newArray);
//Task 1
let yourword = prompt("Enter Your Word");
let reverseword = "";
for (let i = yourword.length - 1; i >=0 ; i--) {
 reverseword+=yourword[i];   
}
alert("Your word is " + reverseword);



//Task 2
let numb1 = parseInt(prompt("Enter first number"))
let numb2 = parseInt(prompt("Enter second number"))
let min_value = numb1>numb2 ? numb2 : numb1;
let max_value = numb1>numb2 ? numb1 : numb2;
let arr = new Array;
let count = 0;


    for (let i = min_value; i <= max_value; i++) {
        let prime_flag = true;
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                prime_flag = false;
                break;
            }   
        }
        
        if (prime_flag) {
            arr.push(i); 
        }
    }
    alert("Your smallest prime number is  " + arr[0] + " and biggest is " + arr[(arr.length)-1]);
    

        
    


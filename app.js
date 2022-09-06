// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
/* console.log("One")

setTimeout(() => {
    console.log("Two")
}, 3500);

console.log("Three") */

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
/* const getNumber = () =>{
    
    const number = parseInt(prompt("Get The first number :"));
    const number1 = parseInt(prompt("Get The second number :"));
    const add = number + number1;
    
    console.log(`The sum of ${number} and ${number1} is ${add}`); 
} */

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
/* const getQustion = () =>{
    const qustion = confirm("Do you want to see you location on browser")
    if(qustion === true){
        alert("Show the location")
    }
    else{
        alert("Ja vaag")
    }
} */




let yourName = ''
// input your name above
function randomGen(messageDtb){
    messageDtb = [`Hello ${yourName}`,`How are you ${yourName}?`, `${yourName} are you doing well today?`, `Have a nice day ${yourName}`, `Wish you a blessed day ahead ${yourName}`, `Enjoy your day ${yourName}`]
//the message database
    for (let i=5 ; i < messageDtb.length; i++){
        r = Math.floor(Math.random() * i);
        console.log(messageDtb[r]);
// a for loop that iterates through the message database and prints random messages
}
}
console.log(randomGen())
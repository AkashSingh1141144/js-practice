// Asynchronous 

const randomColor = () => {
   const hex = '0123456789ABCDEF'
   let color = '#'
   for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
      
   }
   return color;
}

// console.log(randomColor());
let intervalID;
const startChangingColor = () => {
 if (! intervalID) {
   intervalID =  setInterval(changeBgColor, 2000)
 }
   function changeBgColor() {
      document.body.style.backgroundColor = randomColor()
   }
};
document.querySelector('#start').addEventListener('click', startChangingColor)


const stopChangingColor = () => {
   clearInterval(intervalID);
   intervalID = null;
};
document.querySelector('#stop').addEventListener('click', stopChangingColor)
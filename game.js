var colors = generateRandomNumbers(numOfSquares);

   //selecting HTML
   var sqaures = document.querySelectorAll(".square");
   var colorDisplay = document.getElementById("colorDisplay");
   var messageDisplay = document.querySelector("#messageDisplay");
   var h1 = document.querySelector("h1");
   var reset = document.querySelector("#reset");
   var easyBtn = document.getElementById("easyBtn");
   var hardBtn = document.getElementById("hardBtn");



    //additional varaibles 
    var pickedColor = pickColor();
    var clickedColor;
    var randomNum;
    var numOfSquares = 6;

   

  
   

   for(var i = 0; i<colors.length;i++)
{
   //add colors
   sqaures[i].style.backgroundColor = colors[i];
   //add click listeners

sqaures[i].addEventListener("click", function(){
//get click color
console.log(clickedColor, pickedColor);
clickedColor = this.style.backgroundColor;
//compared clicked color with choice
if(clickedColor === pickedColor)
{messageDisplay.textContent = "Correct!";
changeColors(clickedColor);
h1.style.backgroundColor = clickedColor;
reset.textContent = "Play again?"
}

else{this.style.backgroundColor = "#232323";
messageDisplay.textContent = "Try Again";}

});

}

//set your target
colorDisplay.textContent = pickedColor;

function changeColors(color){
//loop through all sqaures
for (var i = 0; i<sqaures.length; i++)
{
sqaures[i].style.backgroundColor = color;

}

}

function pickColor(){

randomNum =(Math.floor(Math.random()*colors.length));
return colors[randomNum];

}

function generateRandomNumbers(num){

   // make an array
   var arr = [];
   //add num random colors to array

   for(var i = 0; i<num; i++){
   //get random color and push into arr

   arr.push(randomColor());

   }
      //return array
   return arr;
  
}

function randomColor(){

   var arr = [];
   // pick a "red" from 0-255
  var red = Math.floor(Math.random()*256);
   // pick a "red" from 0-255
   var green = Math.floor(Math.random()*256);
   // pick a "red" from 0-255
   var blue = Math.floor(Math.random()*256);

  return "rgb(" + red +", " + green + ", " + blue + ")";

      

     

}

reset.addEventListener("click", function(){

   reset.textContent = "New colors";
   h1.style.backgroundColor = "steelblue";

      messageDisplay.textContent = "";
   // generate all new colors
   colors = generateRandomNumbers(numOfSquares);
   //pick a random color from the array
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   //change the color of the sqaures 
   for(var i = 0; i<colors.length;i++)
   {
      //add colors
      sqaures[i].style.backgroundColor = colors[i];}
 })

 easyBtn.addEventListener("click", function(){

   easyBtn.classList.add("selected")
   hardBtn.classList.remove("selected");
   numOfSquares = 3;
   colors = generateRandomNumbers(numOfSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for (var i = 0; i<sqaures.length;i++)
   {
      if(colors[i]){

         sqaures[i].style.backgroundColor = colors[i];
      }

      else{sqaures[i].style.display = "none";}


   }
 });

 hardBtn.addEventListener("click", function(){

   easyBtn.classList.remove("selected")
   hardBtn.classList.add("selected");
   numOfSquares = 6;
   colors = generateRandomNumbers(numOfSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

  

   for (var i = 0; i<colors.length;i++)
   {
         sqaures[i].style.backgroundColor = colors[i];
         sqaures[i].style.display = "block";
   }

   
      
 });
var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6);
console.log(randomNumber1);

var img=["images/dice1.png", "images/dice2.png" ,"images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var image1=img[randomNumber1];
console.log(image1);


var dice1=document.querySelectorAll(".img1")[0];
dice1.setAttribute("src",image1);

// ==========================================


var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6);
console.log(randomNumber2);

var image2=img[randomNumber2];
console.log(image2);


var dice2=document.querySelectorAll(".img2")[0];
dice2.setAttribute("src",image2);

// ================================================


if(randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML="Draw";

}
else if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 wins";

}

else
{
		document.querySelector("h1").innerHTML="Player 2 wins";

}
//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
carWidth = 75;
carHeight = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
carX = 5
carY = 255
function add() {
	//carregar carro e imagens de fundo na tela.
	BackgroundImgTag = new Image();
    BackgroundImgTag.onload = uploadBackground;
    BackgroundImgTag.src = backgroundImage;

    greencarImgTag = new Image();
    greencarImgTag.onload = uploadGreenCar;
    greencarImgTag.src = greencarImage;
}

function uploadBackground() {
    ctx.drawImage(BackgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
    ctx.drawImage(greencarImgTag, carX, carY, carWidth, carHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function right()
{
	if(carX<= 750){
		carX = carX + 10;
		console.log("Quando a tecla p/ direita for pressionada, x =" + carX + "y=" +carY)
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(carX >= 0){
		carX = carX - 10;
		console.log("Quando a tecla p/ esquerda for pressionada, x =" + carX + "y=" +carY)
		uploadBackground();
		uploadGreenCar();
	}
}

function up()
{
	if(carY >= 0){
		carY = carY - 10;
		console.log("Quando a tecla p/ cima for pressionada, x =" + carX + "y=" +carY)
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(carY<= 350){
		carY = carY + 10;
		console.log("Quando a tecla p/ baixo for pressionada, x =" + carX + "y=" +carY)
		uploadBackground();
		uploadGreenCar();
	}
}

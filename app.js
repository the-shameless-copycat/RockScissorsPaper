let userScore = 0;
let computerScore = 0;


// "catch" the DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// end cathing thed DOM


function getComputerChoice (){

	const choices = ["r","p","s"];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber]

}


function convertToWord(letter){
	if (letter=="r") return "Rock";
	if (letter=="s") return "Scissors";
	return "Paper";
}


function win(uc, cc){

	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div= document.getElementById(uc);

	result_p.innerHTML = `${convertToWord(uc)}${smallUserWord} beats ${convertToWord(cc)}${smallCompWord}. You win :)`;
	userChoice_div.classList.add("green-glow");
	setTimeout( ()=> userChoice_div.classList.remove("green-glow"), 300);


}


function lose(uc,cc){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div= document.getElementById(uc);
	result_p.innerHTML = `${convertToWord(uc)}${smallUserWord} loses to ${convertToWord(cc)}${smallCompWord}. You lost :(`;
	userChoice_div.classList.add("red-glow");
	setTimeout( ()=> userChoice_div.classList.remove("red-glow"), 300);

	
}

function draw(uc,cc){


	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div= document.getElementById(uc);
	result_p.innerHTML = `${convertToWord(uc)}${smallUserWord} equals ${convertToWord(cc)}${smallCompWord}. It's a draw :|`;
	userChoice_div.classList.add("gray-glow");
	setTimeout( ()=> userChoice_div.classList.remove("gray-glow"), 300);


	
}

function game(userChoice){

	const ComputerChoice = getComputerChoice();

	switch (userChoice + ComputerChoice){
		// user wins
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, ComputerChoice);
			break;
		//  user  loses
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, ComputerChoice);
			break;
		case "rr":	
		case "pp":
		case "ss":
			draw(userChoice, ComputerChoice);
	}

}



function main(){

	rock_div.addEventListener("click", ()=> game("r"));

	paper_div.addEventListener("click", ()=> game("p"));

	scissors_div.addEventListener("click", ()=>game("s"));

	
}

main();
// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
var lettersArray = Array.from(letters);
console.log(letters.split(""))
console.log(lettersArray);

let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter=>{
	let span=document.createElement("span");
	let theLetter = document.createTextNode(letter);
	span.appendChild(theLetter);
	span.className="letter-box";
	lettersContainer.appendChild(span);
});

const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys=Object.keys(words);
console.log(allKeys)
let randomPropNumber=Math.floor(Math.random()*allKeys.length);
console.log(randomPropNumber);
let randomPropName=allKeys[randomPropNumber];
console.log(randomPropName);
let randomPropValue=words[randomPropName];
console.log(randomPropValue);
let randomValueNumber=Math.floor(Math.random()*randomPropValue.length);
console.log(randomValueNumber);
let randomValueValue=randomPropValue[randomValueNumber];
console.log(randomValueValue);
document.querySelector(".game-info .category span").innerHTML=randomPropName;


let lettersGuessContainer = document.querySelector(".letters-guess");
let letterAndSpace=Array.from(randomValueValue);
console.log(letterAndSpace);

letterAndSpace.forEach(letter=>{
	let emptySpan=document.createElement("span");
	if(letter ===" "){
		emptySpan.className="with-space";
		emptySpan.style.content="a7a "
	}
	lettersGuessContainer.appendChild(emptySpan);
})
let guessSpans=document.querySelectorAll(".letters-guess span");
//set wrongAttempets
let wrongAttempets=0;
let theDraw=document.querySelector(".hangman-draw")


document.addEventListener("click",e=>{
	//set status
	let theStatus=false;
	if(e.target.className==="letter-box"){
		e.target.classList.add("clicked")
		let theClickedLetter = e.target.innerHTML.toLowerCase();
		console.log(theClickedLetter);
		let theChosenWord=Array.from(randomValueValue.toLowerCase());
		console.log(theChosenWord)
		theChosenWord.forEach((wordLetter,WordIndex)=>{
			if(theClickedLetter === wordLetter){
				theStatus=true;
				
				console.log("found at index "+WordIndex);
				//loop in all guss span
				guessSpans.forEach((span,spanIndex)=>{
					if(spanIndex===WordIndex){
						span.innerHTML=theClickedLetter;
						theStatus=true;
					}
				})
			}
		});
		//outside loops
		//if letter wrong
		console.log(theStatus);
		if(theStatus!==true){
			wrongAttempets++;
			theDraw.classList.add(`wrong-${wrongAttempets}`);
			document.getElementById("fail").play()
			if(wrongAttempets===8){
				endGame();
				lettersContainer.classList.add("finished");
				document.getElementById("end-fail").play();
			}
		}else{
				document.getElementById("success").play();
		}
	}
})
function endGame(){
	let div =document.createElement("div"),
	     divText= document.createTextNode("Game Over , The Word Was "+randomValueValue+".");
		 div.appendChild(divText);
		 div.className="popup";
		 document.body.appendChild(div);
		 let startagain=document.createElement("div"),
              startagainText=document.createTextNode("Play Agin !");
		     startagain.appendChild(startagainText);
			  document.body.appendChild(startagain)
			  startagain.className="again";
			  document.querySelector(".again").onclick=function(){
				 window.location.reload();
			  }
}


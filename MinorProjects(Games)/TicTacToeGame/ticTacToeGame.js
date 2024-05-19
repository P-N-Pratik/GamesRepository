const winnerSection = document.querySelector(".winnerSection");


let turnO= true;
let clickCount = 0;

const boxes = document.querySelectorAll(".box");
for(const box of boxes){
    box.addEventListener("click" , ()=>{
        box.textContent="X";
        box.style.color = "blue";
        clickCount++;
        if(turnO === true){
            box.textContent ="O";
            box.style.color = "green" ;
            turnO =false;
            box.disabled=true;
            checkPatterns();
            
        
        }
        else{
            box.textContent = "X";
            box.style.color = "red";
            turnO = true;
            box.disabled=true;
            checkPatterns();
            
        }
    });
}


const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
      
]

// for (const pattern of patterns){
//     winnerSection.textContent = `${pattern[0]}`;
//     winnerSection.textContent =`${boxes[0].innerText}`
// }

let flag=0;
function checkPatterns(){

    for (const pattern of patterns){
        if(boxes[pattern[0]].innerText==="" || boxes[pattern[1]].innerText==="" || boxes[pattern[1]].innerText==="")
        {
            continue;
            

        }
        else if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText)
        {
            flag=1
            winnerSection.textContent = `Winner = ${boxes[pattern[0]].textContent}`;
            // winnerSection.style.backgroundColor = "green";
            winnerSection.style.color = "Green";
            winnerSection.style.fontSize = "20px";
            winnerSection.style.fontWeight = "Bold";

            for (const box of boxes){
                
                box.disabled=true;
        
            }
            resetButton=document.createElement("button");
            resetButton.textContent = "Start New Game";
            document.body.append(resetButton);
            resetButton.addEventListener("click", resetGame);



        }
    }
    if(clickCount === 9 && flag===0){
            drawElement = document.createElement("p");
            document.body.prepend(drawElement);
            drawElement.textContent = "Draw";
            drawElement.style.backgroundColor = "red";
            drawElement.style.fontSize = "20px";
            

            resetButton=document.createElement("button");
            resetButton.textContent = "Start New Game";
            document.body.append(resetButton);
            resetButton.addEventListener("click", resetGame);



    }



}

function resetGame(){
    winnerSection.textContent = "";
    clickCount = 0;
    flag=0;
    winnerSection.style.backgroundColor = "white";
    
    for (const box of boxes){
        box.textContent = "";
        box.disabled=false;

    }
    resetButton.parentNode.removeChild(resetButton);
    drawElement.parentNode.removeChild(drawElement);



}





// function checkWhetherDrawOrNot()
// {
//     for (const box of boxes)
//     {
//         if(box.textContent === "X" || box.textContent === "O")
//         {
//             drawElement = document.createElement("p");
//             document.body.prepend(drawElement);
//             drawElement.textContent = "Draw";
//             drawElement.style.backgroundColor = "red";
//             drawElement.style.fontSize = "20px";


//         }


//     }
// }
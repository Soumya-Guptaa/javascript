let boxes = document.querySelectorAll(".box");
let reset_box = document.querySelector(".reset")
let new_game = document.querySelector(".NewGame")
let turn0 = true ;
let turn1 = false ;
let count = 0 
let win = false 
reset_box.addEventListener("click" , reset_game)
new_game.addEventListener("click" , reset_game)
const winning_pattern = [[0,1,2] , [0,3,6] ,[0,4,8], [1,4,7],[2,5,8] , [2,4,6],[3,4,5] , [6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turn0)
        {
            box.innerText= "0" ;
            turn0 = false ;
            turn1 = true ;
        }
        else 
        {
            box.innerText= "X" ;
            turn1 = false ;
            turn0 = true ;
        }
       box.disabled = true ;
       
       checkWinner()
       checkDraw()
    })
})
function checkDraw()
{ let count = 0
boxes.forEach((box)=>{
    if(box.disabled == true)
    count ++;
})
if(win == false && count == 9)
{
    let elem = document.getElementsByClassName("winner");
    if (elem.length > 0) {
        elem[0].innerHTML = `<h1>Game draw !!  try new game </h1>`;
    } 
}
}
function print_winner(i) {
    console.log(i);
    let elem = document.getElementsByClassName("winner");
    if (elem.length > 0) {
        elem[0].innerHTML = `<h1>Winner is ${i}</h1>`;
    }
}
function game_over()
{
    boxes.forEach((box)=> {
     box.disabled = true ;
    })
}
function checkWinner()
{
  
 for (pattern of winning_pattern)
 {
    console.log(pattern);
    let i1 = boxes[pattern[0]].innerText
    let i2 = boxes[pattern[1]].innerText
    let i3 = boxes[pattern[2]].innerText
    if(i1 != '' && i2 != '' && i3 != '')
    {
        if(i1==i2 && i2 == i3)
        {
            winner = true ;
            team = i1 ;
            win = true 
            print_winner(i1)
            game_over()
        }
    }

 }
}
function reset_game()
{
    boxes.forEach((box)=> {
       box.innerText = '' ;
       box.disabled= false ;
    })

    
}

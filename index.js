document.addEventListener("DOMContentLoaded",(event)=>{
    var turn = 1;
    var color = [1,2];
    var count = 0;
    var comCol = "#f0ec18"
    var humCol = "#f018d3"
    var defCol = "#bbb"
    var GameState = []
    var FilledCol = [5,5,5,5,5,5,5]
    var board = document.getElementsByClassName("board")[0]
    var elemCoun = 0;
    for(var i=0;i<6;i++){
        var newRow = document.createElement("div")
        newRow.classList.add("board-row")
        for(var j=0;j<7;j++){
            var newEle = document.createElement("div")
            newEle.classList.add("coin-holder")
            newEle.id = (elemCoun++).toString();
            newRow.appendChild(newEle)
        }
        board.appendChild(newRow);

        
    }
    var alreadyFilled = []
    for(var i=0;i<6;i++){
        var tem = []
        for(var j=0;j<7;j++){
            tem.push(0);
        }
        alreadyFilled.push(tem)
    }

    var elements = document.getElementsByClassName("coin-holder")
    console.log(elements)
    for(var i=0;i<elements.length;i++){
        console.log(i)
        elements[i].addEventListener("mouseover",(event)=>{
            const j=i;
            console.log("Mouse on me")
            var elemId = event.srcElement.id;
            var row = Math.floor(elemId/7)
            var col = elemId%7

            if(alreadyFilled[row][col] == 0){
                if(turn == 1)
                elements[elemId].style.backgroundColor=comCol
                else
                elements[elemId].style.backgroundColor=humCol
            }
            else{
                console.log("Filled")
            }

        })
        elements[i].addEventListener("mouseout",(event)=>{
            console.log("Mouse Out")
            var elemId = event.srcElement.id;
            var row = Math.floor(elemId/7)
            var col = elemId%7

            if(alreadyFilled[row][col] == 0){
            elements[elemId].style.backgroundColor=defCol
            }

        })
        elements[i].addEventListener("click",(event)=>{
            console.log("Mouse Click")
            var elemId = event.srcElement.id;
            var row = Math.floor(elemId/7)
            var col = elemId%7
            if(FilledCol[col]>=0){
                var fillRow = FilledCol[col]
                alreadyFilled[fillRow][col] = color[(count++)%2];
                GameState.push(col);
                if(turn == 1)
                elements[fillRow*7+col].style.backgroundColor=comCol
                else
                elements[fillRow*7+col].style.backgroundColor=humCol
                turn = 1 - turn  
                FilledCol[col]--;

            }

            console.log(row+"   "+col)
            console.log("Already Filled:")
            console.log(alreadyFilled)

        })


    }
    if(turn == 1){

    }
})
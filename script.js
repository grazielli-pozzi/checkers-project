class piece {
    constructor(team, position){
        this.team = team;
        this.position = position;
   }
} 


function createBlackPieces() {
    let b1 = new piece('black', [1,0]);
    let b2 = new piece('black', [3,0]);
    let b3 = new piece('black', [5,0]);
    let b4 = new piece('black', [7,0]);
    let b5 = new piece('black', [0,1]);
    let b6 = new piece('black', [2,1]);
    let b7 = new piece('black', [4,1]);
    let b8 = new piece('black', [6,1]);
    let b9 = new piece('black', [1,2]);
    let b10 = new piece('black', [3,2]);
    let b11 = new piece('black', [5,2]);
    let b12 = new piece('black', [7,2]);
    const blacks = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];
    return blacks

}
function createRedPieces() {
    let r1 = new piece('red', [6,7]);
    let r2 = new piece('red', [4,7]);
    let r3 = new piece('red', [2,7]);
    let r4 = new piece('red', [0,7]);
    let r5 = new piece('red', [7,6]);
    let r6 = new piece('red', [5,6]);
    let r7 = new piece('red', [3,6]);
    let r8 = new piece('red', [1,6]);
    let r9 = new piece('red', [6,5]);
    let r10 = new piece('red', [4,5]);
    let r11 = new piece('red', [2,5]);
    let r12 = new piece('red', [0,5]);
    return reds=[r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12]
}
function updatedPositions(arr) {
    let positions = [];
    arr.forEach(element => {
        positions.push(element.position);
    });
    return positions;
}
function allPositions(x, y){
    return x.concat(y);
       
}

function moveWest(piece, allPositions){
    let answer = ''
    let possible = []
    if (piece.team === 'black'){
        possibleMoveWest = [piece.position[0]-1, piece.position[1]+1];
        if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0 || possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
            answer = "Impossible"
            }
        else{
            for (let i=0; i< allPositions.length; i+=1){
                if(allPositions[i][0] === possibleMoveWest[0] && allPositions[i][1] === possibleMoveWest[1]){
                    answer = "Impossible"
                    break;
            }
            else {
                    answer = "possible"
                }
            }
        }return answer
    }
    else{
        possibleMoveWest = [piece.position[0]-1, piece.position[1]-1]
        for (let i=0; i< allPositions.length; i+=1){
            if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0|| possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
                answer = "Impossible"
                    break;
                }
            else if(allPositions[i][0] === possibleMoveWest[0] && allPositions[i][1] === possibleMoveWest[1]){
                answer = "Impossible"
                break;
        }
           else {
                answer = "Possible"
            }
        }return answer
    }
}

function moveEast(piece, allPositions){
    let answer = ''
    if (piece.team === 'black'){
        possibleMoveEast = [piece.position[0]+1, piece.position[1]+1]
        for (let i=0; i< allPositions.length; i+=1){
            if(possibleMoveEast[0]>7 || possibleMoveEast[0]<0|| possibleMoveEast[1] > 7 || possibleMoveEast[1]<0){
                answer = "Impossible"
                    break;
                }
            else if(allPositions[i][0] === possibleMoveEast[0] && allPositions[i][1] === possibleMoveEast[1]){
                answer = "Impossible"
                break;
        }
           else {
                answer = "Possible"
            }
        }return answer
    }
    else{
        possibleMoveEast = [piece.position[0]+1, piece.position[1]-1]
        for (let i=0; i< allPositions.length; i+=1){
            if(possibleMoveEast[0]>7 || possibleMoveEast[0]<0|| possibleMoveEast[1] > 7 || possibleMoveEast[1]<0){
            answer = "Impossible"
                break;
            }
            else if(allPositions[i][0] === possibleMoveEast[0] && allPositions[i][1] === possibleMoveEast[1]){
                answer = "Impossible"
                break;
        }
           else {
                answer = "Possible"
            }
        }return answer
    }
}
//when a piece is touched movewest and moveEast are called, the possible moves will turn blur
function jumpWest(piece, allPositions){
    if (piece.team === 'black'){
        possibleMoveWest = [piece.position[0]-1, piece.position[1]+1];
        for (let i=0; i< allPositions.length; i+=1){
            if(allPositions[i][0] === possibleMoveWest[0] && allPositions[i][1] === possibleMoveWest[1]){
                for (let j = 0; j<= allPositions.length; j+=1){
                    possibleJumpWest = [piece.position[0]-2, piece.position[1]+2]
                    if(allPositions[j][0] === possibleJumpWest[0] && allPositions[j][1] === possibleJumpWest[1]){
                        break
                    }
                    else{
                        return "possible jump"
                    }
                }
            }
        }
    }
    else {
        possibleMoveWest = [piece.position[0]-1, piece.position[1]-1];
        for (let i=0; i< allPositions.length; i+=1){
            if(allPositions[i][0] === possibleMoveWest[0] && allPositions[i][1] === possibleMoveWest[1]){
                for (let j = 0; j<= allPositions.length; j+=1){
                    possibleJumpWest = [piece.position[0]-2, piece.position[1]-2]
                    if(allPositions[j][0] === possibleJumpWest[0] && allPositions[j][1] === possibleJumpWest[1]){
                        break
                    }
                    else{
                        return "possible jump"
                    }
                }
            }
        }
    }
}

function jumpEast(piece, allPositions){
    if (piece.team === 'black'){
        possibleMoveEast = [piece.position[0]+1, piece.position[1]+1];
        for (let i=0; i< allPositions.length; i+=1){
            if(allPositions[i][0] === possibleMoveEast[0] && allPositions[i][1] === possibleMoveEast[1]){
                for (let j = 0; j<= allPositions.length; j+=1){
                    possibleJumpEast = [piece.position[0]+2, piece.position[1]+2]
                    if(allPositions[j][0] === possibleJumpEast[0] && allPositions[j][1] === possibleJumpEast[1]){
                        break
                    }
                    else{
                        return "possible jump"
                    }
                }
            }
        }
    }
    else {
        possibleMoveEast = [piece.position[0]+1, piece.position[1]-1];
        for (let i=0; i< allPositions.length; i+=1){
            if(allPositions[i][0] === possibleMoveEast[0] && allPositions[i][1] === possibleMoveEast[1]){
                for (let j = 0; j<= allPositions.length; j+=1){
                    possibleJumpEast = [piece.position[0]+2, piece.position[1]-2]
                    if(allPositions[j][0] === possibleJumpEast[0] && allPositions[j][1] === possibleJumpEast[1]){
                        break
                    }
                    else{
                        return "possible jump"
                    }
                }
            }
        }
    }
}

// function Jump(piece, allPositions)
//     returns possibleJumps[]

black = createBlackPieces()
red = createRedPieces()
positionsRed = updatedPositions(red)
positionsBlack = updatedPositions(black)
allPos=allPositions(positionsBlack, positionsRed)
// console.log(allPos)
// console.log([black[0].position[0]+1, black[0].position[1]-1])
// console.log(allPos[1][1])
// console.log(black[4])

console.log(moveWest(black[0],allPos))
console.log(moveWest(black[1],allPos))
console.log(moveWest(black[2],allPos))
console.log(moveWest(black[3],allPos))
console.log(moveWest(black[4],allPos))
console.log(moveWest(black[5],allPos))
console.log(moveWest(black[6],allPos))
console.log(moveWest(black[7],allPos))
console.log(moveWest(black[8],allPos))
console.log(moveWest(black[9],allPos))
console.log(moveWest(black[10],allPos))
console.log(moveWest(black[11],allPos))
// console.log(moveWest(red[0],allPos))
// console.log(moveWest(red[1],allPos))
// console.log(moveWest(red[2],allPos))
// console.log(moveWest(red[3],allPos))
// console.log(moveWest(red[4],allPos))
// console.log(moveWest(red[5],allPos))
// console.log(moveWest(red[6],allPos))
// console.log(moveWest(red[7],allPos))
// console.log(moveWest(red[8],allPos))
// console.log(moveWest(red[9],allPos))
// console.log(moveWest(red[10],allPos))
// console.log(moveWest(red[11],allPos))
// console.log(moveEast(black[0],allPos))
// console.log(moveEast(black[1],allPos))
// console.log(moveEast(black[2],allPos))
// console.log(moveEast(black[3],allPos))
// console.log(moveEast(black[4],allPos))
// console.log(moveEast(black[5],allPos))
// console.log(moveEast(black[6],allPos))
// console.log(moveEast(black[7],allPos))
// console.log(moveEast(black[8],allPos))
// console.log(moveEast(black[9],allPos))
// console.log(moveEast(black[10],allPos))
// console.log(moveEast(black[11],allPos))
// console.log(moveEast(red[0],allPos))
// console.log(moveEast(red[1],allPos))
// console.log(moveEast(red[2],allPos))
// console.log(moveEast(red[3],allPos))
// console.log(moveEast(red[4],allPos))
// console.log(moveEast(red[5],allPos))
// console.log(moveEast(red[6],allPos))
// console.log(moveEast(red[7],allPos))
// console.log(moveEast(red[8],allPos))
// console.log(moveEast(red[9],allPos))
// console.log(moveEast(red[10],allPos))
// console.log(moveEast(red[11],allPos))



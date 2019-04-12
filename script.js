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
    return [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];
}
function createRedPieces() {
    let r12 = new piece('red', [6,7]);
    let r11 = new piece('red', [4,7]);
    let r10 = new piece('red', [2,7]);
    let r9 = new piece('red', [0,7]);
    let r8 = new piece('red', [7,6]);
    let r7 = new piece('red', [5,6]);
    let r6 = new piece('red', [3,6]);
    let r5 = new piece('red', [1,6]);
    let r4 = new piece('red', [6,5]);
    let r3 = new piece('red', [4,5]);
    let r2 = new piece('red', [2,5]);
    let r1 = new piece('red', [0,5]);
    return [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];
}
const redPieces = createRedPieces();
const blackPieces = createBlackPieces();
function placePieces(arrPieces) {
    for (let i = 0; i < arrPieces.length; i += 1) {
        let pieceSlot = document.querySelector(`#y-${arrPieces[i].position[1].toString()} > .x-${arrPieces[i].position[0].toString()}`);
        if(arrPieces[i].team === 'red'){
            firePiece= document.createElement('span');
            pieceSlot.appendChild(firePiece).classList += 'fire';
        }
        else {
            icePiece= document.createElement('span');
            pieceSlot.appendChild(icePiece).classList += 'ice';
        }
    }
}


placePieces(blackPieces);
placePieces(redPieces);
start();
function start(){
    turnBlackSpansIntoButtons(blackPieces, redPieces);
    
}
function turnBlackSpansIntoButtons(blackPieces, redPieces){
    for (let i = 0; i < blackPieces.length; i += 1){
        document.querySelectorAll('.ice')[i].onclick = (e) => {
            console.log(e.target)
            showPossibilitiesBlack(e.target, blackPieces, redPieces)
        }
    } 
}
function showPossibilitiesBlack(chosenBlack, blackPieces, redPieces){
        possibleWest = moveWest(chosenBlack, blackPieces, redPieces);
        possibleEast = moveEast(chosenBlack, blackPieces, redPieces);
        executeBlackMove(chosenBlack, possibleWest,possibleEast)
}
function executeBlackMove(chosenBlack, possibleWest, possibleEast){
    for (let i = 0; i < 2; i +=1){
        document.querySelectorAll('.possible')[i].onclick = (e) => { 
            // console.log('lllll', e.currentTarget)
            const newSlot = e.target.parentElement;
            // console.log('newSlot', newSlot, newSlot.parentElement)
            const movedPiece = document.createElement('span');
            movedPiece.className = 'ice';
            console.log(parseInt(newSlot.classList))
            console.log(newSlot.parentElement)
            


            document.querySelector(`#y-${possibleWest[1].toString()} > .x-${possibleWest[0].toString()}`).removeChild(document.querySelector('strong'))
            document.querySelector(`#y-${possibleEast[1].toString()} > .x-${possibleEast[0].toString()}`).removeChild(document.querySelector('strong'))
            const pieceSlot = document.querySelector(`#y-${chosenBlack.position[1].toString()} > .x-${chosenBlack.position[0].toString()}`)
            pieceSlot.removeChild(pieceSlot.firstChild);
            newSlot.appendChild(movedPiece)
            // chosenBlack.position =  
        }
    }
    turnRedSpansIntoButtons(blackPieces, redPieces);
}
//___________________________________________________________________________________________________________________________//

function turnRedSpansIntoButtons(blackPieces, redPieces){
    for (let i = 0; i < redPieces.length; i += 1){
        document.querySelectorAll('.fire')[i].onclick = () => {
            showPossibilitiesRed(redPieces[i], blackPieces, redPieces)
        
        }
    }
}
function showPossibilitiesRed(chosenRed, blackPieces, redPieces){
    possibleWest = moveWest(chosenRed, blackPieces, redPieces);
    possibleEast = moveEast(chosenRed, blackPieces, redPieces);
    executeRedMove(chosenRed, possibleWest,possibleEast)
}
function executeRedMove(chosenRed, possibleWest, possibleEast){ 
    for (let j = 0; j < 2; j +=1){
        document.querySelectorAll('.possible')[j].onclick = (e) => { 
            const newSlot = e.target.parentElement;
            const movedPiece = document.createElement('span');
        movedPiece.className = 'fire';

        document.querySelector(`#y-${possibleWest[1].toString()} > .x-${possibleWest[0].toString()}`).removeChild(document.querySelector('strong'))
        document.querySelector(`#y-${possibleEast[1].toString()} > .x-${possibleEast[0].toString()}`).removeChild(document.querySelector('strong'))
        const pieceSlot = document.querySelector(`#y-${chosenRed.position[1].toString()} > .x-${chosenRed.position[0].toString()}`)
        pieceSlot.removeChild(pieceSlot.firstChild);
        newSlot.appendChild(movedPiece)
        }
    }
    console.log(blackPieces)
    console.log(redPieces)
    turnBlackSpansIntoButtons(blackPieces, redPieces);
}
   
//____________________________________________________________________________________________________

function moveWest(piece, blackPieces, redPieces){
    let answer = ''
    let arrBlackPositions = [];
    let arrRedPositions = [] ;
    for (let i=0; i < blackPieces.length; i += 1){
        arrBlackPositions.push(blackPieces[i].position)
    };
    for (let r=0; r< redPieces.length; r+=1){
        arrRedPositions.push(redPieces[r].position)
    }
    arrAllPositions = arrBlackPositions.concat(arrRedPositions)

    if (piece.team === 'black'){
        possibleMoveWest = [piece.position[0]-1, piece.position[1]+1];
        console.log(possibleMoveWest)

        if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0 || possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
        answer = 'impossible'
        }
        else if(arrAllPositions.indexOf(possibleMoveWest) === -1) {
            document.querySelector(`#y-${possibleMoveWest[1].toString()} > .x-${possibleMoveWest[0].toString()}`).appendChild(document.createElement('strong')).classList += 'possible'
            return possibleMoveWest
        }
    }
    else if (piece.team === 'red') {
        possibleMoveWest = [piece.position[0]-1, piece.position[1]-1]

        if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0|| possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
            answer = "Impossible"
        }
        else if(arrAllPositions.indexOf(possibleMoveWest) === -1){
            document.querySelector(`#y-${possibleMoveWest[1].toString()} > .x-${possibleMoveWest[0].toString()}`).appendChild(document.createElement('strong')).classList += 'possible'
            return possibleMoveWest
        }
    }
}

function moveEast(piece, blackPieces, redPieces){
    let answer = ''
    let arrBlackPositions = [];
    let arrRedPositions = [];
    for (let b=0; b< blackPieces.length; b+=1){
        arrBlackPositions.push(blackPieces[b].position)
    };
    for (let r=0; r< redPieces.length; r+=1){
        arrRedPositions.push(redPieces[r].position)
    }
    arrAllPositions = arrBlackPositions.concat(arrRedPositions)

    if (piece.team === 'black'){
        console.log(piece)
        possibleMoveEast = [piece.position[0]+1, piece.position[1]+1];
        console.log(possibleMoveEast)

        if(possibleMoveEast[0]>7 || possibleMoveEast[0]<0 || possibleMoveEast[1] > 7 || possibleMoveEast[1]<0){
        answer = 'impossible'
        }
        else if(arrAllPositions.indexOf(possibleMoveEast) === -1){
            document.querySelector(`#y-${possibleMoveEast[1].toString()} > .x-${possibleMoveEast[0].toString()}`).appendChild(document.createElement('strong')).classList += 'possible'
            return possibleMoveEast
        }
    }
    else {
        possibleMoveEast = [piece.position[0]+1, piece.position[1]-1]

        if(possibleMoveEast[0]>7 || possibleMoveEast[0]<0|| possibleMoveEast[1] > 7 || possibleMoveEast[1]<0){
            answer = "Impossible"
        }
        else if(arrAllPositions.indexOf(possibleMoveEast) === -1){
            document.querySelector(`#y-${possibleMoveEast[1].toString()} > .x-${possibleMoveEast[0].toString()}`).appendChild(document.createElement('strong')).classList += 'possible'
            return possibleMoveEast
        }
    }
}
function jumpWest(piece, blackPieces, redPieces){
    let answer = ''
    let arrBlackPositions = [];
    let arrRedPositions = [];
    for (let b=0; b< blackPieces.length; b+=1){
        arrBlackPositions += blackPieces[b].position
    };
    for (let r=0; r< redPieces.length; r+=1){
        arrRedPositions += redPieces[r].position
    }
    arrAllPositions = arrBlackPositions.concat(arrRedPositions)
    if (piece.team === 'black'){
        possibleJumpWest = [piece.position[0]-1, piece.position[1]+1];
        possibleLandingJumpWest = [piece.position[0]-2, piece.position[1]+2];
        if(possibleLandingJumpWest[0]>7 || possibleLandingJumpWest[0]<0 || possibleLandingJumpWest[1] > 7 || possibleLandingJumpWest[1]<0){
        answer = 'impossible'
        }
        else if(arrRedPositions.indexOf(possibleJumpWest) > -1 && arrAllPositions.indexOf(possibleLandingJumpWest) === -1){
            document.querySelector(`#y-${possibleLandingJumpWest[1].toString()} > .x-${possibleLandingJumpWest[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpWest
        }
    }
    else {
        possibleJumpWest = [piece.position[0]-1, piece.position[1]-1];
        possibleLandingJumpWest = [piece.position[0]-2, piece.position[1]-2];
        if(possibleLandingJumpWest[0]>7 || possibleLandingJumpWest[0]<0 || possibleLandingJumpWest[1] > 7 || possibleLandingJumpWest[1]<0){
            answer = 'impossible'
            }
            else if(arrBlackPositions.indexOf(possibleJumpWest) > -1 && arrAllPositions.indexOf(possibleLandingJumpWest) === -1){
             document.querySelector(`#y-${possibleLandingJumpWest[1].toString()} > .x-${possibleLandingJumpWest[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpWest
        }
    }
}

function jumpEast(piece, blackPieces, redPieces){
    let answer = ''
    let arrBlackPositions = [];
    let arrRedPositions = [];
    for (let b=0; b< blackPieces.length; b+=1){
        arrBlackPositions += blackPieces[b].position
    };
    for (let r=0; r< redPieces.length; r+=1){
        arrRedPositions += redPieces[r].position
    }
    arrAllPositions = arrBlackPositions.concat(arrRedPositions)
    if (piece.team === 'black'){
        possibleJumpEast = [piece.position[0]-1, piece.position[1]+1];
        possibleLandingJumpEast = [piece.position[0]-2, piece.position[1]+2];
        if(possibleLandingJumpEast[0]>7 || possibleLandingJumpEast[0]<0 || possibleLandingJumpEast[1] > 7 || possibleLandingJumpEast[1]<0){
        answer = 'impossible'
        }
        else if(arrRedPositions.indexOf(possibleJumpEast) > -1 && arrAllPositions.indexOf(possibleLandingJumpEast) === -1){
            document.querySelector(`#y-${possibleLandingJumpEast[1].toString()} > .x-${possibleLandingJumpEast[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpEast
        }
    }
    else {
        possibleJumpEast = [piece.position[0]-1, piece.position[1]-1];
        possibleLandingJumpEast = [piece.position[0]-2, piece.position[1]-2];
        if(possibleLandingJumpEast[0]>7 || possibleLandingJumpEast[0]<0 || possibleLandingJumpEast[1] > 7 || possibleLandingJumpEast[1]<0){
            answer = 'impossible'
            }
            else if(arrBlackPositions.indexOf(possibleJumpEast) > -1 && arrAllPositions.indexOf(possibleLandingJumpEast) === -1){
             document.querySelector(`#y-${possibleLandingJumpEast[1].toString()} > .x-${possibleLandingJumpEast[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpEast
        }
    }
}
/*colocar pecas

tem algum pulo possivel?
    se, sim 
    quantos sao?
        se 1, indicar para o jogador qual o pulo obrigatorio(voltar perguntar se tem um pulo possivel)
        se >1, indicar para o jogador quais os pulos possiveis (obrigado a escolher um) (voltar perguntar se tem um pulo possivel)
    se nao
    esperar o jogador escolher uma peca
    mostrar passos possiveis
vez do oponente


*/
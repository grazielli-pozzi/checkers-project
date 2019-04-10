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
    return [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];
}

const redPieces = createRedPieces();
const blackPieces = createBlackPieces();

function placePieces(arrPieces) {
    for (let i = 0; i < arrPieces.length; i += 1) {
        let pieceSlot = document.querySelector(`#y-${arrPieces[i].position[1].toString()} > .x-${arrPieces[i].position[0].toString()}`);
        if(arrPieces[i].team === 'red'){
            pieceSlot.className += ' fire';
        }
        else {
            pieceSlot.className += ' ice';

        }
    }
}


placePieces(blackPieces);
placePieces(redPieces);
console.log(blackPieces)
showPossibilitiesBlack(blackPieces,redPieces);
console.log(blackPieces)
showPossibilitiesRed(blackPieces, redPieces);

function showPossibilitiesBlack(blackPieces, redPieces){
    for (let i = 0; i < blackPieces.length; i += 1){
        document.querySelector(`#y-${blackPieces[i].position[1].toString()} > .x-${blackPieces[i].position[0].toString()}`).onclick = () => {
            possibleWest = moveWest(blackPieces[i], blackPieces, redPieces);
            possibleEast = moveEast(blackPieces[i], blackPieces, redPieces);
            document.querySelector(`#y-${possibleWest[1].toString()} > .x-${possibleWest[0].toString()}`).onclick = () => { 
                blackPieces[i].position = possibleWest;
                console.log('kkk')
                for(let y = 0; y < 2; y += 1){
                    document.querySelector('.possible').classList.remove('possible')
                }
                for(let j = 0; j < blackPieces.length; j+=1){
                    document.querySelector('.ice').classList.remove('ice')
                }
                placePieces(blackPieces)
            }
            document.querySelector(`#y-${possibleEast[1].toString()} > .x-${possibleEast[0].toString()}`).onclick = () => { 
                blackPieces[i].position = possibleEast;
                console.log('kkk')
                for(let y = 0; y < 2; y += 1){
                    document.querySelector('.possible').classList.remove('possible')
                }
                for(let j = 0; j < blackPieces.length; j+=1){
                    document.querySelector('.ice').classList.remove('ice')
                }
                placePieces(blackPieces)
            }
        }
    }
}   
    
function showPossibilitiesRed(blackPieces, redPieces){
    for (let i = 0; i < redPieces.length; i += 1){
        document.querySelector(`#y-${redPieces[i].position[1].toString()} > .x-${redPieces[i].position[0].toString()}`).onclick = () => {
            possibleWest = moveWest(redPieces[i], blackPieces, redPieces);
            possibleEast = moveEast(redPieces[i], blackPieces, redPieces);
            document.querySelector(`#y-${possibleWest[1].toString()} > .x-${possibleWest[0].toString()}`).onclick = () => { 
                redPieces[i].position = possibleWest;
                console.log('kkk')
                for(let y = 0; y < 2; y += 1){
                    document.querySelector('.possible').classList.remove('possible')
                }
                for(let j = 0; j < redPieces.length; j+=1){
                    document.querySelector('.fire').classList.remove('fire')
                }
            placePieces(redPieces)
            }
            document.querySelector(`#y-${possibleEast[1].toString()} > .x-${possibleEast[0].toString()}`).onclick = () => { 
                redPieces[i].position = possibleEast;
                console.log('kkk')
                for(let y = 0; y < 2; y += 1){
                    document.querySelector('.possible').classList.remove('possible')
                }
                for(let j = 0; j < redPieces.length; j+=1){
                    document.querySelector('.fire').classList.remove('fire')
                }
            placePieces(redPieces)
            
            }   
        }
    }
}

function moveWest(piece, blackPieces, redPieces){
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
        possibleMoveWest = [piece.position[0]-1, piece.position[1]+1];
        if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0 || possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
        answer = 'impossible'
        }
        else if(arrAllPositions.indexOf(possibleMoveWest) === -1){
            document.querySelector(`#y-${possibleMoveWest[1].toString()} > .x-${possibleMoveWest[0].toString()}`).classList+=' possible'
            return possibleMoveWest
        }
    }
    else {
        possibleMoveWest = [piece.position[0]-1, piece.position[1]-1]
        if(possibleMoveWest[0]>7 || possibleMoveWest[0]<0|| possibleMoveWest[1] > 7 || possibleMoveWest[1]<0){
            answer = "Impossible"
        }
        else if(arrAllPositions.indexOf(possibleMoveWest) === -1){
            document.querySelector(`#y-${possibleMoveWest[1].toString()} > .x-${possibleMoveWest[0].toString()}`).classList+=' possible'
            return possibleMoveWest
        }
    }
}

function moveEast(piece, blackPieces, redPieces){
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
        possiblemoveEast = [piece.position[0]+1, piece.position[1]+1];
        if(possiblemoveEast[0]>7 || possiblemoveEast[0]<0 || possiblemoveEast[1] > 7 || possiblemoveEast[1]<0){
        answer = 'impossible'
        }
        else if(arrAllPositions.indexOf(possiblemoveEast) === -1){
            document.querySelector(`#y-${possiblemoveEast[1].toString()} > .x-${possiblemoveEast[0].toString()}`).classList+=' possible'
            return possiblemoveEast
        }
    }
    else {
        possiblemoveEast = [piece.position[0]+1, piece.position[1]-1]
        if(possiblemoveEast[0]>7 || possiblemoveEast[0]<0|| possiblemoveEast[1] > 7 || possiblemoveEast[1]<0){
            answer = "Impossible"
        }
        else if(arrAllPositions.indexOf(possiblemoveEast) === -1){
            document.querySelector(`#y-${possiblemoveEast[1].toString()} > .x-${possiblemoveEast[0].toString()}`).classList+=' possible'
            return possiblemoveEast
        }
    }
}
function jumpWeast(piece, blackPieces, redPieces){
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
        possibleJumpWeast = [piece.position[0]-1, piece.position[1]+1];
        possibleLandingJumpWeast = [piece.position[0]-2, piece.position[1]+2];
        if(possibleLandingJumpWeast[0]>7 || possibleLandingJumpWeast[0]<0 || possibleLandingJumpWeast[1] > 7 || possibleLandingJumpWeast[1]<0){
        answer = 'impossible'
        }
        else if(arrRedPositions.indexOf(possibleJumpWeast) > -1 && arrAllPositions.indexOf(possibleLandingJumpWeast) === -1){
            document.querySelector(`#y-${possibleLandingJumpWeast[1].toString()} > .x-${possibleLandingJumpWeast[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpWeast
        }
    }
    else {
        possibleJumpWeast = [piece.position[0]-1, piece.position[1]-1];
        possibleLandingJumpWeast = [piece.position[0]-2, piece.position[1]-2];
        if(possibleLandingJumpWeast[0]>7 || possibleLandingJumpWeast[0]<0 || possibleLandingJumpWeast[1] > 7 || possibleLandingJumpWeast[1]<0){
            answer = 'impossible'
            }
            else if(arrBlackPositions.indexOf(possibleJumpWeast) > -1 && arrAllPositions.indexOf(possibleLandingJumpWeast) === -1){
             document.querySelector(`#y-${possibleLandingJumpWeast[1].toString()} > .x-${possibleLandingJumpWeast[0].toString()}`).classList+=' possibleJump'
            return possibleLandingJumpWeast
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
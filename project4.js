console.log('This is a Tic Tac Toe Game');
let hit = new Audio('hit.mp3');
let lose = new Audio('lose.mp3');
let won = new Audio('won.mp3');
let turn = 'X';
let isgameOver = 'false';

// Function to change the turn
const changeTurn = () => {
    return turn == '0' ? 'X' : '0'
}

// Function to check the win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 6, 5, 180],
        [3, 4, 5, 6, 15, 180],
        [6, 7, 8, 6, 25, 180],
        [0, 3, 6, -4, 15, 90],
        [1, 4, 7, 6, 16, 90],
        [2, 5, 8, 16, 15, 90],
        [0, 4, 8, 6, 15, 45],
        [2, 4, 6, 6, 15, 315]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' Won';
            document.querySelector('.info').style.color = 'red';
            document.querySelector('.info').style.textDecoration = 'underline';
            document.querySelector('.info').style.textDecorationColor = 'black';
            won.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '147px';
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.marginTop = '23px';
            document.querySelector('.line').style.display = 'block';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            isgameOver = true;
        }
    })
}

// Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', (e) => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            // console.log(turn);
            // console.log(isgameOver);
            turn = changeTurn();
            hit.play();
            isgameOver = false;
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }

        }
    })
})

// Add event listener in 'Reset' Button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxT = document.querySelectorAll('.boxText');
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    let infoT = document.getElementsByClassName('info')[0];
    Array.from(boxT).forEach(element => {
        element.innerText = '';
    })
    // infoT.innerText = '';
    turn = 'X';
    document.querySelector('.line').style.display = 'none';
    isgameOver = false;
    checkWin();
    if (!isgameOver) {
        document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    }
})
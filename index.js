const choices = ['rock', 'scissor', 'paper'];
function pcs() {
    const choices = ['rock', 'scissor', 'paper'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const pcChoice = choices[randomIndex];
    const pcImage = `./icons/${pcChoice}.png`;
    return { choice: pcChoice, image: pcImage };
} 
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let userScore = 0;
function changeUserScore(uscore) {
    document.getElementById("your-score").innerHTML = uscore;
    localStorage.setItem("userScore", userScore);
}
let pcScore = 0;
function changePcScore(pscore) {
    document.getElementById("comp-score").innerHTML = pscore;
    localStorage.setItem("pcScore", pcScore);
}
let storedUserScore = localStorage.getItem("userScore");
let storedPcScore = localStorage.getItem("pcScore");
if (storedUserScore !== null) {
    userScore = parseInt(storedUserScore);
    changeUserScore(userScore);
}
if (storedPcScore !== null) {
    pcScore = parseInt(storedPcScore);
    changePcScore(pcScore);
}
document.getElementById('next').style.display = 'none';
document.querySelector('.hurray-page').style.display = 'none';
document.querySelector('.middle-4').style.display = 'none';
document.querySelector('.middle-3').style.display = 'none';
document.querySelector('.middle-2').style.display = 'none';
rock.addEventListener("click", function () {
    const userChoices = 'rock'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;
    document.getElementById('gaming-section').style.display = 'none';
    if ((userChoices === computerChoice)) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/f1.png`
        document.getElementById('pcChoiceTie').src = `./icons/f1.png`
    } else if (
        (userChoices === "rock" && computerChoice === "paper")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/f1.png`
        document.getElementById('pcChoiceLost').src = `./icons/f3.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/f1.png`
        document.getElementById('pcChoiceWon').src = `./icons/f2.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});
paper.addEventListener("click", function () {
    const userChoices = 'paper'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;
    document.getElementById('gaming-section').style.display = 'none';
    if ((userChoices === computerChoice)) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/f3.png`
        document.getElementById('pcChoiceTie').src = `./icons/f3.png`
    } else if ((userChoices === 'paper' && computerChoice === "scissor")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/f3.png`
        document.getElementById('pcChoiceLost').src = `./icons/f2.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/f3.png`
        document.getElementById('pcChoiceWon').src = `./icons/f1.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});

scissor.addEventListener("click", function () {
    const userChoices = 'scissor'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;
    document.getElementById('gaming-section').style.display = 'none';

    if (userChoices === computerChoice) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/f2.png`
        document.getElementById('pcChoiceTie').src = `./icons/f2.png`
    } else if ((userChoices === "scissor" && computerChoice === "rock")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/f2.png`
        document.getElementById('pcChoiceLost').src = `./icons/f1.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/f2.png`
        document.getElementById('pcChoiceWon').src = `./icons/f3.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});
function closeRules() {
    document.querySelector('.rules-sec').style.display = 'none';
}
function ShowRules() {
    document.querySelector('.rules-sec').style.display = 'block';
}
function nextSection() {
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('gaming-section').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('score-section').style.display = 'none';
    document.getElementById('hurray-section').style.display = 'flex'
}
function showMainPage() {
    document.getElementById('next').style.display = 'none';
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('lostPage').style.display = 'none';
    document.getElementById('tiePage').style.display = 'none';
    document.getElementById('score-section').style.display = 'flex';
    document.getElementById('gaming-section').style.display = 'flex';
    document.getElementById('hurray-section').style.display = 'none';
    document.getElementById('rules').style.display = 'inline-block';
}
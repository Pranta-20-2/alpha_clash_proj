// function play(){
//     //hide the home screen
//     //to hide the screen add the class hidden to the home section

//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList);
//     const playSection= document.getElementById('play-ground');
//     playSection.classList.remove('hidden');
// }
function continueGame() {
    //step-1 Generate a random alphabet
    const alphabet = getARandomAlphabets();
    console.log('Your alphabet:', alphabet);
    //randomly alphabet show
    const alphabetShow = document.getElementById('current-alphabet')
    alphabetShow.innerText = alphabet;
    //set background color

    setBackgroundColorById(alphabet);

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
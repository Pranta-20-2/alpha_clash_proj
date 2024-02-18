function hideElementById(element) {
    const homeSection = document.getElementById(element);
    homeSection.classList.add('hidden');
}

function showElementById(element) {
    const playSection = document.getElementById(element);
    playSection.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function getARandomAlphabets() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;

}
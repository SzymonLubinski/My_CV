// --------------  nawigacja  ------------

function openTab(event, social) {
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    let tabLinks = document.getElementsByClassName("tab-links");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('turn-on');
        tabLinks[i].className = tabLinks[i].className.replace(" active", " ");
    }
    document.getElementById(social).style.display = 'block';
    event.currentTarget.className += " active turn-on";
}
// --------------  3D  ------------

VanillaTilt.init(
    document.querySelectorAll('.item-box'), {
        max: 15,
        speed: 200
    }
);
// --------------  Typing Simulation  ------------

let cursor = document.getElementById('cursor');
let textLocation = document.getElementById('typing-text');
let sentences = ['a beginner programmer', 'IT enthusiast', 'a graduate of the University of Rzeszów', 'passionate about history'];
function choosing (elList){
    cursor.classList.remove('cursor-animation');
    writer(0, elList)
}
function writer(index, elList){
    textLocation.innerText = sentences[elList].substring(0,index);
    if(sentences[elList].length <= textLocation.innerText.length){
        cursor.classList.add('cursor-animation');
        setTimeout(function (){
            deletion(0, elList);
        },2000)
    }
    else {
        let randomBreak = Math.floor(Math.random() * 100) + 80;
        setTimeout(function (){
            index++;
            writer(index, elList);
        },randomBreak)
    }
}
function deletion(index, elList){
    textLocation.innerText = sentences[elList].substring(0, sentences[elList].length - index);
    if(0 >= textLocation.innerText.length){
        if (elList >= sentences.length - 1){
            elList = 0;
            choosing(elList);
        }
        else {
            elList = elList + 1;
            choosing(elList);
        }
    }
    else {
        let randomBreak = Math.floor(Math.random() * 100) + 10;
        setTimeout(function (){
            index++;
            cursor.classList.remove('cursor-animation');
            deletion(index, elList);
        },randomBreak);
    }
}
choosing(0);

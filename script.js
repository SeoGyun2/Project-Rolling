const likeButton = document.getElementById('likeButton');
const smileButton = document.getElementById('smileButton');
const heartButton = document.getElementById('heartButton');

let likeCount = 0;
let smileCount = 0;
let heartCount = 0;

likeButton.addEventListener('click', () => {
    likeCount++;
    likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> ${likeCount}`;
});

smileButton.addEventListener('click', () => {
    smileCount++;
    smileButton.innerHTML = `<i class="fas fa-smile"></i> ${smileCount}`;
});

heartButton.addEventListener('click', () => {
    heartCount++;
    heartButton.innerHTML = `<i class="fas fa-heart"></i> ${heartCount}`;
});


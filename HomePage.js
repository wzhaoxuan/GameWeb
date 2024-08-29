
// HomePage.js
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-container');
    const games = document.querySelectorAll('.image-container');

    if(menu.style.width === 'none' || menu.style.width === '') {
        menu.style.width = '70vh';
        games.forEach(game => game.style.zIndex = '-1000');
    }
    else{
        menu.style.width = '0';
        games.forEach(game => game.style.zIndex = '0');
    }
});

document.getElementById('menu-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'A' || event.target.tagName === 'svg' || event.target.tagName === 'path') {
        document.getElementById('menu-container').style.width = '0';
        // document.getElementById('main-content').style.marginLeft = '0';
    }
});


const images = document.querySelector('.images'); // holds all the image items
const prev = document.getElementById('prev'); // select the backward buttons
const next = document.getElementById('next'); // select the forward buttons   

const recommend_imageItems = document.querySelectorAll('.image-item'); //select all the individual image items
const arrival_imageItems = document.querySelectorAll('.arrival-image-item'); //select all the individual image items


let recommed_index = 0;
let arrival_index = 0;

// Function to show image with 100% width
function showImage() {
    const recommendtranslateX = -recommed_index * 100;
    images.style.transform = `translateX(${recommendtranslateX}%)`;
    
    const arrivaltranslateX = -arrival_index * 100;
    images.style.transform = `translateX(${arrivaltranslateX}%)`;
}

// Event listeners for the backward buttons
prev.addEventListener('click', () => {
    recommed_index = (recommed_index > 0) ? recommed_index - 1 : recommend_imageItems.length - 1;
    arrival_index = (arrival_index > 0) ? arrival_index - 1 : arrival_imageItems.length - 1;
    showImage();
});

// Event listeners for the forward buttons
next.addEventListener('click', () => {
    recommed_index = (recommed_index < recommend_imageItems.length - 1) ? recommed_index + 1 : 0;
    arrival_index = (arrival_index < arrival_imageItems.length - 1) ? arrival_index + 1 : 0;
    showImage();
});

// Initial display
showImage();

// document.getElementsByClassName('wishlist').addEventListener('click', function() {
//     console.log('clicked');
// });

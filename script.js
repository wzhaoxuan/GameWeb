
document.addEventListener('DOMContentLoaded', function() {
    const wishlistIcons = document.getElementsByClassName('wishlist');

    // Loop through each wishlist icon and add click event listener
    for (let i = 0; i < wishlistIcons.length; i++) {
        wishlistIcons[i].addEventListener('click', function() {
            console.log('Wishlist button clicked');
            // Perform other actions here, such as adding to wishlist or updating UI
        });
    }
});
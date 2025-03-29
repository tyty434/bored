
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

let clickCount = 0;

// Function to change the size of the button
noButton.addEventListener('click', function() {
    // Get the current size of the button
    clickCount++;
    const currentSize = parseInt(window.getComputedStyle(noButton).fontSize);
    const currentSize2 = parseInt(window.getComputedStyle(yesButton).fontSize);

    const newSize = currentSize * .5; 
    const newSize2 = currentSize2 * 1.5;

    noButton.style.fontSize = newSize + 'px';

    yesButton.style.fontSize = newSize2 + 'px';

    if (clickCount === 3) {
        noButton.style.display = 'none';

    }
});


yesButton.addEventListener('click', function() {

    window.location.href = 'congrats.html';
});
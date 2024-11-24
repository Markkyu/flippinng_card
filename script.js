let isFlipped = false;

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    const smallScreen = window.innerWidth < 600;

    if (isFlipped) {
        flashcard.style.transform = smallScreen  ? 'rotateX(0)' : 'rotateY(0)';
    } else {
        flashcard.style.transform = smallScreen  ? 'rotateX(180deg)' : 'rotateY(180deg)';
    }

    isFlipped = !isFlipped;
}

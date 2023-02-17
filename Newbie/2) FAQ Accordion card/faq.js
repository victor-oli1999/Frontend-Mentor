// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenAccordion = document.querySelector('.accordion-hidden');

function revealContent {
    if(hiddenAccordion.classList.contains('.reveal-btn')) {
        hiddenAccordion.classList.remove('.reveal-btn') 
    } else {
        hiddenAccordion.classList.add('.reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);
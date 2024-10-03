// Active state for rate buttons

const rateOne = document.getElementById('rate_one');
const rateTwo = document.getElementById('rate_two');
const rateThree = document.getElementById('rate_three');
const rateFour = document.getElementById('rate_four');
const rateFive = document.getElementById('rate_five');

rateOne.addEventListener('click', (e) => {
    e.preventDefault();
    rateOne.classList.add("bg-customorange", "text-black");
    rateOne.classList.remove('bg-opacity-20');

    // Reset the others rate buttons
    rateTwo.classList.remove("bg-customorange", "text-black");
    rateTwo.classList.add('bg-opacity-20');

    rateThree.classList.remove("bg-customorange", "text-black");
    rateThree.classList.add('bg-opacity-20');

    rateFour.classList.remove("bg-customorange", "text-black");
    rateFour.classList.add('bg-opacity-20');
    
    rateFive.classList.remove("bg-customorange", "text-black");
    rateFive.classList.add('bg-opacity-20');
})

rateTwo.addEventListener('click', (e) => {
    e.preventDefault();
    rateTwo.classList.add("bg-customorange");
    rateTwo.classList.remove('bg-opacity-20');

    // Reset the others rate buttons
    rateOne.classList.remove("bg-customorange", "text-black");
    rateOne.classList.add('bg-opacity-20');
    
    rateThree.classList.remove("bg-customorange", "text-black");
    rateThree.classList.add('bg-opacity-20');
    
    rateFour.classList.remove("bg-customorange", "text-black");
    rateFour.classList.add('bg-opacity-20');
        
    rateFive.classList.remove("bg-customorange", "text-black");
    rateFive.classList.add('bg-opacity-20');
})

rateThree.addEventListener('click', (e) => {
    e.preventDefault();
    rateThree.classList.add("bg-customorange", "text-black");
    rateThree.classList.remove('bg-opacity-20');

    // Reset the others rate buttons
    rateOne.classList.remove("bg-customorange", "text-black");
    rateOne.classList.add('bg-opacity-20');
    
    rateTwo.classList.remove("bg-customorange", "text-black");
    rateTwo.classList.add('bg-opacity-20');
    
    rateFour.classList.remove("bg-customorange", "text-black");
    rateFour.classList.add('bg-opacity-20');
        
    rateFive.classList.remove("bg-customorange", "text-black");
    rateFive.classList.add('bg-opacity-20');
})

rateFour.addEventListener('click', (e) => {
    e.preventDefault();
    rateFour.classList.add("bg-customorange", "text-black");
    rateFour.classList.remove('bg-opacity-20');

    // Reset the others rate buttons
    rateOne.classList.remove("bg-customorange", "text-black");
    rateOne.classList.add('bg-opacity-20');
    
    rateTwo.classList.remove("bg-customorange", "text-black");
    rateTwo.classList.add('bg-opacity-20');
    
    rateThree.classList.remove("bg-customorange", "text-black");
    rateThree.classList.add('bg-opacity-20');
        
    rateFive.classList.remove("bg-customorange", "text-black");
    rateFive.classList.add('bg-opacity-20');
})

rateFive.addEventListener('click', (e) => {
    e.preventDefault();
    rateFive.classList.add("bg-customorange", "text-black");
    rateFive.classList.remove('bg-opacity-20');

    // Reset the others rate buttons
    rateOne.classList.remove("bg-customorange", "text-black");
    rateOne.classList.add('bg-opacity-20');
    
    rateTwo.classList.remove("bg-customorange", "text-black");
    rateTwo.classList.add('bg-opacity-20');
    
    rateThree.classList.remove("bg-customorange", "text-black");
    rateThree.classList.add('bg-opacity-20');
        
    rateFour.classList.remove("bg-customorange", "text-black");
    rateFour.classList.add('bg-opacity-20');
})

// thank you state

const submitRate = document.getElementById('submit_rate');

submitRate.addEventListener('click', (e) => {
    e.preventDefault();
    const rateButtons = document.getElementById('rate_buttons');
    const selectedRate = rateButtons.querySelector('.bg-customorange');


    if (!selectedRate) {
        document.getElementById('invalid_rate').classList.remove('hidden'); 
        return; 
    } else {
        document.getElementById('invalid_rate').classList.add('hidden'); 
    }

    document.getElementById('rate_state').classList.remove("flex");
    document.getElementById('rate_state').classList.add("hidden");
    document.getElementById('thanks_state').classList.remove("hidden");
    document.getElementById('thanks_state').classList.add("flex", "flex-col", "items-center");

    // Selected rate message 
    document.getElementById('selected_rate').innerHTML = selectedRate.innerHTML;
});






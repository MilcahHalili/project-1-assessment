/*----- constants -----*/

/*----- app's state (variables) -----*/
var sum;

/*----- cached element references -----*/
displayEl = document.querySelector('h1');
inputEl = document.querySelector('input');


/*----- event listeners -----*/

document.getElementById('plus').addEventListener('click', function() {
    sum += parseFloat(inputEl.value);
    render();
});

document.getElementById('minus').addEventListener('click', function() {
    sum -= parseFloat(inputEl.value);
    render();
});

/*----- functions -----*/
function init() {
    sum = 0;
    inputEl.value = '1';
    render();
}

function render() {
    displayEl.textContent = sum + sum;
    displayEl.style.color = sum >= 0 ? 'black' : 'red';
}

init();
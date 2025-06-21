const countButton = document.querySelector('.btn-count');
const resetButton = document.querySelector('.btn-reset');
const malaCount = document.querySelector('.mala-count');
const totaNaamlCount = document.querySelector('.total-count');

let count = 0;
let totalMalaCount = 0;

malaCount.textContent = totalMalaCount;
totaNaamlCount.textContent = count;

function totalCount(){
    count++;
    totaNaamlCount.innerHTML = count;
    // alert(count);
    if(count % 108 === 0){
        totalMalaCount++;
        malaCount.textContent = totalMalaCount;
    }
}

function resetCount(){
    count = 0;
    totalMalaCount = 0;
    malaCount.textContent = totalMalaCount;
    totaNaamlCount.textContent = count;
    // alert(count);
}


countButton.addEventListener('click', totalCount);
resetButton.addEventListener('click', resetCount);
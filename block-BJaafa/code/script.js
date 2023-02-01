function main() {

let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let reset = document.querySelector('.reset');
let h1 =document.querySelector('h1');

let count = 0;

inc.addEventListener('click', function() {
    count = count + 1;
    h1.innerText =count;
});

dec.addEventListener('click', function() {
    count = count - 1;
    h1.innerText = count;
});

reset.addEventListener('click', function() {
    count = 0;
    h1.innerText = count;
})

}
main();
// let name = document.querySelector('#text');
// let email = document.querySelector('#email');
// let select = document.querySelector('#geners');
// let color = document.querySelector('#color');
// let range = document.querySelector('#range');

// let terms = document.querySelector('#terms')

let form = document.querySelector("form");
let model = document.querySelector(".model_overlay");
let dataModel = document.querySelector(".data_model");


let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.text = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.genre = form.elements.genre.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;


    model.classList.add("open");
    let close = document.querySelector(".model_close");
    close.addEventListener("click", () => {
        model.classList.remove(open);
    });
    displayInfo(userInfo);

};

function displayInfo(data = {}) {
    dataModel.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.text}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let genre = document.createElement("p");
    genre.innerText = `You Love: ${data.genre}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`
    let range = document.createElement("p");
    range.innerText = `Rating: ${data.range}`
    let book = document.createElement("p");
    book.innerText = `Book Genre: ${data.drone}`
    let terms = document.createElement("p");
    terms.innerText = `${data.terms ? 
        "Are you agree to Terms and Conditions." : ""}`;

    dataModel.append(h1, email, genre, color, range, book, terms);
}


form.addEventListener('submit', handleSubmit);


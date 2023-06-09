const AddBookBtn = document.querySelector("[data-form-container-target]");
const overlay = document.getElementById("overlay");
const formContainer = document.getElementById("form_container")
const cardsContainer = document.querySelector(".cards_container")
const form = document.querySelector(".form");

AddBookBtn.addEventListener("click", () => {
    openPopUpButton(AddBookBtn)
});

function openPopUpButton(AddBookBtn) {
    if (AddBookBtn == null) return
    formContainer.classList.add("active")
    overlay.classList.add("active")
}

//Close popUp by clicking out
window.addEventListener("click", function(event) {
    if (event.target.id === "overlay") {
        formContainer.classList.remove("active")
        overlay.classList.remove("active")
    }
});

let myLibrary = [];

//Constructor
function Book(title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook)
    console.log(myLibrary)
    loopThrough()
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    addBookToLibrary()
    formContainer.classList.remove("active")
    overlay.classList.remove("active")
});

function loopThrough() {
    myLibrary.forEach(element => {
        const cardDiv = document.createElement("div");
        
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pRead = document.createElement("p");
        const deleteBtn = document.createElement("button")
        
        deleteBtn.innerHTML = "Remove"
        
        pTitle.textContent = element.title;
        pAuthor.textContent = element.author;
        pPages.textContent = element.pages;
        pRead.textContent = element.read;
        
        cardsContainer.appendChild(cardDiv);
        cardDiv.appendChild(pAuthor);
        cardDiv.appendChild(pTitle);
        cardDiv.appendChild(pPages);
        cardDiv.appendChild(pRead);
        cardDiv.classList.add("insideContent");
        cardDiv.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            cardDiv.style.display = "none";
        });
    })
};





const AddBookBtn = document.querySelector("[data-form-container-target]");
const overlay = document.getElementById("overlay");
const formContainer = document.getElementById("form_container")
const cardsContainer = document.querySelector(".cards_container")
const form = document.querySelector(".form");

AddBookBtn.addEventListener("click", () => {
    openPopUpButton(AddBookBtn);
});

//test
let isSubmitListenerAdded = false;

function openPopUpButton(AddBookBtn) {
    if (AddBookBtn == null) return
    formContainer.classList.add("active")
    overlay.classList.add("active")
    form.reset()
};

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

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook)
    loopThrough()
};

form.addEventListener("submit", (event) => {
    event.preventDefault()
    addBookToLibrary()
    formContainer.classList.remove("active")
    overlay.classList.remove("active");
});

function loopThrough() {
    cardsContainer.textContent = '';
    myLibrary.forEach(element => {
        const cardDiv = document.createElement("div");
        
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pRead = document.createElement("p");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn")
        
        
        deleteBtn.innerHTML = "Remove"
        
        pTitle.textContent = element.title;
        pAuthor.textContent = element.author;
        pPages.textContent = element.pages;
        // pRead.textContent = element.read;

        //test
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = element.read ? "Read" : "Not Read";
        toggleBtn.classList.add("greenBtn");
        if (!element.read) {
          toggleBtn.classList.add("red");
        }
    
        toggleBtn.addEventListener("click", () => {
          element.toggleRead();
          toggleBtn.textContent = element.read ? "Read" : "Not Read";
          toggleBtn.classList.toggle("red");
        });
    
        
        cardsContainer.appendChild(cardDiv);
        cardDiv.appendChild(pAuthor);
        cardDiv.appendChild(pTitle);
        cardDiv.appendChild(pPages);
        // cardDiv.appendChild(pRead);
        cardDiv.classList.add("insideContent");
        //test
        cardDiv.appendChild(toggleBtn);
        cardDiv.appendChild(deleteBtn);
        pPages.textContent = `${element.pages} pages`;

        deleteBtn.addEventListener("click", () => {
            let whatIndex = myLibrary.indexOf(element);
            myLibrary.splice(whatIndex, 1);
            cardDiv.remove();
            console.log(myLibrary);
        });
    });
};





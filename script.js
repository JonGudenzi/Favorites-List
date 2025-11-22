const favForm = document.getElementById("favForm");
const favInput = document.getElementById("favInput");
const errorMsg = document.getElementById("errorMsg");
const favList = document.getElementById("favList");

let favorites = [];

favForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const userInput = favInput.value.trim();
    if(userInput === "") {
        errorMsg.textContent = "Please enter a favorite item";
        favInput.focus();
        return;
    }
    errorMsg.textContent = "";
    favInput.value = "";
    favInput.focus();
    favorites.push(userInput);
    saveFavorites();
    render();
}

function render() {
    favList.innerHTML = "";
    favorites.forEach(function(item, index) {
        const li = document.createElement("li");
        li.textContent = item;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function() {
            favorites.splice(index, 1);
            render();
        })
        favList.appendChild(li);
    })
}

function saveFavorites() {
    const data = JSON.stringify(favorites);
    localStorage.setItem("favorites", data);
}
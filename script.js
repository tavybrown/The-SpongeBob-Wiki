document.addEventListener("DOMContentLoaded", () => {
  const characterList = document.getElementById("character-list");

  if (characterList) {
    fetch("characters.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(character => {
          const characterDiv = document.createElement("div");
          characterDiv.classList.add("character");
          characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
          `;
          characterList.appendChild(characterDiv);
        });
      })
      .catch(error => console.error("Error loading characters:", error));
  }
});
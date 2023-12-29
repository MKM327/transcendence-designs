function handleMultiplayerClick() {
  let multiplayerButton = document.getElementById("multiplayer-button");
  let multiplayerContainer =
    document.getElementsByClassName("multiplayer-menu")[0];
  let multiplayerCloseButton = document.getElementById("multi-close-button");
  multiplayerButton.addEventListener("click", () => {
    multiplayerContainer.classList.toggle("d-flex", true);
  });
  multiplayerCloseButton.addEventListener("click", () => {
    multiplayerContainer.classList.toggle("d-flex", false);
  });
}
handleMultiplayerClick();

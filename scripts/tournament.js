function handleContext() {
  let tournamentParticipants = document.getElementsByClassName(
    "tournament-participant"
  );
  for (let element of tournamentParticipants) {
    element.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const contextElement = document.getElementById("tournament-context");
      contextElement.style.top = `${event.clientY}px`;
      contextElement.style.left = `${event.clientX}px`;
      contextElement.style.visibility = "visible";
    });
  }

  document.addEventListener("click", (event) => {
    const contextElement = document.getElementById("tournament-context");
    if (event.target !== contextElement) {
      contextElement.style.visibility = "hidden";
    }
  });
}
async function App() {
  handleContext();
}
App();

function handleValue(e) {
  let value = document.getElementById("range-input").value;
  let label = document.getElementById("range-value");
  label.innerHTML = value;
}
function App() {
  document.getElementById("range-input").addEventListener("input", handleValue);
}
App();

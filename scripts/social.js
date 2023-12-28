let chatContainer = document.getElementsByClassName("chat-container")[0];

function toggleChat() {
  if (chatContainer.classList.contains("chat-closed")) {
    chatContainer.classList.add("chat-transition");
    setTimeout(() => {
      chatContainer.classList.remove("chat-transition");
      chatContainer.classList.remove("chat-closed");
    }, 1000);
  } else {
    chatContainer.classList.add("chat-transition");
    setTimeout(() => {
      chatContainer.classList.remove("chat-transition");
    }, 500);
    chatContainer.classList.add("chat-closed");
  }
}
let allUsers = document.getElementsByClassName("user-wrapper");
for (let i = 0; i < allUsers.length; i++) {
  allUsers[i].addEventListener("click", toggleChat);
}

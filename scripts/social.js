let chatContainer = document.getElementsByClassName("chat-container")[0];
let socialWrapper = document.getElementsByClassName("social-container")[0];
function toggleChat() {
  if (chatContainer.classList.contains("chat-closed")) {
    chatContainer.classList.add("chat-transition");
    setTimeout(() => {
      chatContainer.classList.remove("chat-transition");
      chatContainer.classList.remove("chat-closed");
    }, 1000);
    socialWrapper.classList.add("social-wrapper-open");
    socialWrapper.classList.remove("social-wrapper-closed");
  } else {
    chatContainer.classList.add("chat-transition");
    setTimeout(() => {
      chatContainer.classList.remove("chat-transition");
      socialWrapper.classList.add("social-wrapper-closed");
    }, 1000);
    chatContainer.classList.add("chat-closed");
  }
}
let allUsers = document.getElementsByClassName("user-wrapper");
for (let i = 0; i < allUsers.length; i++) {
  allUsers[i].addEventListener("click", toggleChat);
}

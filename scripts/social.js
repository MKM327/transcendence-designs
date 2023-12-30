function handleChatState() {
  let chatContainer = document.getElementsByClassName("chat-container")[0];
  let socialWrapper = document.getElementsByClassName("social-container")[0];
  let chatCloseButton = document.getElementById("chat-close-button");

  chatCloseButton.addEventListener("click", () => {
    console.log("clicked");
    chatContainer.classList.add("chat-transition");
    setTimeout(() => {
      chatContainer.classList.remove("chat-transition");
      socialWrapper.classList.add("social-wrapper-chat-closed");
    }, 1000);
    chatContainer.classList.add("chat-closed");
  });
  function toggleChat() {
    if (chatContainer.classList.contains("chat-closed")) {
      chatContainer.classList.add("chat-transition");
      setTimeout(() => {
        chatContainer.classList.remove("chat-transition");
        chatContainer.classList.remove("chat-closed");
      }, 1000);
      socialWrapper.classList.add("social-wrapper-open");
      socialWrapper.classList.remove("social-wrapper-chat-closed");
    }
  }
  let allUsers = document.getElementsByClassName("user-wrapper");
  for (let i = 0; i < allUsers.length; i++) {
    allUsers[i].addEventListener("click", toggleChat);
  }
}
function handleSelectedPost() {
  let allCommentButtons = document.getElementsByClassName("comment-button");
  let socialWrapper = document.getElementsByClassName("social-wrapper")[0];
  let selectedPost = document.getElementsByClassName("selected-post")[0];
  for (let i = 0; i < allCommentButtons.length; i++) {
    allCommentButtons[i].addEventListener("click", () => {
      socialWrapper.classList.add("social-wrapper-closed");
      setTimeout(() => {
        selectedPost.classList.add("selected-post-open");
      }, 1000);
    });
  }
  let backButton = document.getElementById("comment-back-button");
  backButton.addEventListener("click", () => {
    socialWrapper.classList.remove("social-wrapper-closed");
    selectedPost.classList.remove("selected-post-open");
  });
}
handleSelectedPost();
handleChatState();

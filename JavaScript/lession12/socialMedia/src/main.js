import { createPost, deletePost, fetchPosts, updatePost } from "./api";
import "./style.css";
import { renderPosts } from "./ui";

const author = document.querySelector("#author-input");
const content = document.querySelector("#content-input");
const postBtn = document.querySelector("#post-btn");
const postContainer = document.querySelector("#posts-container");
let currentId = null;

async function initApp() {
  const posts = await fetchPosts();
  renderPosts(posts);
}

initApp();

postBtn.addEventListener("click", async () => {
  const authorInput = author.value;
  const contentInput = content.value;

  if (!authorInput || !contentInput) {
    alert("Please, fill out the fild!");
  }

  if (currentId !== null) {
    const updateData = {
      author: authorInput,
      content: contentInput,
    };
    
    await updatePost(currentId, updateData);

    currentId = null;
    postBtn.textContent = "Опубликовать";
    postBtn.style.backgroundColor = "#1877f2";
  } else {

  const newPost = {
    author: authorInput,
    content: contentInput,
    likes: 0,
  };

  await createPost(newPost);
  }
  author.value = "";
  content.value = "";

  initApp();
});

postContainer.addEventListener("click", async (e) => {
  const card = e.target.closest(".post-card");
  console.log(e.target);

  if (!card) return;

  const postId = card.dataset.id;
  console.log(postId);

  if (e.target.closest(".delete-btn")) {
    await deletePost(postId);
    initApp();
  } else if (e.target.closest(".like-btn")) {
    const likeBtn = e.target.closest(".like-btn");
    let currentLikes = Number(likeBtn.dataset.likes);
    let newLikes = currentLikes + 1;
    console.log(newLikes);

    await updatePost(postId, { likes: newLikes });
    initApp();
  } else if (e.target.closest(".edit-btn")) {
    const oldAuthor = card.dataset.author;
    const oldContent = card.dataset.content;

    currentId = postId;

    author.value = oldAuthor;
    content.value = oldContent;

    postBtn.textContent = "💾 Сохранить изменения";
    postBtn.style.backgroundColor = "#28a745";
  }
});

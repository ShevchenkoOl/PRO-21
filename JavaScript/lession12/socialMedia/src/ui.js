const postContainer = document.querySelector("#posts-container");
const listPosts = document.createElement("ul");
postContainer.append(listPosts);

export function renderPosts(posts) {
  listPosts.innerHTML = "";

  posts.forEach((post) => {
    listPosts.insertAdjacentHTML(
      "afterbegin",
      `<li class="post-card" data-id="${post.id}" data-author="${post.author}" data-content="${post.content}">
        <h3>👤 ${post.author}</h3>
        <p>${post.content}</p>
        <div class="post-actions">
            <button class="like-btn" data-likes="${post.likes}">❤️ ${post.likes}</button>
            <button class="edit-btn">✏️ Ред.</button>
            <button class="delete-btn">🗑️ Удал.</button>
        </div>
    </li>`,
    );
  });
}

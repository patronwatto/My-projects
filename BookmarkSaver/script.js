
const bookmarkListEl = document.getElementById('bookmark_list');
const bookmarkFormEl = document.getElementById('bookmark_form');
const bookmarknameEl = document.getElementById('bookmark_name');
const bookmarkURLEl = document.getElementById('bookmark_url');

let bookmarks = JSON.parse(localStorage.getItem("bookmarkinfo")) || [];

bookmarkFormEl.addEventListener("submit", addBookmark);

function addBookmark (e){
    e.preventDefault();

    // get form values
    const name = bookmarknameEl.value.trim();
    const url = bookmarkURLEl.value.trim();

    bookmarks.push({
        id:Date.now(),
        name, 
        url,
    });

    // console.log(transactions);

    localStorage.setItem("bookmarkinfo",JSON.stringify(bookmarks));
    updateBookmarkList();
   
    bookmarkFormEl.reset();
}

function updateBookmarkList() {
    bookmarkListEl.innerHTML = "";

    const sortedBookmarks = [...bookmarks].reverse();

    sortedBookmarks.forEach((bookmark) => {
        const BookmarkEl = createBookmarkElement(bookmark);
        bookmarkListEl.appendChild(BookmarkEl);
    })
}

function createBookmarkElement(bookmark){
    const li = document.createElement("li");
    li.classList.add("bookmark");
    // li.classList.add(transaction.amount > 0 ? "income":"expense"); 
    
    // Todo: update the amount formating
    li.innerHTML = `
    <span><a href="${bookmark.url}" class="bookmark-name">${bookmark.name}</a></span>
    <span><button class="delete-btn" onclick="removeBookmark(${bookmark.id})">Delete</button></span>`;
    return li;
}

function removeBookmark(id){
    bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    localStorage.setItem("bookmarkinfo", JSON.stringify(bookmarks));
    updateBookmarkList();
}

    updateBookmarkList();
 

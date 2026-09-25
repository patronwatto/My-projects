const addBookmarkBtn = document.getElementById("submitbtn");
const bookmarkList = document.getElementById("bookmark_list");
const bookmarkNameInput = document.getElementById("bookmark_name");
const bookmarkUrlInput = document.getElementById("bookmark_url");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", function () {
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();

    if(!name || !url){
        alert("Please enter both name and correct URL");
        return;
    }else{
        if(!url.startsWith("http://") && !url.startsWith("https://")){
            alert("Please enter a valid url starting either with http:// or https:// followed by the domain name");
            return;
        };
        addBookmark(name,url);
        saveBookmark(name,url);  
        bookmarkNameInput.value = "";
        bookmarkUrlInput.value = "";
    };

} );

function loadBookmarks(){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
};

function addBookmark(name,url){
    const li = document.createElement("li");
    const a = document.createElement("a");
    const removeBnt = document.createElement("button");

    li.classList.add("bookmark");
    a.href = url;
    a.textContent = name;
    a.target = "_blank";
    removeBnt.textContent = "Remove";

    removeBnt.addEventListener("click", function(){
        bookmarkList.removeChild(li);
        removeBookmarkFromStorage(name,url);
    });

   li.appendChild(a);
   li.appendChild(removeBnt);

   bookmarkList.appendChild(li);
};

function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [] ;
};

function saveBookmark(name,url){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({name,url});
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); 
};

function removeBookmarkFromStorage(name,url){
    let bookmarks = getBookmarksFromStorage();
    bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};



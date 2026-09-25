const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.getElementById("profile-container");
const errorContainer = document.getElementById("error-container");
const avatar = document.getElementById("profile-pic");
const nameElmt = document.getElementById("name");
const usernameElmt = document.getElementById("username");
const bioElmt = document.getElementById("bio");
const locationElmt = document.getElementById("location");
const joinedDateElmt = document.getElementById("joined-date");
const profileLink = document.getElementById("profile-link");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const companyElmt = document.getElementById("company");
const blogElmt = document.getElementById("blog");
const twitElmt = document.getElementById("twitter");
const companyContainer = document.getElementById("company-container");
const blogContainer = document.getElementById("blog-container");
const twitContainer = document.getElementById("twitter-container");
const reposContainer = document.getElementById("repos-container");


searchBtn.addEventListener("click", searchAccount);

searchInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") searchAccount();
});


async function searchAccount() {
    const searchStr = searchInput.value.trim();
    const BASE_URL = "https://api.github.com/users/";
    // const REPOS_URL = "https://api.github.com/users/";

    if(searchStr === ""){
        errorContainer.textContent = "";
        errorContainer.textContent = "Sorry we can't search an empty string. Please Enter a github user account name to search !!";
        errorContainer.classList.remove("hidden");
    };

        try {
            profileContainer.classList.add("hidden");
            errorContainer.classList.add("hidden");

            const response = await fetch(`${BASE_URL}${searchStr}`);
            if(!response.ok){throw new Error("User not found"); };
            
            const data = await response.json();
            console.log(data);

            displayUserData(data);

            fetchRepositories(data.repos_url);

        } catch(error) {
           showError();
        
            
        };
};

async function fetchRepositories(url) {
    reposContainer.innerHTML = `<div class="loading-repos">Loading repositories...</div>` ;
    // console.log(reposContainer);
    try {
        const response2 = await fetch(url);
        const repos = await response2.json();

        displayRepos(repos);

    } catch(error) {
        reposContainer.innerHTML = `<div class="no-repos"> ${error.message}</div>`;
        // console.log(reposContainer);
    }

};

function displayRepos(repos) {
    if(repos.length === 0){
        reposContainer.innerHTML = `<div class="no-repos"> No repositories found </div>`;
        return;
    };

    reposContainer.innerHTML = "";

    repos.forEach((repo) => {
        const repoCard = document.createElement("div");
        repoCard.className = "repo-card";

        const updatedAt = formatDate(repo.updated_at);  

        repoCard.innerHTML = `
        <a href="${repo.html_url}" target="_blank" class="repo-name">
            <i class="fas fa-code-branch"></i> ${repo.name}
        </a>
        <p class="repo-description"> ${repo.description || "No description available"} </p>
        <div class="repo-meta">
            ${
                repo.language ? `
                <div class="repo-meta-item" >
                    <i class="fas fa-circle"></i> ${repo.language}
                </div>
                ` : ""
            }
            <div class="repo-meta-item">
                <i class="fas fa-star"></i> ${repo.stargazers_count}
            </div>
            <div class="repo-meta-item">
                <i class="fas  fa-code-fork"></i> ${repo.forks_count} 
            </div>
            <div class="repo-meta-item">
                <i class="fas  fa-history"></i> ${updatedAt} 
            </div>
        </div>
        `;

        reposContainer.appendChild(repoCard); 
    });
};


function showError () {
            errorContainer.textContent = "Sorry user not found !!! Please try something else.";
            errorContainer.classList.remove("hidden");
            profileContainer.classList.add("hidden");
};

function displayUserData(user) {
    avatar.src = user.avatar_url;
    nameElmt.textContent = user.name || user.login;
    usernameElmt.textContent = `@${user.login}`;
    bioElmt.textContent = user.bio || "No Bio available";
    locationElmt.textContent = user.location || "Not specified";
    joinedDateElmt.textContent = formatDate(user.created_at);
    // console.log(joinedDateElmt);

    profileLink.href = user.html_url;
    followers.textContent = user.followers; 
    following.textContent = user.following;
    repos.textContent = user.public_repos;
    // console.log(repos);

    if(user.company) companyElmt.textContent = user.company;
    else companyElmt.textContent = "Not specified"; 

    if(user.blog){
        blogElmt.textContent = user.blog;
        // console.log(blogElmt);
        blogElmt.href = user.blog.startsWith("http") ? user.blog : `https://${user.blog}`;
        // console.log(blogElmt);
    } else{
        blogElmt.textContent = "No website";
        blogElmt.href = "#";
    };

    blogContainer.style.display = "flex";
    console.log(blogContainer);
    if(user.twitter_username){
        twitElmt.textContent = `@${user.twitter_username}`;
        twitElmt.href = `https://x.com/${user.twitter_username}`;
    } else{
        twitElmt.textContent = "No X account";
        twitElmt.href = "#";
    };

    twitContainer.style.display = "flex";
    profileContainer.classList.remove("hidden");
};

function formatDate(date){
        return new Date(date).toLocaleDateString("en-US", {
            year:"numeric",
            month:"short",
            day:"numeric", 
        });
};

// searchInput.value = "burakorkmez";
// searchAccount();

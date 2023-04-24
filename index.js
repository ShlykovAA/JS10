console.log("Hello!!!");

// Fetch github users https://api.github.com/users

const mainTegForCards = document.getElementById("test_div");

const loadGitHubUsers = async () => {
  const response = await fetch("https://api.github.com/users");
  const dataFromGitHub = await response.json();
  renderCardForUsers(dataFromGitHub);
}

const renderCardForUsers = (arrayDataUsers) => {
  for (let i = 0; i < arrayDataUsers.length; i++) {
    let currentUser = arrayDataUsers[i];
    const newCardContainer = document.createElement("div");
    const divForAvatarAndLogin = document.createElement("div");
    const photo = avatarForCard(currentUser);
    const login = loginForCard(currentUser);
    const gitHubAccount = accountUrl(currentUser);

    divForAvatarAndLogin.append(photo);
    divForAvatarAndLogin.append(login);
    divForAvatarAndLogin.classList.add("avatar_and_login_container");

    newCardContainer.append(divForAvatarAndLogin);
    newCardContainer.append(gitHubAccount);
    newCardContainer.classList.add("card_container");

    mainTegForCards.append(newCardContainer);
  }
};

const avatarForCard = (objectUser) => {
  const newTegForPhoto = document.createElement("img");
  newTegForPhoto.src = objectUser.avatar_url;
  newTegForPhoto.classList.add("card_avatar");
  return newTegForPhoto;
};

const loginForCard = (objectUser) => {
  const newTegForLogin = document.createElement("p");
  newTegForLogin.innerText = objectUser.login;
  newTegForLogin.classList.add("card_login");
  return newTegForLogin;
};

const accountUrl = (objectUser) => {
  const newTegForUrl = document.createElement("div");
  newTegForUrl.innerHTML = `<a href="${objectUser.html_url}" target="_blank" class="url_account">${objectUser.html_url}</a>`;
  newTegForUrl.classList.add("card_url");
  return newTegForUrl;
}

loadGitHubUsers();
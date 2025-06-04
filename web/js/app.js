const userManager = new Oidc.UserManager(window.oidcSettings);

function updateUI() {
  userManager.getUser().then(user => {
    const output = document.getElementById('output');
    if (user) {
      output.textContent = JSON.stringify(user.profile, null, 2);
    } else {
      output.textContent = 'Not signed in';
    }
  });
}

document.getElementById('login').addEventListener('click', () => {
  userManager.signinRedirect();
});

document.getElementById('logout').addEventListener('click', () => {
  userManager.signoutRedirect();
});

userManager.events.addUserLoaded(updateUI);
userManager.events.addUserUnloaded(updateUI);

updateUI();

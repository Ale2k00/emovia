# Emovia Web Example

This repository contains a small web example that shows how to authenticate a user with an AWS Cognito user pool using the `oidc-client-ts` library.

## Files

- `web/index.html` – main page with login/logout buttons and a status area
- `web/callback.html` – OAuth2 redirect handler page
- `web/register.html` – standalone registration/login example
- `web/style.css` – basic styling
- `web/js/settings.js` – configuration for the Cognito provider
- `web/js/app.js` – logic for sign in/out and displaying the user profile

## Usage

1. Host the contents of the `web/` folder on any web server, for example with `npx serve web`.
2. Add the URL of `callback.html` and the logout URL to your Cognito app client's allowed URLs.
3. Open the site in your browser and click **Login** to start the OIDC flow.
4. After authentication, your profile information will be shown in the status area.

You can freely edit these files in VS Code to change the layout or add new sections as you continue developing the site.

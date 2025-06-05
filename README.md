# Emovia Web Example

 nxojav-codex/imposta-prima-parte-sito-web-con-cognito
This repository contains a basic demo of AWS Cognito authentication and S3 upload for the **Emovia** project.

## Files

- `web/index.html` – home page with login/logout buttons
- `web/dashboard.html` – shows the logged user profile
- `web/upload.html` – simple form to upload files to the public S3 bucket
- `web/register.html` – standalone registration/login example
- `web/callback.html` – OAuth2 redirect handler
- `web/style.css` – basic styling
- `web/js/settings.js` – configuration for Cognito
- `web/js/app.js` – sign in/out logic
- `web/js/upload.js` – handles direct uploads to S3

## Usage

1. Serve the `web/` folder, e.g. with `npx serve web`.
2. Configure your Cognito app client with the callback URL `https://main.df360ms0i6ccd.amplifyapp.com/callback.html` and the same domain for logout.
3. Open `index.html` and click **Login** to authenticate.
4. Once logged in, visit **Dashboard** to see your profile or **Upload** to send files to S3 (bucket `toolsfriends.it001`).

Feel free to edit these files in VS Code and extend the pages with more features.

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
 main

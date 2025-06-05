# Emovia Web Example

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

# Emovia Web Example

Questo repository contiene un semplice esempio di integrazione tra AWS Cognito e caricamento file su S3.

## File principali

- `web/index.html` – pagina iniziale con i pulsanti di login/logout
- `web/dashboard.html` – mostra il profilo dell'utente autenticato
- `web/upload.html` – form per caricare file sul bucket S3
- `web/about.html` – informazioni sul progetto
- `web/contact.html` – pagina di contatto
- `web/register.html` – esempio di registrazione/login
- `web/callback.html` – pagina di gestione del redirect OAuth2
- `web/style.css` – stile di base del sito
- `web/js/settings.js` – configurazione di Cognito
- `web/js/app.js` – logica di autenticazione
- `web/js/upload.js` – caricamento diretto su S3

## Utilizzo

1. Servi la cartella `web/`, ad esempio con `npx serve web`.
2. Configura il client Cognito con l'URL di callback `https://tuodominio/callback.html` e lo stesso dominio per il logout.
3. Apri `index.html` e clicca **Login** per autenticarti.
4. Una volta effettuato l'accesso puoi visitare le altre pagine dal menu.

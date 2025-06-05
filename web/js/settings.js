window.oidcSettings = {
  authority: 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_OiiOjtfVJ',
  client_id: '5lvvggeja9j6lik9hgjn6o6l4v',
  redirect_uri: window.location.origin + '/callback.html',
  post_logout_redirect_uri: window.location.origin + '/',
  response_type: 'code',
  scope: 'openid profile email'
};

Github Client ID: Ov23licqsUw52sXUqJCS
client secret = "2d428f5e909659c7dc177ac6c345b9f02d40d17c"

# OAUTH

- General implementation steps:
  - Choose the provider - google, github
  - Register our application on the OAuth provider - Not requrired for github, Incase of google Oauth - Passport.js library helps
  - Install Oauth library if required - always refer the docs given by the provider
  - Setup the Oauth flow - https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
  - Use the token/data to authenticate etc;

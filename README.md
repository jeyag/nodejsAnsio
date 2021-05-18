### nodejsAnsio   - nodeansio 
##  This Node Application is to document the steps to be followed in order to deploy your application which is running locally to a remote server
##  In our example we develop our local application using node.js and we use the Paas Heroku web server as our remote server
###  Prerequisites :

###  Software we need to install for Windows:
##     1. Visual Studio Code
##     2. GIT to be installed and configured for SSH connection, SSH key generation and adding it under your permitted list.
##     3. Postgresql


###   Steps to be followed:
##     1. Heroku Credentials - Basic Free plan is enough, Create a web application and link it with a Postgresql database 
##     2. Link it with your git account giving authorisation 
#           -click more in your app dashboard and click run console to view the console output
##     3. From your local repository make sure it is connected to the remote repository which is in git.
##     4. Then Add a Procfile with the content 
#                web: npm start
##        in your local repository and push it to the remote repository.

### Expected Output:
## Now your basic node application is running in remote server with the url https://nodeansio.herokuapp.com/ If you want to connect with the postgresql database in cloud connect with it 
## from your locally installed Postgresql and save the changes in the remote data server.
## Then make neccessary changes in the env file .
## Now your application is successfully connected to the database also.



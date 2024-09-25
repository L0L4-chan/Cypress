
 SO: Ubuntu 22.04.5 LTS
 
 1ª steps: installations
  Open a terminal and execute the following commands
 - apt update
 - apt upgrade
 - apt-get install -y nodejs
 - node --version
   out: v12.22.9
 - apt install npm
 - npm -v
   out: 8.5.1
   
   Those are old versións so I needed to install newer ones
   First get rid of the one I got
   
  sudo apt-get remove --purge nodejs libnode-dev
  sudo apt-get autoremove
  sudo apt-get autoclean

  Prep the installation
   
 - curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
 - sudo apt-get install -y nodejs

   Check versions
   node -v
   out: v20.17.0
   npm -v
   out: 10.8.2




Once everything is ready we can start a new proyect:

Using Visual Studio Code
Create a new folder: Project 
Open Visual Studio and select open folder (Project)
open a terminal in Visual studio Code and run
  -npm init -y
  -npm install cypress --save-dev
  
  ---- missing cucumber--- TODO fix it
    - npm install --save-dev @cucumber/cucumber
    - npm i -D cucumber cucumber-tsflow cucumber-pretty ts-node typescript chai
    - npm i -D @types/cucumber @types/chai


To open Cypress run
  -npx cypress open


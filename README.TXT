
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
  -npm install --save-dev cypress-cucumber-preprocessor
  
  ---- missing cucumber--- TODO fix it
    - npm install --save-dev @cucumber/cucumber
    - npm i -D cucumber cucumber-tsflow cucumber-pretty ts-node typescript chai
    - npm i -D @types/cucumber @types/chai

After this review the dependencies file (package.json)
and add some lines
  "cypress-cucumber-preprocessor": {
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filterSpecs": true,
      "omitFiltered": true,
      "e2e": {
        "stepDefinitions": "cypress/support/step_definitions/**/*.{js}"
      },
      "onGlobalStepDefinitions": false,
      "step_definitions": "cypress/e2e/Tests",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
run npm update and fixed any warning by updating packages 

To open Cypress run
  -npx cypress open
  
  
  siguiendo tutorial de https://testgrid.io/blog/cypress-with-cucumber/
  
  
  
  Creamos proyecto
npm init -y       //creamos package.json 

Installar Cypress
npm install cypress --save-dev  // crea package-lock.json
npm install --save-dev cypress-cucumber-preprocessor



git init
git add .
git commit -m "Initial commit"
git config --global user.email "gaiafwfg@gmail.com"
git config --global user.name "L0L4-chan"
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/L0L4-chan/Cypress.git
git branch -M main
git remote add origin https://github.com/L0L4-chan/Cypress.git
git branch -M main


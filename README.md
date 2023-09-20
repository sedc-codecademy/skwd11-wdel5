# Build pizza app! with ANGULAR, .NET7 and POSTGRESQL

## FRONTEND PART CONFIG

### Init Angular project
1. Install Node JS - https://nodejs.org/en/download/ (used only the first time) [LTS version]
2. Confirm installation - `node -v` and `npm -v` should return a value (ex. 18.17.1 and 6.14.15)
3. Install Angular CLI - `npm install -g @angular/cli` (used only the first time)
4. `ng version` to check if it's installed
5. Create a new folder for the project and open the folder in VS Code
6. Open terminal and create new project - `ng new client`
   1. Would you like to add Angular routing? - Y
   2. Which stylesheet format would you like to use? - SCSS
   3. Would you like to share pseudonymous usage data about this project with the Angular Team
      at Google (not important) - N
7. Run app `ng serve`
8. Open project in browser - http://localhost:4200

### Install Angular Material
1. Install Angular Material - `ng add @angular/material`
2. Choose a prebuilt theme name (ex. the first one), or "custom" for a custom theme
3. Set up global Angular Material typography styles - Y
4. Include the Angular animations module? - Include and enable animations

### Using Angular CLI
1. Create component - `ng generate component components/<NAME_OF_COMPONENT> --standalone`
2. Create service - `ng generate service services/<NAME_OF_SERVICE>`
3. Create guard - `ng generate guard guards/<NAME_OF_GUARD>`
4. Create pipe - `ng generate pipe pipes/<NAME_OF_PIPE>`
5. Create directive - `ng generate directive directives/<NAME_OF_DIRECTIVE>`
6. skip tests (this is added to each of the previous commands to prevent creating unnecessary .spec files) - `--skip-tests`

### Useful links
- https://angular.io/
- https://material.angular.io/

### Useful VS Code Extensions (Angular related)
- AutoImport https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
- Angular Language Service https://marketplace.visualstudio.com/items?itemName=Angular.ng-template


_____________________________________________________________
## BACKEND PART CONFIG 

1. Install visual studio 2022 - `STEP BY STEP GUIDE => https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2022`

2. Install and set up PostgreSQL and PGAdmin4 - `STEP BY STEP GUIDE => https://commandprompt.com/education/how-to-download-and-install-postgresql/`

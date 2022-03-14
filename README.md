# learn-angular

#Installing of Angular

run as admin for windows
npm install -g @angular/cli@latest

create angular project
go to the folder to create the project
ng new <project-name> --no-strict

go into the folder
cd <project-name>

run ng serve (same as npm start)
 
  
#Adding of Dependencies(Bootstrap)
 add bootstrap to angular
npm install --save bootstrap@3

add dependencies in angular.json
There are alrd prebuilt dependencies but we are adding bootstrap as one of our styling format

so go to angular.json

architect: build: styles: add "node_modules/bootstrap/dist/css/bootstrap.min.css"

 Verify the installation by going to browser > inspect > source > Style.css
  

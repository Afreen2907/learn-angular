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

#Creating components

all the app related works goes as sub folder of app folder

Good Practise is to have the folder name same as the component name
Good naming convention: <component name>.component.<file extension>
Good class name: <componentname>Component {ServerComponent}

Add decorators with "@" symbol and make sure to import it for typescript
Then we need to import the decorator for typscript to know and it will parse the file for the javascript.

Setup meta data at the decorator
1) Selector -> have to be unique selector
2) Template -> creation of html template and referenced in ts file

#About Modules
What is app modules?

Angular uses components to build the web pages
while app modules bundle them together

Register the new components in the appModule
add the new component in declaration array


#Generating Components using CLI

at the terminal > ng generate componenet servers
short form -> ng g c servers

It will automatically create components and register the components in the module
  
#Selector in decorators

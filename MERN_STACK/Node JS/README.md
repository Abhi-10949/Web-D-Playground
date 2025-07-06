# From here I am going to start the Backend part

## All about NODE.Js

* Node.Js is the Java Script runtime environment
* It is used for server side programming.
* Node.Js is not a language, library or framework.

## Node REPL (Read, Evaluate, Print and Loop)
* .help :- gives us commands
* Node Files:- node fileName.js
* Process: This object provides  information about, and control over, the current Node.js process.
* process.argv:- returns an array containing the command-line arguments passed when the Node.js process was launched.

# module.exports (it is a special object)
* in this we can be able to send the property and methods to any other files in the same diractory
* it is requiring files
* require() :- a built-in function to include external modules that exist in separate files.

* If I have to include the properties and methods from the another folder to the main file, for that we will create a file in that another folder, so that whith the use of that file we can be able to fetch the property to the main file.

## All about NPM (Node Package Manager)
* It is the standard package manager for Node.js i.e; npm is the library of packages. e.g. Express.js, React etc.
* It is also a Command Line Tool 
* It is pre-installed with the Node.js
* We have to write npm in the terminal to access to the various command.
* To install any packages we use : npm install <- package name ->
* Go to nmpjs.com to search for various packages (currently we will use Figlet as the learning phase)

* node_modules: this will contain every installed dependency for your project.

* package.json :- this file contains descriptive and functional metadata (i.e, data about data which means information about our projects) about a project, such as a name,version, and dependencies.
* NOTE: if by mistake the node_module get deleted, but then also we can be able to download it with the help of package.json. We only need to pass the command npm install in the terminal to get it again
* To initilize our new project we have to use <- npm init ->
* At the time of push the project on the Git Hub ther is no need of pushing the node_modules because we can be able to download it if we have the package.json file

## Local v/s Global
* local installation is the best practice in compare to global installation
* And if we have to install the package globally we will use this command:- npm install -g <- package name -> and for this we have to write the following command : 
[ sudo chown -R $USER /usr/local/lib/node_modules OR 
sudo npm install -g figlet ], this command is written because we need admin access(i.e, device password) before installing globally. Other it will give us error.

* After all this we have to link the package with the command:
npm link <- package name ->

## Require v/s import
* import {sum} from "./math.js"
* NOTE: In any of the project only use one of them either require or import.
* After all export and import we also need to create the package.json file in the same diractory and we will have to add one key-value-pair as --> "type" : "module"

* NOTE: We can't selectively load only the peices we need with require but with import, we can selectively load only the peices we need, which can save memory.

* In require : loading is synchronous(i.e, it follow's the sequence in which it is being written)
* In imort : but can be asynchronous.


## Library v/s Framework
* Library : A library is a collection  of pre-written code that can ber used to perform specific tasks. eg.:- axios

* Framework : A framework is a set of pre-written code that provides the stracture for developing software applications. eg.: express


## All about Node : Express
* Express : A Node.js web application framework that helps us to make web applications.
* It is used for server side programming.
* We will mainly use express for the following :-
* ➔ Listen for incoming request
* ➔ Uesd for parsing the request
* ➔ Mtach with the suitable route
* ➔ And according to request generate the response.

* NOTE : Express is located on the server-side

## Routing: it is the process of selecting the path for traffic in a network or between or across multiple networks.

* NOTE: res.send() this function is used to send the respond to the browser with
the help of server

* We can able to send only one responce for the same path it may be either : snigle string single HTML page  or it may be a single object

## Nodemon (package)
* To automatically restart the server with code changes
* to install use : npm install -g nodemon OR sudo npm install -g nodemon


## Node : EJS(Embedded Java Script Templates)
* EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

## Templating : it can be termed as Blueprint/loayout
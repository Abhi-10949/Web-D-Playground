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
* to initilize the json package with the default settings we use : npm init -y .
* we also install express using: npm i express .
* alos install EJS: npm i ejs .
* NOTE: we do not require EJS because Express automatically rquire it internaly as mentioned below:
* `app.set("view engine", "ejs");`

* NOTE: In EJS we do not send the messages we use to do "rendering i.e.,  sending the files" the messag's.
* so for this we will create the folder in the EJS diractory as "views" as we will store the templates in this folder.
* we will create the template using : home.ejs   in views folder

* If we want to access the view folder from the server side diractory we can set the following command: app.set("views", path.join(__dirname, "/views"));
* i this path is the package which we have to require it first: const path = require("path");

## Interpolation Syntax : Interpolation refers to embedding expression in marked up text.
* with the use of this we made the EJS dynamic.
## for EJS documentation visit `ejs.co` .

## Conditional Statements in EJS 
* For this we use : <% 'Scriptlet' tag, for control-flow, no output

## Include in EJS
* it is the way to create the sub-template's. 
* Includes are relative to the template with the include call.
* <%- Outputs the unescaped value into the template.



## All about GET and POST Request
## GET: 
* it is used to get some response
* data send in query string(limited, string data and visible in URL)

## POST:
* used to post something(for Create/Write/Update)
* Data sent via request body (any type of data)


## REST (Representational State Transfer)
* REST is an architectural style that define a set of constraints that is use for creating the web services.
* NOTE:- from REST the concept of RESTful API comes which usees the concept/law of REST.
* We use RESTful API to perform the CRUD operation (i.e this comes from the Data Base concept) C - Create, R - Read, U - Update, D - Delete
* To learn more about the RESTful API visit: https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/#h-accept-and-respond-with-json

* CRUD Operations:
    * GET : retrives resources (i.e R - read)
    * POST : to submit new data to the server (i.e C - create)
    * PUT : update existing data
    * PATCH : update existing data partially
    * DELETE : removes data
    * NOTE : resources are simply called as post(i.e username, content) in the CRUD.


## Creating RESTful APIs :-
*  Operation   Syntax      description                 Route/path

* GET         /posts      to get data for all posts   index(main)
* POST        /posts      to add a new post           CREATE
* GET         /posts/:id  to get one post(using id)   VIEW
* PATCH       /posts/:id  to update specific post     UPDATE
* DELETE      /posts/:id  to delete specific post     DESTROY



## NOTE: method-override -> Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


# Data Base : SQL (with MySQL Database)
* NOTE: SQL is a language and MySQL is Database. And later on we will cover non-relational database as (MongoDB).
* Database : is a collection of data in a format that can be easily accessed.
* Why Database?
    * can store large data.
    * features like security, scalability etc.
    * Easier to insert, update or delete data.


* SQL v/s NoSQL
    * SQL :--
        * Relational Database (data stored in tables(table means relation))
        * eg:- MySQL, Oracle, PostgreSQL etc.

    * NoSQL:-- (it is a collection of different types of database)
        * Non Relational Database(data stored in document/key-value/graphs etc.)
        * eg:-- MongoDB, Cassandra, Neo4j etc.


* SQL (Structured Query Language) : it is a programming language used to interect with relational databases.
    * columns --> design(schema)
    * rows --> tuple(info about singal entity)

* Constraints:
    * NOT NULL : columns can't have a null values
    * UNIQUE : all values in columns are different
    * DEFAULT : sets the default value of a column
    * CHECK : it can limit the values allowed in column 
        * this is the syntax [CONSTRAINT age_check CHECK (age>=13)] in this giving the name of the constraints is optional.
    * PRIMARY KEY : makes a column unique and not null but used only for one.
        * it is column or set of columns in a table that uniquily identifies each row
        * there is only one pk and it should not be null.
    * FORIGN KEY : prevent actions that would destroy links between tables
        * FOREIGN KEY (cus_id) references customer(id), <-- syntax
        * fk is a column or set of columns in a table that refers to the pk in table.
        * fk can have duplicate and null values.
        * there can be multiple FKs.
    
* CLAUSES:-
    * WHERE CLSUSE :- to define some conditions
        * SYNTAX :- SELECT  col1, col2 FROM table_name WHERE conditions;
            * Operators:-
                * Arithmatic Operators: +,-,*,/,%
                * Comparision Operatiors: =, !=, >, <, <=, >=
                * Logical Operators: AND , OR , NOT, IN, BETWEEN, ALL, LIKE, ANY.
                * Bitwise Operators: &, | .

* Frequently used where clause operator's are:-
    * AND (to check that both the condition should be true)
    * OR (to check that one condition should be true in both)
    * BETWEEN (to select for a given range)
    * IN (matches any value in the list)
    * NOT (to negate the given condition)

* LIMIT Clause:- sets an upper limit on a number of (tuple) rows to be returned.
    *  SYNTAX : SELECT col1, col2 FROM table_name LIMIT number;
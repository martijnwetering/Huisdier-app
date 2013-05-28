Huisdier-app
============

EE-opdracht HaN

### Directory Layout
<pre><code>
client/                				--> all of the files to be used in production client side
  	components/       				--> all vendor js files
    	angular/        			--> 
    		angular.js 				--> the latest angular js
    		angular.min.js 	    	--> the latest minified angular js
    	angular-cookies/
    		angular-cookies.js 		--> the latest angular-cookies js
    		angular-cookies.min.js  --> the latest minified angular-cookies js
    	angular-googlemaps/
    		angular-googlemaps.js  	--> the latest angular google maps js
    	angular-resource/
    		angular-resource.js 	--> the latest angular-resource js
    		angular-resource.min.js --> the latest minified angular-resource js
    	angular-sanitize/
    		angular-sanitize.js     --> the latest angular-sanitize js
    		angular-sanitize.min.js --> the latest minified angular-sanitize js
	favicon.ico 					--> little icon for browser tab (dummy)	
	index.html 						--> index page
	robots.txt    					--> this is for search engines 
	scrips/ 						--> all the custom javascript files
		app.js 						--> main application javascript file for angular
		controllers/            	--> all controllers for angular
			main.js 				--> main controller file
	styles/							--> all css files
		bootstrap.css 				--> twitter bootstrap css
		main.css 					--> main css file
	views/							--> all the views
		partials/ 					--> all the views that are called by ng-include

server/                             --> all of the files to be used in production server side
    db.js 							--> serverside file for the mongoose database schema's
    node_modules/					--> all node modules installed with node package manager
    	express						--> express framework
    	mongoose					--> used to interact with mongoDB
        path                        --> module used to join the client side 
    routes/						    --> map for modules for the different routes
    server.js 						--> main node file. starts the server and defines all routes etc
</pre></code>

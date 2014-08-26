My Meteor Boilerplate
=========================

I was getting tired of creating the same folder structure over and over again.

I couldn't get [Meteor boilerplate](https://github.com/matteodem/meteor-boilerplate) to work with Meteor 0.9 so I made this.

These packages are included:

- standard-app-packages
- spiderable
- iron:router
- mrt:momentjs
- sacha:spin
- accounts-password
- accounts-facebook
- accounts-ui
- underscore
- meteor-collection-hooks

##Codekit

Inside the public folder there's a Codekit Compass project set up.

##Grunt

If you rather prefer [Grunt](http://gruntjs.com/) you can find everything set up inside the /private/grunt directory.

	cd private/grunt
	npm install
	grunt
	grunt watch

### JS
/public/scripts/libs/* and /public/scripts/app.js get concatenated and minified to /public/scripts/production.min.js

### Compass
/public/sass/screen.scss gets compiled to /public/stylesheets/screen.css

### Images
/public/images/* all get optimized!

Gruntfile based on [chriscoyier/My-Grunt-Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate).




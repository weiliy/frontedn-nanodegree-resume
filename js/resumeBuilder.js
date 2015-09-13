// TODO: Build four JSONs, each one representing a different resume section,
// TODO: bio JSON
// welcomeMessage: string 
// display: function
var bio = {
	"name": "Weili Yi",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+86 13476214964",
		"email": "yi@weiliy.net",
		"github": "weiliy",
		"twitter": "@weelyai",
		"location": "Wuhan"
	},
	welcomeMessage: "A web developer's welcome message!",
	skills: [
	"HTML", "CSS", "JavaScript", "Bootstrap", "Linux", "Shell", "Python"
	],
	"biopic": "images/me.jpg",
	"display": "function"
};

// TODO: education JSON
// display: function
var education = {
	"schools": [
	{
		"name": "Wuhan University of Technology",
		"location": "Wuhan",
		"degree": "Associate",
		"majors": ["Computer Network"],
		"date": 2011,
		"url": "http://www.wut.edu.cn"
	}
	],
	"onlineCourses": [
	{
		"title": "RHCE Rapid Track Course Virtual (RH299VT)",
		"schools": "Red Hat",
		"date": 2014,
		"url": "http://www.redhat.com/en/services/training/rh299-rhce-certification-lab"
	},
	{
		"title": "An Introduction to Interactive Programming in Python (Part 1)",
		"schools": "Coursera",
		"date": 2015,
		"url": "https://www.coursera.org/account/accomplishments/verify/FN3592GWHF"
	},
	{
		"title": "An Introduction to Interactive Programming in Python (Part 2)",
		"schools": "Coursera",
		"date": 2015,
		"url": "https://www.coursera.org/account/accomplishments/verify/8XWQNNJBZW"
	},
	{
		"title": "Intro to HTML and CSS",
		"schools": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "JavaScript Basics",
		"schools": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	},
	],
	"display": "function"
};

// TODO: work JSON
// display: function
var work = {
	"jobs": [
	{
		"employer": "Hewlet-Packard Company",
		"title": "System Enginner",
		"location": "Wuhan",
		"dates": "2011 - Now",
		"description": "Cloud implementation and operation"
	}
	],
	"display": "function"
};

// TODO: projects
// projects: array of objects with
//       images: array with string urls
// display: function
var projects = {
	"projects": [
	{
		"title": "System Engineer",
		"dates": "2012 - now",
		"description": "HP Helion Managed Virtual Private Cloud",
		"images": ""
	},
	{
		"title": "Database Engineer",
		"dates": "2011 - 2012",
		"description": "Oracle automation",
		"images": ""
	}
	],
	"display": "function"
};

// TODO: Iterate through each JSON and append its information to index.html in the correct section.

// TODO:  First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.

// TODO:  Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()

// TODO:  You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume JSONs.

// TODO:  Here’s an example of some code that would add the location of one your companies to the page:

// TODO:  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

// TODO:  $(".work-entry:last").append(formattedLocation);

// TODO:  Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.

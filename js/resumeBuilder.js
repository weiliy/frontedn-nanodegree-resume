// TODO: Build four JSONs, each one representing a different resume section,
// TODO: bio JSON
// name : string
// role : string
// contacts : an object with
//       mobile: string
//       email: string 
//       github: string
//       twitter: string 
//       location: string
// welcomeMessage: string 
// skills: array of strings
// biopic: url
// display: function

// TODO: education JSON
// schools: array of objects with
//      name: string
//      location: string
//      degree: string
//      majors: array of strings
//      dates: integer (graduation date)
//      url: string
// onlineCourses: array with
//      title: string
//      school: string
//      date: integer (date finished)
//      url: string
// display: function

// TODO: work JSON
// jobs: array of objects with
//      employer: string 
//      title: string 
//      location: string 
//      dates: string (works with a hyphen between them)
//      description: string 
// display: function

// TODO: projects
// projects: array of objects with
//       title: string 
//       dates: string (works with a hyphen between them)
//       description: string
//       images: array with string urls
// display: function

// TODO: Iterate through each JSON and append its information to index.html in the correct section.

// TODO:  First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.

// TODO:  Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()

// TODO:  You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume JSONs.

// TODO:  Here’s an example of some code that would add the location of one your companies to the page:

// TODO:  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

// TODO:  $(".work-entry:last").append(formattedLocation);

// TODO:  Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.

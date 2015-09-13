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
		"blog": "http://www.weiliy.net",
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
		"school": "Red Hat",
		"date": 2014,
		"url": "http://www.redhat.com/en/services/training/rh299-rhce-certification-lab"
	},
	{
		"title": "An Introduction to Interactive Programming in Python (Part 1)",
		"school": "Coursera",
		"date": 2015,
		"url": "https://www.coursera.org/account/accomplishments/verify/FN3592GWHF"
	},
	{
		"title": "An Introduction to Interactive Programming in Python (Part 2)",
		"school": "Coursera",
		"date": 2015,
		"url": "https://www.coursera.org/account/accomplishments/verify/8XWQNNJBZW"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
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
		"images": []
	},
	{
		"title": "Database Engineer",
		"dates": "2011 - 2012",
		"description": "Oracle automation",
		"images": []
	}
	],
	"display": "function"
};

// Header
var formatHeadName = HTMLheaderName.replace("%data%", bio.name);
var formatHeadrRole = HTMLheaderRole.replace("%data%", bio.role);

var header = $("#header");
header.prepend(formatHeadrRole);
header.prepend(formatHeadName);

var formatContactGeneric = HTMLcontactGeneric.replace("%contact%", "email");
formatContactGeneric = formatContactGeneric.replace("%data%", bio.contacts.email);
var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var topContacts = $("#topContacts");
topContacts.append(formatMobile);
topContacts.append(formatEmail);
topContacts.append(formatTwitter);
topContacts.append(formatGithub);
topContacts.append(formatLocation);


var formatBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formatWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

header.append(formatBioPic);
header.append(formatWelcomMsg);

header.append(HTMLskillsStart);
var skillsH3 = $("#skills-h3");
for (var skill in bio.skills) {
	var formatSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	skillsH3.append(formatSkills);
}

// Work Experience
var workExperience = $("#workExperience");
for(var job in work.jobs) {
	var formatWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var fromatWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formatWorkDatas = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formatWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formatWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	workExperience.append(HTMLworkStart);
	$(".work-entry:last").append(formatWorkEmployer, fromatWorkTitle, 
		formatWorkDatas, formatWorkLocation, formatWorkDescription);
}

// Projects
var idProjects = $("#projects");
for(var project in projects.projects) {
	var formatProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var fromatProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	var fromatProjectDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
	var formatProjectImage = "";
	for (var image in projects.projects[project].images) {
		formatProjectImage += HTMLprojectImage.replace("%data%". projects.projects[project].images[image]);
	}

	idProjects.append(HTMLprojectStart);
	$(".project-entry:last").append(formatProjectTitle, fromatProjectDates, fromatProjectDescription, formatProjectImage);
}

// Education
var idEducation = $("#education");
idEducation.append(HTMLschoolStart);
for(var school in education.schools) {
	var formatSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formatSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formatDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
	var formatSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formatSchoolMajor = "";
	for (var major in education.schools[school].majors) {
		formatSchoolMajor += HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
	}

	idEducation.append(HTMLschoolStart);
	$(".education-entry:last").append(formatSchoolName, formatSchoolDegree, formatDates, formatSchoolLocation, formatSchoolMajor);
}

idEducation.append(HTMLonlineClasses);
for(var onlineCourse in education.onlineCourses) {
	var formatOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	var formatOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	var formatOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
	var formatOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

	idEducation.append(HTMLschoolStart);
	$(".education-entry:last").append(formatOnlineTitle, formatOnlineSchool, formatOnlineDates, formatOnlineURL);
}

var footerContacts = $("#footerContacts");
footerContacts.append(formatMobile);
footerContacts.append(formatEmail);
footerContacts.append(formatTwitter);
footerContacts.append(formatGithub);
footerContacts.append(formatLocation);
'use strict';

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
	"display": null
};

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
	"display": null
};

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
	"display": null
};

// TODO: projects
//       images: array with string urls
var projects = {
	"projects": [
	{
		"title": "System Engineer",
		"dates": "2012 - now",
		"description": "HP Helion Managed Virtual Private Cloud",
		"images": [
		"images/helion01.jpg", "images/helion02.png" 
		]
	},
	{
		"title": "Database Engineer",
		"dates": "2011 - 2012",
		"description": "Oracle automation",
		"images": []
	}
	],
	"display": null
};

bio.display = function() {
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
	bio.skills.forEach(function(skill) {
		var formatSkills = HTMLskills.replace("%data%", skill);
		skillsH3.append(formatSkills);
	});

	// Footer
	var footerContacts = $("#footerContacts");
	footerContacts.append(formatMobile);
	footerContacts.append(formatEmail);
	footerContacts.append(formatTwitter);
	footerContacts.append(formatGithub);
	footerContacts.append(formatLocation);
};

// Work Experience
work.display = function() {
	var workExperience = $("#workExperience");
	work.jobs.forEach(function(job) {
		var formatWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var fromatWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		var formatWorkDatas = HTMLworkDates.replace("%data%", job.dates);
		var formatWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		var formatWorkDescription = HTMLworkDescription.replace("%data%", job.description);

		workExperience.append(HTMLworkStart);
		$(".work-entry:last").append(formatWorkEmployer, fromatWorkTitle, 
			formatWorkDatas, formatWorkLocation, formatWorkDescription);
	});
};

// Projects
projects.display = function() {
	var idProjects = $("#projects");
	projects.projects.forEach(function(project) {
		var formatProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var fromatProjectDates = HTMLprojectDates.replace("%data%", project.dates);
		var fromatProjectDescription = HTMLworkDescription.replace("%data%", project.description);
		var formatProjectImage = "";
		project.images.forEach(function(imageURL) {
			formatProjectImage += HTMLprojectImage.replace("%data%", imageURL);
		});

		idProjects.append(HTMLprojectStart);
		$(".project-entry:last").append(formatProjectTitle, fromatProjectDates, fromatProjectDescription, formatProjectImage);
	});
};

// Education
education.display = function() {
	var idEducation = $("#education");
	idEducation.append(HTMLschoolStart);
	education.schools.forEach(function(school) {
		var formatSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formatSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formatDates = HTMLschoolDates.replace("%data%", school.date);
		var formatSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formatSchoolMajor = "";
		school.majors.forEach(function(major) {
			formatSchoolMajor += HTMLschoolMajor.replace("%data%", major);
		});

		idEducation.append(HTMLschoolStart);
		$(".education-entry:last").append(formatSchoolName, formatSchoolDegree, formatDates, formatSchoolLocation, formatSchoolMajor);
	});

	idEducation.append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		var formatOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formatOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formatOnlineDates = HTMLonlineDates.replace("%data%", course.date);
		var formatOnlineURL = HTMLonlineURL.replace("%data%", course.url);

		idEducation.append(HTMLschoolStart);
		$(".education-entry:last").append(formatOnlineTitle, formatOnlineSchool, formatOnlineDates, formatOnlineURL);
	});
};

// Map display
function displayMap() {
	$("#mapDiv").append(googleMap);
}

// Internationalize Button
function dispalyInternationalizeButton() {
	$("#lets-connect").append(internationalizeButton);
}

bio.display();
work.display();
projects.display();
education.display();
displayMap();
dispalyInternationalizeButton();


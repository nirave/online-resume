var bio = {
	"name" : "Nirave Kadakia",
	"role" : "Product Manager",
	"contacts" : {
		  "mobile" : "(408) 802-1689",
		  "email" : "nirave@gmail.com",
		  "github" : "nirave",
		  "twitter" : "faketwitteraccount",
		  "location": "San Jose",
		  },
	"welcomeMessage" : "Welcome to Nirave Kadakia's Test Resume",
	"skills" : ["Product Management", "Strategy", "Java"],
	"biopic": "images/nirave-headshot.jpg"
}

var education = {
	"schools": [
		{
			"name" : "University of California, Berkeley",
			"location" : "Berkeley, Ca.",
			"degree" : "Masters",
			"majors" : ["Masters of Business Administration"],
			"dates" : "2009",
			"url": "http://www.berkeley.edu"
		},
		{
			"name" : "University of California, Berkeley",
			"location" : "Berkeley, Ca.",
			"degree" : "BA",
			"majors" : ["Computer Science"],
			"dates" : "1999",
			"url": "http://www.berkeley.edu"
		}
	],
	"onlineCourses":[
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Oracle",
			"title" : "Senior Product Manager",
			"location" : "San Jose, Ca.",
			"dates" : "2010 - 2015",
			"description" : "Responsible for Product Management for various Unified Communcations Projects"
		},
		{
			"employer" : "Sun Microsystems",
			"title" : "Senior Member of Technical Staff",
			"location" : "Santa Clara, Ca.",
			"dates" : "2000 - 2010",
			"description" : "Infrastructure and Automation engineer for E-mail,Calendar, and Address Book Servers"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Nuclear Strike",
			"dates" : "1997",
			"description" : "Game tester for Electronic Art's Nuclear Strike PS1 game",
			"images": [ "images/nuclear-strike-small.jpg" ]
			}
	]
}

bio.display = function () {
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEMail);
	$("#footerContacts").append(formattedEMail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBiopic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		$(".work-entry:last").append(formattedEmployer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedOnlineSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);

		}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);